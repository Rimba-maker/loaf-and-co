# PRD: Loaf & Co. — Bakery & Artisan Bread

## 1. Brand Identity

**Nama Brand:** Loaf & Co. Bakery
**Alasan Naming:** "Loaf" = bentuk roti utuh yang iconic, "& Co." memberi kesan craft/artisan kecil dengan dedikasi tinggi. Pendek, modern, gampang diingat.

**Tagline:** *"Roti Asli, Dipanggang Hari Ini."*

**Target Audience:**
- Urban family usia 28-45
- Conscious eater (cari roti tanpa pengawet, real sourdough)
- Coffee shop & restaurant owner (B2B)
- Gift-giver (artisan bread sebagai hadiah)

**Brand Voice:**
- Tone: Hangat, jujur, homey, sedikit nostalgic
- Style copywriting: Personal, seperti bercerita dari dapur ke pelanggan
- Avoid: Bahasa korporat, overclaim "terbaik di dunia"

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo, nav, CTA "Pesan Sekarang" |
| 2 | Hero | React island `client:load` | Showcase roti hangat baru keluar oven |
| 3 | Story | `.astro` static | Founder story, filosofi 24-hour fermentation |
| 4 | Bread Menu | React island `client:visible` | Grid produk roti dengan kategori |
| 5 | Pastry Section | React island `client:visible` | Croissant, danish, cinnamon roll |
| 6 | Daily Schedule | `.astro` static | Jadwal panggang harian (timeline visual) |
| 7 | Pre-Order CTA | `.astro` static | Form pre-order H-1 |
| 8 | Wholesale | `.astro` static | B2B untuk cafe & restaurant |
| 9 | Visit Us | `.astro` static | Map, alamat, jam buka |
| 10 | Footer | `.astro` static | Kontak, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Roti • Pastry • Cerita Kami • Wholesale • Lokasi
- CTA: **Pesan Sekarang**

### Hero
- **Headline:** Aroma Roti Segar, Setiap Pagi.
- **Subheadline:** Sourdough, ciabatta, dan pastry yang dipanggang fresh setiap hari di Jakarta Selatan. Tanpa pengawet, tanpa pemanis buatan.
- **CTA Primary:** Lihat Menu Hari Ini
- **CTA Secondary:** Cara Pre-Order

### Story
- **Heading:** Cerita Yang Dimulai Dari Satu Loyang
- **Body:** Loaf & Co. lahir dari obsesi pendiri kami, Bu Maya, terhadap roti sourdough yang difermentasi 24 jam. Setelah 3 tahun bereksperimen di dapur rumah, kami buka toko kecil di tahun 2022. Sekarang, setiap loyang masih kami panggang dengan tangan — tanpa shortcut, tanpa kompromi.

### Bread Menu
- **Heading:** Menu Roti Kami
- **Subheading:** Semua roti difermentasi minimum 24 jam untuk rasa yang lebih kompleks dan pencernaan yang lebih ringan.

Kategori:
- **Sourdough Classics:** Country Sourdough (Rp 65k), Whole Wheat Sourdough (Rp 70k), Olive Sourdough (Rp 75k)
- **Soft Bread:** Japanese Milk Bread (Rp 55k), Brioche Loaf (Rp 60k)
- **Specialty:** Rye Bread (Rp 75k), Focaccia Rosemary (Rp 50k), Ciabatta (Rp 45k)

### Pastry Section
- **Heading:** Pastry Buttery, Lapisan Sempurna
- **Body:** Setiap croissant kami butuh 3 hari proses — lipat butter, istirahat di chiller, lipat lagi. Hasilnya: 81 lapisan tipis yang renyah di luar, lembut di dalam.

Produk: Plain Croissant (Rp 25k), Pain au Chocolat (Rp 30k), Almond Croissant (Rp 35k), Cinnamon Roll (Rp 28k), Kouign-Amann (Rp 32k)

### Daily Schedule
- **Heading:** Jadwal Panggang Harian
- **Body:** Datang di waktu yang tepat untuk mendapat roti yang baru keluar oven.

Timeline:
- 06:00 — Sourdough batch pertama
- 07:30 — Croissant & pastry
- 10:00 — Soft bread & milk bread
- 14:00 — Sourdough batch kedua
- 16:00 — Restock pastry sore

### Pre-Order CTA
- **Heading:** Roti Favorit Selalu Habis Cepat?
- **Body:** Pre-order H-1 sebelum jam 18:00 untuk pickup keesokan harinya. Kami siapkan khusus untukmu.
- **CTA:** Pre-Order via WhatsApp

