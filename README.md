# 🌊 Web Profil Pribadi — Tema Laut (HTML, CSS, Vanilla JS)

Template situs web portofolio & profil pribadi berdesain modern dengan nuansa samudra kebiruan, dibangun sepenuhnya menggunakan **HTML5**, **CSS3**, dan **Vanilla JavaScript** tanpa framework atau ketergantungan library eksternal.

## ✨ Fitur Utama
- **Estetika Tema Laut & Glassmorphism**: Palet warna biru laut dalam (*deep ocean*), *sky blue*, dan *teal* dengan pembatas gelombang SVG dan animasi gelembung halus.
- **Mode Terang & Gelap (Light / Dark Mode)**: Tombol pengalih tema di bilah navigasi yang menyimpan preferensi pengguna secara otomatis di `localStorage`.
- **Tanpa Aset Gambar Eksternal**: Menggunakan lencana monogram tipografi kustom dan gradasi CSS sehingga waktu muat sangat cepat.
- **Interaktivitas Vanilla JS**:
  - Filter kategori proyek secara *real-time* (`Semua`, `Web Dev`, `Riset & Desain`).
  - Animasi kemunculan elemen saat halaman digulir (*Intersection Observer API*).
  - Penghitung angka statistik otomatis.
  - Menu navigasi responsif untuk perangkat seluler & validasi formulir kontak.

## 📁 Struktur File
```text
ocean-profile-web/
├── index.html   # Struktur utama halaman web (semantik HTML5)
├── style.css    # Pengaturan tata letak, variabel warna laut, responsivitas & animasi
├── script.js    # Logika tema gelap/terang, filter proyek, gelembung & interaksi DOM
└── README.md    # Dokumentasi penggunaan dan kustomisasi
```

## 🚀 Cara Menjalankan
1. Ekstrak seluruh file ke dalam satu folder yang sama.
2. Klik dua kali file `index.html` untuk membukanya langsung di peramban (Chrome, Firefox, Edge, Safari).
3. *(Opsional)* Jika menggunakan Visual Studio Code, gunakan ekstensi **Live Server** untuk pratinjau langsung saat mengedit kode.

## 🎨 Panduan Kustomisasi Cepat
1. **Nama & Monogram**:
   - Buka `index.html`, ubah teks `NP` pada elemen `.monogram-badge` dan `.monogram-large` dengan inisial nama Anda.
   - Ganti `Nama Lengkap Anda` dan `Samudra.dev` dengan identitas Anda.
2. **Warna Tema**:
   - Buka `style.css` pada bagian `:root` dan `[data-theme="dark"]` untuk menyesuaikan kode warna hex sesuai selera.
3. **Daftar Proyek**:
   - Tambahkan atau ubah elemen `<article class="project-card">` di dalam `#projectsGrid` pada `index.html`, lalu atur atribut `data-category` agar sesuai dengan tombol filter.
4. **Formulir Kontak Aktif**:
   - Secara bawaan, formulir kontak menjalankan simulasi front-end. Untuk menerima pesan sungguhan tanpa backend, hubungkan atribut `action` pada `<form>` ke layanan seperti [Formspree](https://formspree.io/) atau [Web3Forms](https://web3forms.com/).
