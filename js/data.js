/* Semua isi yang sering diganti ada di file ini. Edit lalu commit, selesai.

   totalTemplate / totalAsset / totalTutorial : angka di bagian statistik. Tulis angka polos; 1000 ke atas otomatis jadi 10K+.
   works : daftar karya di katalog gaya album. Tinggi baris sama, lebar mengikuti rasio asli gambar.
           title = nama karya (kosongkan '' kalau tidak mau ada teks di atas gambar), image = path gambar (kosongkan "" kalau belum ada), tag = label kecil.
           ratio (opsional) = rasio gambar, misalnya 16/9. Kalau diisi, gambar tidak perlu diukur dulu sehingga halaman lebih cepat tampil.
   Kalau menambah gambar, simpan di folder media/ lalu tulis misalnya "media/proyek-01.webp".
*/
window.MURDES = {
    totalTemplate: 30,   // angka polos, tanpa titik
    totalAsset: 10000,
    totalTutorial: 5,

    tools: [
        { name: 'CorelDraw',    icon: 'media/icon/cd.webp' },
        { name: 'PixelLab',     icon: 'media/icon/px.webp' },
        { name: 'AlightMotion', icon: 'media/icon/am.webp' },
        { name: 'PicsArt',      icon: 'media/icon/pa.webp' },
        { name: 'Canva',        icon: 'media/icon/cv.webp' },
        { name: 'Ibis Paint',   icon: 'media/icon/ip.webp' }
    ],

    works: [
        { title: 'Logo 010', image: 'media/result/logo01.webp', tag: 'Logo' },
        { title: 'Logo 003', image: 'media/result/logo02.webp', tag: 'Logo' },
        { title: 'Logo 026', image: 'media/result/logo03.webp', tag: 'Logo' },
        { title: 'Logo 009', image: 'media/result/logo04.webp', tag: 'Logo' },
        { title: 'Logo 030', image: 'media/result/logo05.webp', tag: 'Logo' },
        { title: 'Logo 029', image: 'media/result/logo06.webp', tag: 'Logo' }
    ]
};