### Wholesale
- **Heading:** Suplai Untuk Cafe & Restoran
- **Body:** Kami suplai roti untuk 15+ cafe di Jakarta. Konsisten, fresh, harga khusus partner. Minimum order 20 loaves/hari.
- **CTA:** Diskusi Wholesale

### Visit Us
- **Heading:** Mampir & Cicipi Langsung
- **Body:** Toko kami di Jakarta Selatan buka Selasa-Minggu, 07:00-19:00 (atau sampai roti habis).
- Alamat, embed maps, jam buka

### Footer
- Tagline: *"Roti hari ini, untuk meja makanmu malam ini."*
- Sosmed: IG, TikTok (showcase behind-the-scene baking)
- Newsletter: "Dapatkan info menu baru & promo special"

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/sourdough-bread-fresh | "Sourdough bread fresh from oven" | 1920x1080 |
| Story | Unsplash | https://unsplash.com/s/photos/baker-hands-dough | "Tangan baker membentuk adonan" | 1200x800 |
| Bread - Sourdough | Unsplash | https://unsplash.com/s/photos/sourdough-loaf | "Country sourdough crust" | 800x800 |
| Bread - Milk Bread | Pexels | https://www.pexels.com/search/japanese%20milk%20bread/ | "Japanese milk bread soft" | 800x800 |
| Bread - Whole Wheat | Unsplash | https://unsplash.com/s/photos/whole-wheat-bread | "Whole wheat sourdough sliced" | 800x800 |
| Pastry - Croissant | Unsplash | https://unsplash.com/s/photos/croissant-flaky | "Croissant lapisan butter" | 800x800 |
| Pastry - Cinnamon Roll | Pexels | https://www.pexels.com/search/cinnamon%20roll/ | "Cinnamon roll glazed" | 800x800 |
| Pastry - Pain au Chocolat | Unsplash | https://unsplash.com/s/photos/pain-au-chocolat | "Pain au chocolat" | 800x800 |
| Daily Schedule BG | Unsplash | https://unsplash.com/s/photos/bakery-oven-bread | "Bread out of oven warm" | 1600x900 |
| Wholesale | Unsplash | https://unsplash.com/s/photos/cafe-bread-display | "Bread display cafe" | 1200x800 |
| Visit Us / Store | Unsplash | https://unsplash.com/s/photos/bakery-interior-warm | "Interior bakery hangat" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Steam effect on bread image — SVG steam loop
// Headline reveal: word-by-word stagger
const headlineVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } }
}
```

### Bread Menu (React island, `client:visible`)
- Grid stagger reveal: `staggerChildren: 0.08`
- Card hover: lift `y: -8`, subtle rotation `rotate: -1deg`, shadow elevation
- Image inside card: `scale: 1.08` on hover
- Tab filter (Sourdough/Soft/Specialty): `AnimatePresence` mode `wait` saat ganti kategori

### Pastry Section (React island, `client:visible`)
- Horizontal scroll snap dengan momentum
- Cards rotate slight on hover: `rotate: [-1, 1, -1]`, duration 0.5s

### Daily Schedule Timeline (React island, `client:visible`)
- Vertical timeline reveal: draw line via SVG `pathLength` animation
- Time markers fade-in stagger 0.2s
- Active time (jam saat ini) glow effect: `boxShadow` pulse

### Pre-Order CTA Button
- Subtle breathing scale: `scale: [1, 1.03, 1]`, repeat infinity, duration 2s
- On hover: stop breathing, `scale: 1.05`, color shift

### Scroll Reveal Pattern (reusable)
```tsx
const warmFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero (steam effect butuh JS langsung)
- `client:visible` → Bread Menu, Pastry, Timeline
- Sisanya: static `.astro`

---

## 7. SEO Meta

- **Title:** Loaf & Co. Bakery — Sourdough & Artisan Bread Jakarta
- **Description:** Roti sourdough, croissant, dan artisan bread fresh dipanggang setiap hari di Jakarta. Tanpa pengawet, fermentasi 24 jam. Pre-order WhatsApp.
- **Keywords:** sourdough jakarta, artisan bakery, roti fresh, croissant jakarta, bakery jakarta selatan
- **OG Image:** Close-up sourdough cross-section dengan logo overlay (1200x630)
- **Schema:** `Bakery` (LocalBusiness subtype) + `Menu` schema
