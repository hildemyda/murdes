// Daftar karya untuk halaman utama dan halaman /design.
//
// Cara menambah atau mengganti karya:
// 1. Unggah gambarnya ke folder "karya" di repo. Nama file mengikuti nomor id:
//      karya-02-thumb.webp  -> gambar persegi kecil untuk grid
//      karya-02-a.webp      -> gambar detail pertama
//      karya-02-b.webp      -> gambar detail kedua (dan seterusnya)
//    Kalau namanya sama dengan file yang sudah ada, file lama otomatis tertimpa.
// 2. Ubah title, category, dan desc di bawah. Tanda koma di antara blok jangan sampai hilang.
// 3. Karya baru: salin satu blok { ... }, tempel di PALING ATAS, dan beri id yang belum dipakai.
//
//   title    = nama karya
//   category = kategori (kalau ada 2 kategori atau lebih, tombol filter muncul sendiri)
//   desc     = keterangan singkat (\n untuk baris baru)
//   pinned   = true supaya tampil di bagian "Pinned" di beranda (maksimal 6 yang tampil).
//              Kalau tidak ada satu pun yang pinned, beranda menampilkan 6 karya teratas.
//   thumb    = gambar persegi untuk grid
//   images   = daftar gambar detail yang tampil saat karya diklik
window.WORKS = [
  {
    id: 1,
    pinned: true,
    title: "Desain 01",
    category: "Logo",
    desc: "Yo nda tau nanya ~euoo nanya saya",
    thumb: "karya/karya-01-thumb.webp",
    images: ["karya/karya-01-a.webp", "karya/karya-01-b.webp"]
  },
  {
    id: 2,
    pinned: true,
    title: "Desain 02",
    category: "Logo",
    desc: "wefwefwew",
    thumb: "karya/karya-02-thumb.webp",
    images: ["karya/karya-02-a.webp", "karya/karya-02-b.webp"]
  },
  {
    id: 3,
    pinned: true,
    title: "Desain 03",
    category: "Logo",
    desc: "wfefweweffewfew",
    thumb: "karya/karya-03-thumb.webp",
    images: ["karya/karya-03-a.webp", "karya/karya-03-b.webp"]
  },
  {
    id: 4,
    pinned: true,
    title: "Desain 04",
    category: "Poster",
    desc: "fwefwewefwfefe",
    thumb: "karya/karya-04-thumb.webp",
    images: ["karya/karya-04-a.webp", "karya/karya-04-b.webp"]
  },
  {
    id: 5,
    pinned: true,
    title: "Desain 05",
    category: "Poster",
    desc: "efwfewfewfewwfe",
    thumb: "karya/karya-05-thumb.webp",
    images: ["karya/karya-05-a.webp", "karya/karya-05-b.webp"]
  },
  {
    id: 6,
    pinned: true,
    title: "Desain 06",
    category: "Poster",
    desc: "ewffwefewfewefw",
    thumb: "karya/karya-06-thumb.webp",
    images: ["karya/karya-06-a.webp", "karya/karya-06-b.webp"]
  },
  {
    id: 7,
    pinned: false,
    title: "Desain 07",
    category: "Logo",
    desc: "ewfefwfweefwfwe",
    thumb: "karya/karya-07-thumb.webp",
    images: ["karya/karya-07-a.webp", "karya/karya-07-b.webp"]
  },
  {
    id: 8,
    pinned: false,
    title: "Desain 08",
    category: "Banner",
    desc: "fwefewwefewffwe",
    thumb: "karya/karya-08-thumb.webp",
    images: ["karya/karya-08-a.webp", "karya/karya-08-b.webp"]
  },
  {
    id: 9,
    pinned: false,
    title: "Desain 09",
    category: "Poster",
    desc: "efwfweewewffew",
    thumb: "karya/karya-09-thumb.webp",
    images: ["karya/karya-09-a.webp", "karya/karya-09-b.webp"]
  },
  {
    id: 10,
    pinned: false,
    title: "Karya 10",
    category: "Logo",
    desc: "wefewfweffewfwewfe",
    thumb: "karya/karya-10-thumb.webp",
    images: ["karya/karya-10-a.webp", "karya/karya-10-b.webp"]
  }
];

// Aplikasi yang tampil berjalan (loop) di halaman /design.
// Cara menambah: taruh ikonnya (gambar persegi, .webp) di folder "media/icon", lalu tambahkan satu baris di bawah.
// Kalau belum punya ikonnya, kosongkan icon: "" supaya tampil dua huruf pertama nama aplikasi.
window.TOOLS = [
  { name: "CorelDraw",    icon: "media/icon/cd.webp" },
  { name: "PixelLab",     icon: "media/icon/px.webp" },
  { name: "AlightMotion", icon: "media/icon/am.webp" },
  { name: "PicsArt",      icon: "" },
  { name: "Canva",        icon: "" },
  { name: "Ibis Paint",   icon: "" }
];
