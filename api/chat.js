const allowedMethods = ['POST', 'OPTIONS'];

const systemInstruction = `
Kamu adalah Te-Fa AI, customer service semi-formal untuk Service Center Te-Fa.
Jawab dalam Bahasa Indonesia dengan ramah, jelas, ringkas, dan profesional.

Informasi resmi:
- Layanan: perbaikan, pemasangan, dan servis bergaransi.
- Perangkat: hampir semua alat elektronik rumahan seperti mesin cuci, kipas angin, audio, dan perangkat rumah tangga lainnya.
- TV, HP, laptop, dan terutama PC boleh ditanyakan terlebih dahulu, tetapi kami belum berpengalaman menanganinya sehingga tidak boleh menjanjikan hasil servis.
- Rentang harga jasa adalah Rp20.000 sampai maksimal Rp75.000. Harga tersebut hanya jasa, sedangkan sparepart atau komponen dihitung terpisah.
- WhatsApp teknisi: +62 877 1117 7813.
- Email: tefaelinnedutase@gmail.com.
- Konsultasi dan diagnosa awal gratis.
- Durasi pengerjaan bergantung pada jenis kerusakan, ketersediaan komponen, dan hasil diagnosa.
- Lokasi tersedia melalui tombol Google Maps pada website.

Aturan penting:
- Jangan mengarang harga, garansi, durasi, lokasi, atau kebijakan yang tidak tersedia.
- Jika ditanya harga, jelaskan bahwa rentang jasa adalah Rp20.000 sampai maksimal Rp75.000 dan sparepart tidak termasuk. Untuk estimasi yang lebih tepat, minta jenis perangkat, merek, gejala kerusakan, dan kebutuhan servis.
- Jika informasi belum cukup untuk menentukan estimasi, jawab persis: "Perlu didiagnosa terlebih dahulu oleh teknisi." Kamu boleh menambahkan pertanyaan singkat setelah kalimat itu.
- Untuk kerusakan listrik, sarankan pengguna mematikan dan mencabut perangkat bila aman, serta tidak membongkar sendiri.
- Jika pertanyaan perlu tindakan manusia, arahkan ke WhatsApp.
`;

function sendJson(response, status, body) {
  response.status(status).json(body);
}

module.exports = async function handler(request, response) {
  if (!allowedMethods.includes(request.method)) {
    response.setHeader('Allow', allowedMethods.join(', '));
    return sendJson(response, 405, { error: 'Method tidak diizinkan.' });
  }

  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(204).end();
  }

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Cache-Control', 'no-store');

  if (!process.env.GROQ_API_KEY) {
    return sendJson(response, 500, { error: 'GROQ_API_KEY belum diatur di environment backend.' });
  }

  const question = typeof request.body?.question === 'string' ? request.body.question.trim() : '';
  const history = Array.isArray(request.body?.history) ? request.body.history : [];

  if (!question || question.length > 1000) {
    return sendJson(response, 400, { error: 'Pertanyaan tidak valid atau terlalu panjang.' });
  }

  const safeHistory = history
    .filter((message) => message && (message.role === 'user' || message.role === 'model') && typeof message.text === 'string')
    .slice(-10)
    .map((message) => ({
      role: message.role === 'model' ? 'assistant' : 'user',
      content: message.text.slice(0, 1000)
    }));

  try {
    const groqResponse = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: process.env.GROQ_MODEL || 'openai/gpt-oss-20b',
          messages: [
            { role: 'system', content: systemInstruction },
            ...safeHistory,
            { role: 'user', content: question }
          ],
          temperature: 0.35,
          max_tokens: 500
        })
      }
    );

    const result = await groqResponse.json();
    if (!groqResponse.ok) {
      console.error('Groq API error:', result);
      const providerMessage = result.error?.message || `Groq HTTP ${groqResponse.status}`;
      return sendJson(response, 502, { error: `Groq menolak permintaan: ${providerMessage}` });
    }

    const answer = result.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      return sendJson(response, 502, { error: 'AI tidak menghasilkan jawaban.' });
    }

    return sendJson(response, 200, { answer });
  } catch (error) {
    console.error('Chat handler error:', error);
    return sendJson(response, 500, { error: 'Terjadi gangguan saat menghubungi AI.' });
  }
};
