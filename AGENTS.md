# DESIGN.md — Portfolio Website

> File ini adalah sumber kebenaran desain. AI wajib membaca file ini sebelum menulis kode UI apa pun. Jangan menebak keputusan yang sudah tertulis di sini.

## 1. Konteks produk
- **Jenis**: portofolio pribadi, satu halaman (one-page, scroll sections)
- **Pemilik**: full-stack web developer (backend-heavy), sekaligus admin konten
- **Pengunjung**: recruiter dan klien potensial dari pasar remote internasional
- **Tujuan pengunjung**: dalam 10 detik paham siapa saya, apa keahlian saya, dan bagaimana menghubungi saya
- **Bahasa konten**: English
- **Perangkat**: responsive, desktop dan mobile sama pentingnya

## 2. Konsep visual
Monokrom, editorial, minimal, dengan satu elemen interaktif yang menjadi "signature".

Referensi (ambil prinsipnya, jangan disalin):
- **itssharl.ee**: bentuk geometris yang bereaksi terhadap pointer, tipografi besar, navigasi sederhana
- **masontywong.com**: nuansa immersive dengan motion design, struktur sangat ringkas
- **dustinbrett.com**: ide "window"/desktop. Hanya diambil sebagai easter egg kecil (lihat Fase 3), BUKAN konsep utama

Kata kunci: *quiet, sharp, tactile, confident*. Bukan: *ramai, penuh gradient, template generik*.

## 3. Stack (final)
| Kebutuhan | Pilihan |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animasi UI | Motion (`motion/react`, sebelumnya Framer Motion) |
| Smooth scroll | Lenis |
| Interaktif/3D (Fase 2) | React Three Fiber + drei, hanya jika dibutuhkan |
| Ikon | lucide-react |
| Font | Geist Sans + Geist Mono (`next/font`) |
| Deploy | Vercel |

Tidak ada backend. Konten disimpan di file (`/content`), diedit lewat VS Code lalu push ke GitHub, Vercel otomatis deploy. "Admin" = saya mengedit file.

Dilarang menambah library di luar tabel ini tanpa izin.

## 4. Struktur halaman (urutan section)
1. **Hero**: nama, satu kalimat peran, elemen interaktif signature, tombol scroll
2. **About**: 2-3 kalimat singkat + daftar tech stack
3. **Projects**: 3-5 project (mis. SwimComp, TutorKu). Tiap item: nama, satu baris deskripsi, tag stack, link demo/repo
4. **Experience**: timeline ringkas
5. **Contact**: email, GitHub, LinkedIn, tombol download CV
6. **Footer**: satu baris

Navigasi: header fixed minimal (nama kiri, anchor link kanan). Di mobile jadi menu fullscreen overlay.

## 5. Design tokens
Dark mode default, light mode lewat toggle (ikuti `prefers-color-scheme` saat pertama kali).

```css
:root {
  --bg: #fafafa;
  --fg: #0a0a0a;
  --muted: #6b6b6b;
  --border: #e5e5e5;
  --accent: #ff4d00;   /* dipakai HANYA untuk hover, fokus, dan satu highlight per section */
}
.dark {
  --bg: #0a0a0a;
  --fg: #fafafa;
  --muted: #8a8a8a;
  --border: #222222;
}
```

- **Aksen**: satu warna saja (`--accent`). Maksimal 1 elemen beraksen per layar.
- **Tipografi**: judul hero `clamp(3rem, 10vw, 9rem)`, tracking rapat (-0.04em), weight 500-600. Body 16-18px, line-height 1.6. Label kecil memakai Geist Mono, uppercase, 12px, tracking lebar.
- **Spacing**: kelipatan 4px. Jarak antar section 128px (desktop) / 80px (mobile).
- **Radius**: 0 untuk layout, 999px hanya untuk tag/pill dan tombol.
- **Container**: max-width 1200px, padding samping 24px (mobile) / 48px (desktop).
- **Tanpa**: shadow tebal, gradient warna-warni, glassmorphism.

## 6. Motion
- Easing standar: `cubic-bezier(0.22, 1, 0.36, 1)`
- Durasi: hover 150-200ms, entrance 600-800ms, page-level 1000ms maksimal
- Entrance: fade + translateY 24px, stagger 80ms, aktif saat elemen masuk viewport (sekali saja)
- Smooth scroll dengan Lenis
- **Wajib** hormati `prefers-reduced-motion`: matikan parallax, stagger, dan elemen signature diganti versi statis
- Animasi hanya pada `transform` dan `opacity`

## 7. Interaksi
**Fase 1 (wajib)**
- Hero: bentuk geometris sederhana (lingkaran/kotak/garis) yang mengikuti dan bereaksi pada pointer, dibuat dengan Canvas 2D atau SVG + Motion. Belum WebGL.
- Custom cursor (titik kecil + ring) yang membesar saat hover link. **Dimatikan di perangkat touch.**
- Tombol magnetik (bergeser sedikit mengikuti pointer) khusus CTA utama
- Link hover: garis bawah beranimasi

**Fase 2 (opsional)**: upgrade hero ke React Three Fiber.
**Fase 3 (opsional)**: easter egg window kecil gaya desktop OS yang terbuka lewat shortcut atau klik logo (mis. "terminal" berisi info tentang saya).

## 8. Responsive
- Mobile-first. Breakpoint Tailwind default (`sm 640`, `md 768`, `lg 1024`, `xl 1280`)
- Mobile: layout satu kolom, tanpa custom cursor, elemen interaktif hero memakai touch/drag atau gyroscope-free fallback
- Target touch minimal 44x44px

## 9. Aksesibilitas dan performa
- HTML semantik (`header`, `main`, `section`, `nav`, `footer`), satu `h1`
- Kontras teks minimal WCAG AA, fokus keyboard terlihat jelas
- Semua gambar memakai `next/image` dengan `alt`
- Target Lighthouse: Performance ≥ 90, Accessibility ≥ 95
- Bundle JS awal ringan: three.js hanya di-load dinamis (`next/dynamic`) pada Fase 2

## 10. Struktur folder
```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  /sections     (Hero, About, Projects, Experience, Contact)
  /ui           (Button, Tag, Cursor, MagneticButton, ThemeToggle)
/content
  projects.ts
  experience.ts
  profile.ts
/lib
/public
```

## 11. Aturan untuk AI
- Baca file ini dulu. Jika permintaan bertentangan dengan file ini, tanyakan sebelum menulis kode.
- Satu komponen = satu file, self-contained, props bertipe TypeScript.
- Semua teks dan data berasal dari `/content`, bukan hardcode di komponen.
- Tangani state: loading, kosong, error, dan reduced-motion.
- Jangan pakai Lorem ipsum atau data palsu. Gunakan placeholder bertanda `TODO:`.
- Jangan ubah file di luar yang diminta. Saat memperbaiki bug, sebut penyebab spesifiknya, jangan tulis ulang seluruh file.
- Dilarang: inline style, library baru tanpa izin, `!important`, warna di luar token, ai slop.
