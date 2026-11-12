/* Semua isi yang sering diganti ada di file ini. Edit lalu commit, selesai.

   works : daftar project di katalog. Yang PALING ATAS tampil besar sebagai unggulan.
           title = nama project, image = path gambar (kosongkan "" kalau belum ada), tag = label kecil.
   Kalau menambah gambar, simpan di folder media/ lalu tulis misalnya "media/proyek-01.webp".
*/
window.MURDES = {
    totalAsset: 10000,   // angka polos, tanpa titik
    totalTutorial: 5,

    tools: [
        { name: 'CorelDraw',    icon: 'media/icon/cd.webp' },
        { name: 'PixelLab',     icon: 'media/icon/px.webp' },
        { name: 'AlightMotion', icon: 'media/icon/am.webp' },
        { name: 'PicsArt',      icon: '' },   // belum ada ikonnya: taruh media/icon/pc.webp lalu isi path-nya
        { name: 'Canva',        icon: '' },   // sama: media/icon/cv.webp
        { name: 'Ibis Paint',   icon: '' }    // taruh media/icon/ip.webp lalu isi path-nya
    ],

    works: [
        { title: 'Contoh Mascot Game',     image: 'media/mantap.webp',    tag: 'Mascot' },
        { title: 'Contoh Logo Esport',     image: '', tag: 'Logo' },
        { title: 'Contoh Banner Turnamen', image: '', tag: 'Banner' },
        { title: 'Contoh GFX Thumbnail',   image: '', tag: 'GFX' },
        { title: 'Contoh Overlay Stream',  image: 'media/logo-trant.webp', tag: 'Overlay' },
        { title: 'Contoh Logo Clan',       image: '', tag: 'Logo' }
    ]
};
