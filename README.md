# BanggaPunyaWeb

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility--First-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Tentang Proyek

**BanggaPunyaWeb** merupakan **website utama (official website)** dari agency jasa pembuatan website **BanggaPunyaWeb**.  
Website ini berfungsi sebagai **company profile**, **etalase layanan**, **portfolio**, dan **media informasi** bagi calon klien.

Proyek ini dibangun dengan arsitektur modern, scalable, dan siap production menggunakan **Next.js App Router** serta terintegrasi dengan **Supabase** sebagai backend service.

---

## 🎯 Tujuan Pengembangan

- Menjadi pusat informasi resmi agency
- Menampilkan layanan pembuatan website & digital solution
- Menampilkan portfolio & studi kasus klien
- Mendukung kebutuhan SEO dan performa tinggi
- Menjadi fondasi pengembangan fitur lanjutan (admin, CMS, dashboard)

---

## ✨ Fitur Utama

- Landing Page (Home)
- Tentang Kami (Profil Agency)
- Layanan (List & Detail Layanan – Dynamic Route)
- Portfolio (Detail & Kategori)
- Blog (Detail Artikel)
- Klien / Partner
- Halaman Kontak
- SEO Friendly
- Responsive Design

---

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|---------|-----------|
| **Next.js 14** | React framework (App Router) |
| **TypeScript** | Type safety |
| **Supabase** | Database, Auth, Storage |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI Components |
| **Zod** | Schema & data validation |
| **Lucide React** | Icon system |

---

## 📂 Struktur Direktori

```bash
banggapunyaweb-main/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                 # Home
│   │   ├── tentang-kami/            # Tentang Kami
│   │   ├── layanan/
│   │   │   ├── page.tsx             # List Layanan
│   │   │   └── [slug]/              # Detail Layanan
│   │   ├── portfolio/
│   │   │   ├── page.tsx             # List Portfolio
│   │   │   ├── [slug]/              # Detail Portfolio
│   │   │   └── kategori/[slug]/     # Kategori Portfolio
│   │   ├── kontak/
│   │   ├── blog/[slug]/             # Detail Blog
│   │   └── ourclient/
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── components/                      # Reusable UI components
├── lib/
│   ├── supabase/                    # Supabase config
│   └── utils.ts
├── types/                           # TypeScript types
├── next.config.js
└── README.md

