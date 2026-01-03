# Panduan Berkontribusi (Tim Agency)

Halo! Panduan ini dibuat agar alur kerja kita tetap teratur dan riwayat proyek tetap profesional di mata klien.

## 1. Alur Kerja (Workflow)

Kita menggunakan sistem **Branch Protection** untuk menjaga integritas kode utama.

1. **Buat Branch Baru**: Gunakan nama yang deskriptif, contoh: `feat/fitur-baru` atau `fix/perbaikan-bug`.
2. **Push & Pull Request (PR)**: Setelah pekerjaan di branch selesai, buat Pull Request ke branch `main`.
3. **Self-Merge**: Karena kita tidak mewajibkan approval, kamu bisa langsung melakukan merge setelah memastikan kode aman.

## 2. Standar Penggabungan (Merge)

- **Vercel Build**: Pastikan status check dari Vercel berhasil (centang hijau) sebelum kamu melakukan merge. Jangan merge jika build gagal!
- **Squash and Merge**: Gunakan metode **Squash and Merge** saat menggabungkan kode ke `main`. Ini penting agar riwayat commit kita di branch utama tetap bersih dan rapi (satu fitur = satu commit).

## 3. Kebersihan Kode

- Pastikan tidak ada `console.log` yang tertinggal.
- Pastikan tidak ada file sampah atau folder `node_modules` yang ikut ter-push.

## 4. Keadaan Darurat

Jika ada perbaikan mendesak yang harus segera tayang, gunakan akses Admin untuk melakukan bypass selama hal tersebut aman untuk sistem.

---

_Dibuat untuk kecepatan dan efisiensi tim._
