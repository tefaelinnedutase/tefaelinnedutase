const allowedMethods = ['POST', 'OPTIONS'];

const systemInstruction = `
Kamu adalah Te-Fa AI, customer service semi-formal untuk Service Center Te-Fa.
Jawab dalam Bahasa Indonesia dengan ramah, jelas, ringkas, dan profesional.

Informasi resmi:
- Layanan: perbaikan, pemasangan, dan servis bergaransi.
- Perangkat: mesin cuci, kipas angin, TV, audio, dan elektronik rumah lainnya.
- WhatsApp teknisi: +62 877 1117 7813.
- Email: tefaelinnedutase@gmail.com.
- Konsultasi dan diagnosa awal gratis.
- Durasi pengerjaan bergantung pada jenis kerusakan, ketersediaan komponen, dan hasil diagnosa.
- Lokasi tersedia melalui tombol Google Maps pada website.

Aturan penting:
- Jangan mengarang harga, garansi, durasi, lokasi, atau kebijakan yang tidak tersedia.
- Untuk estimasi harga, minta jenis perangkat, merek, gejala kerusakan, dan kebutuhan servis.
- Jika informasi belum cukup atau harga tidak tersedia, jawab persis: "Perlu didiagnosa terlebih dahulu oleh teknisi." Kamu boleh menambahkan pertanyaan singkat setelah kalimat itu.
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

  if (!process.env.GEMINI_API_KEY) {
    return sendJson(response, 500, { error: 'GEMINI_API_KEY belum diatur di environment backend.' });
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
      role: message.role,
      parts: [{ text: message.text.slice(0, 1000) }]
    }));

  try {
    const geminiResponse = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [...safeHistory, { role: 'user', parts: [{ text: question }] }],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 500
          }
        })
      }
    );

    const result = await geminiResponse.json();
    if (!geminiResponse.ok) {
      console.error('Gemini API error:', result);
      const providerMessage = result.error?.message || `Gemini HTTP ${geminiResponse.status}`;
      return sendJson(response, 502, { error: `Gemini menolak permintaan: ${providerMessage}` });
    }

    const answer = result.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || '')
      .join('')
      .trim();

    if (!answer) {
      return sendJson(response, 502, { error: 'AI tidak menghasilkan jawaban.' });
    }

    return sendJson(response, 200, { answer });
  } catch (error) {
    console.error('Chat handler error:', error);
    return sendJson(response, 500, { error: 'Terjadi gangguan saat menghubungi AI.' });
  }
};
