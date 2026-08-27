# Service Center Te-Fa

Situs web statis single-page untuk Service Center Te-Fa. Situs ini menampilkan profil layanan servis elektronik, area tentang, daftar layanan, dan formulir kontak yang terhubung ke FormSubmit serta WhatsApp.

## Fitur

- Halaman landing page dengan hero section
- Navigasi internal ke bagian Tentang, Layanan, dan Kontak
- Panel keunggulan dan statistik layanan
- Formulir kontak yang mengirim pesan melalui FormSubmit
- Tombol WhatsApp aktif untuk komunikasi langsung
- Chatbot Te-Fa AI berbasis Groq melalui backend aman
- Desain gelap dan responsif berbasis CSS murni

## Teknologi

- HTML
- CSS
- JavaScript ringan

## Struktur Proyek

- `index.html` - struktur halaman website
- `styles.css` - tampilan dan layout website
- `script.js` - interaksi sederhana formulir
- `api/chat.js` - backend Vercel Function untuk menghubungkan chatbot ke Groq

## Mengaktifkan Te-Fa AI

API key Groq tidak boleh ditulis di `script.js`, `index.html`, atau repository GitHub.
Gunakan Vercel sebagai backend:

1. Push folder proyek ke repository GitHub.
2. Import repository tersebut di [Vercel](https://vercel.com/) dan pilih folder `tefaelinnedutase` sebagai project root jika diperlukan.
3. Di Vercel buka `Project Settings` > `Environment Variables`.
4. Tambahkan variable `GROQ_API_KEY` dan isi sendiri dengan API key dari Groq Console.
5. Deploy ulang project Vercel.

Jika website dipublikasikan melalui GitHub Pages, ubah nilai `data-ai-endpoint` pada tag `body` di `index.html` menjadi URL Function Vercel, misalnya:

```html
<body data-ai-endpoint="https://nama-project.vercel.app/api/chat">
```

Jika website dijalankan dari Vercel, biarkan nilainya `/api/chat` karena frontend dan backend berada pada domain yang sama.

Te-Fa AI menggunakan gaya CS semi-formal. Untuk harga, AI tidak mengarang nominal; jika data belum cukup, AI akan meminta detail perangkat atau menyatakan bahwa perangkat perlu didiagnosa terlebih dahulu.

## Cara Menjalankan Lokal

1. Buka folder proyek
2. Jalankan file `index.html` di browser, atau
3. Jalankan server lokal:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Publish ke GitHub Pages

Proyek ini sudah siap untuk dipublish ke GitHub Pages karena berformat website statis dan tidak membutuhkan build tools.

Langkahnya:

1. Push project ke repository GitHub Anda
2. Buka tab `Settings` di repository GitHub
3. Pilih `Pages`
4. Pada `Build and deployment`, pilih `GitHub Actions`
5. Pastikan branch utama yang dipakai adalah `main`

Deploy otomatis juga sudah disiapkan menggunakan workflow di folder `.github/workflows/pages.yml`.

## Cara Mengedit

- Ubah teks dan konten di `index.html`
- Sesuaikan gaya di `styles.css`
- Tambahkan interaksi tambahan di `script.js`

## Lisensi

Our Service Center
Proyek ini adalah demo situs web statis dan dapat digunakan serta dimodifikasi sesuai kebutuhan.

For the App : 

MIT License

Copyright (c) 2026 tefaelinnedutase

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.