# 🌿 PilahPintar — Platform Peduli Lingkungan

<div align="center">

![PilahPintar Banner](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=300&fit=crop&q=80)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-EF0077?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Website multifungsi bertema lingkungan hidup yang menggabungkan edukasi, komunitas, dan layanan daur ulang dalam satu platform.**

[Demo](#) · [Dokumentasi](#) · [Kontribusi](#kontribusi) · [Laporan Bug](#)

</div>

---

## 📖 Tentang Proyek

**PilahPintar** adalah platform digital berbasis web yang dirancang untuk meningkatkan kesadaran dan aksi nyata masyarakat Indonesia terhadap lingkungan hidup. Dengan antarmuka yang modern, responsif, dan mudah digunakan, PilahPintar menyatukan berbagai layanan lingkungan — mulai dari edukasi, bank sampah, hingga pengaduan pencemaran — dalam satu ekosistem digital yang terintegrasi.

### 🎯 Tujuan Platform

- Mengedukasi masyarakat tentang pengelolaan sampah dan pelestarian lingkungan
- Memfasilitasi akses mudah ke layanan bank sampah di seluruh Indonesia
- Membangun komunitas hijau yang aktif dan terkoneksi
- Menyediakan kanal pengaduan lingkungan yang cepat dan terstruktur
- Menyajikan informasi dan artikel lingkungan yang aktual dan terpercaya

---

## ✨ Fitur Utama

### 🏠 Beranda (Hero)
- Animasi orbit interaktif dengan ikon-ikon ekologi
- Eco dots dan sparkle effects yang fully responsive
- Statistik lingkungan real-time dengan animasi counter
- Navigasi cepat ke semua layanan utama

### 📋 Tentang Kami
- Hero section fullscreen dengan efek ganti gambar (image shattering effect)
- Video modal profil organisasi
- Timeline perjalanan organisasi yang interaktif
- Profil tim dengan animasi scroll
- Section visi & misi dengan desain card modern

### 🔧 Layanan
- **Edukasi Sekolah** — Program kunjungan dan workshop untuk pelajar
- **Bank Sampah** — Sistem poin tabungan sampah dengan harga pasar real
- **Komunitas Hijau** — Forum dan grup aksi bersama
- **Pelatihan Daur Ulang** — Workshop ekonomi kreatif berbasis sampah
- **Konsultasi Lingkungan** — Layanan konsultasi profesional
- **Penghijauan** — Program tanam pohon komunal
- **Layanan Daerah** — Peta sebaran cabang di 34 provinsi Indonesia

### 📰 Artikel & Berita
- Grid artikel dengan sistem paginasi
- Filter kategori (Edukasi, Tips, Gaya Hidup, Kreatif, Lingkungan)
- Search real-time
- Modal baca artikel dengan animasi smooth
- Fitur share ke media sosial (WhatsApp, Facebook, Twitter, Email)

### 📍 Layanan Wilayah
- Peta layanan 34 provinsi seluruh Indonesia
- Detail per kota: alamat, telepon, jam operasional, email
- Statistik nasabah dan sampah terolah per cabang
- Tombol langsung ke WhatsApp dan Google Maps

### 📝 Form Pengaduan
- Multi-step form (3 langkah) dengan validasi real-time
- Upload foto bukti
- Pemilihan tingkat urgensi (Rendah / Sedang / Tinggi)
- Confirm modal sebelum submit
- Nomor tiket otomatis (format `RPT-YYYYMMDD-XXXX`)
- Animasi konfetti saat laporan berhasil terkirim

### 🎮 Games
- Mini game edukasi interaktif bertema lingkungan

---

## 🖥️ Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | 18.x | UI Library |
| **Vite** | 5.x | Build Tool & Dev Server |
| **Tailwind CSS** | 3.x | Utility-first CSS Framework |
| **Framer Motion** | 11.x | Animasi & transisi |
| **React Router DOM** | 6.x | Client-side routing |
| **React Icons** | 5.x | Icon library (FA, GI, MD, IO5) |
| **React Intersection Observer** | 9.x | Scroll-triggered animations |

---

## 🎨 Desain UI/UX

### Tema & Estetika

PilahPintar menggunakan tema **organic green** yang terinspirasi dari alam — menggabungkan palet hijau emerald dengan aksen kuning keemasan untuk menciptakan nuansa yang hangat, terpercaya, dan bersemangat.

```
Warna Primer    : green-600  (#16a34a)
Warna Sekunder  : emerald-500 (#10b981)
Aksen           : yellow-400 (#facc15)
Background      : green-50 → white gradient
Teks Utama      : gray-800
Teks Sekunder   : gray-600
```

### Prinsip Desain

- **Responsif Total** — Dioptimalkan untuk semua ukuran layar (320px hingga 1920px+)
- **Mobile-first** — Layout dirancang dari HP terlebih dahulu
- **Micro-interactions** — Hover, tap, dan scroll effects yang natural
- **Accessibility** — Kontras warna cukup dan semantic HTML
- **Performance** — Lazy loading, animasi CSS-first, minimal re-render

### Komponen Utama

```
src/
├── components/
article/
ArticleCard
ArticleCategories
ArticleGrid
ArticleHeader
ArticleModal
ArtcleSearch
Komposdetail
relatedarticles
sharemodal
succesnotification
│   ├── Navbar.jsx          # Navigasi fixed dengan dropdown
│   ├── Footer.jsx          # Footer dengan newsletter
│   ├── Hero.jsx            # Landing hero dengan orbit animation
│   ├── Stats.jsx           # Statistik lingkungan
│   ├── EducationCards.jsx  # Kartu jenis sampah
scrolltop
├── pages/
games/
pilahsampah
tebaksampah
layanan/
banksampah
daerah
edukasi
reportform
│   ├── Beranda.jsx         # Halaman utama
│   ├── Tentang.jsx         # Halaman tentang
│   ├── Layanan.jsx         # Daftar layanan
│   ├── Artikel.jsx         # Halaman artikel
│   └── 
└── data/
    └── articles.js    
    utils/
    articlleutils
         #a Data artikel
```

---

## 🚀 Instalasi & Menjalankan

### Prasyarat

Pastikan sudah terinstal:
- **Node.js** versi 18.x atau lebih baru
- **npm** atau **yarn** atau **pnpm**

### Langkah Instalasi

```bash
# 1. Clone repositori
git clone https://github.com/username/pilahpintar.git

# 2. Masuk ke direktori proyek
cd pilahpintar

# 3. Install dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`

### Build untuk Produksi

```bash
# Build
npm run build

# Preview build
npm run preview
```

### Perintah Tersedia

```bash
npm run dev        # Development server (hot reload)
npm run build      # Build untuk produksi
npm run preview    # Preview hasil build
npm run lint       # Cek kode dengan ESLint
```

---

## 📁 Struktur Proyek

```
pilahpintar/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/            # Gambar & aset statis
│   ├── components/        # Komponen reusable
│   ├── pages/             # Halaman utama
│   │   └── layanan/       # Sub-halaman layanan
│   ├── data/              # Data statis (artikel, dll)
│   ├── App.jsx            # Root component & routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🌐 Halaman & Routing

| Path | Halaman | Deskripsi |
|------|---------|-----------|
| `/` | Beranda | Landing page utama |
| `/tentang` | Tentang | Profil & informasi organisasi |
| `/layanan` | Layanan | Daftar semua layanan |
| `/layanan/edukasi` | Edukasi | Detail layanan edukasi |
| `/layanan/bank-sampah` | Bank Sampah | Sistem bank sampah |
| `/layanan/form-pengajuan` | Form Pengaduan | Formulir laporan lingkungan |
| `/layanan/daerah` | Layanan Wilayah | Sebaran layanan per provinsi |
| `/artikel` | Artikel | Berita & artikel lingkungan |
| `/games` | Games | Mini game edukasi |

---

## 📊 Data & Konten

### Artikel
Data artikel disimpan di `src/data/articles.js` dengan struktur:

```js
{
  id: 1,
  title: 'Judul Artikel',
  excerpt: 'Ringkasan artikel...',
  content: 'Isi lengkap artikel...',
  category: 'Edukasi', // Edukasi | Tips | Gaya Hidup | Kreatif | Lingkungan
  image: 'url-gambar',
  author: 'Nama Penulis',
  date: '2024-01-15',
  readTime: '5 menit',
  likes: 120,
  shares: 45,
}
```

### Wilayah
Data 34 provinsi dan detail kota tersimpan di `src/pages/layanan/LayananWilayah.jsx` — mencakup alamat cabang, nomor telepon, email, jam operasional, dan statistik nasabah.

---

## 📱 Responsivitas

Platform ini dioptimalkan untuk:

| Perangkat | Breakpoint | Keterangan |
|-----------|-----------|------------|
| HP kecil | `< 375px` | Layout single column |
| HP standar | `375px–640px` | Grid 2 kolom untuk card |
| Tablet | `640px–1024px` | Layout medium |
| Laptop kecil | `1024px–1280px` | Desktop layout compact |
| Laptop/Desktop | `1280px+` | Layout penuh |

---

## 🤝 Kontribusi

Kontribusi sangat disambut! Ikuti langkah berikut:

```bash
# 1. Fork repositori

# 2. Buat branch fitur baru
git checkout -b fitur/nama-fitur

# 3. Commit perubahan
git commit -m "feat: tambah fitur X"

# 4. Push ke branch
git push origin fitur/nama-fitur

# 5. Buat Pull Request
```

### Konvensi Commit

```
feat:     Fitur baru
fix:      Perbaikan bug
style:    Perubahan styling/CSS
refactor: Refactor kode
docs:     Perubahan dokumentasi
chore:    Update dependensi/konfigurasi
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

## 📞 Kontak

**EcoCare / PilahPintar**

- 🌐 Website: [ecosafezone.netlify.app](#)
- 📧 Email: nazwadn9@gmail.com
- 📱 WhatsApp: +62 821-3411-7789

---

<div align="center">

Made with 🌍 for a better earth

**PilahPintar** — *Pilah Sampah, Pintar Lingkungan*

</div>