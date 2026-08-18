# Service Center Te-Fa

Situs web statis single-page untuk Service Center Te-Fa. Situs ini menampilkan profil layanan servis elektronik, area tentang, daftar layanan, dan formulir kontak yang terhubung ke FormSubmit serta WhatsApp.

## Fitur

- Halaman landing page dengan hero section
- Navigasi internal ke bagian Tentang, Layanan, dan Kontak
- Panel keunggulan dan statistik layanan
- Formulir kontak yang mengirim pesan melalui FormSubmit
- Tombol WhatsApp aktif untuk komunikasi langsung
- Desain gelap dan responsif berbasis CSS murni

## Teknologi

- HTML
- CSS
- JavaScript ringan

## Struktur Proyek

- `index.html` - struktur halaman website
- `styles.css` - tampilan dan layout website
- `script.js` - interaksi sederhana formulir

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

Proyek ini adalah demo situs web statis dan dapat digunakan serta dimodifikasi sesuai kebutuhan.
