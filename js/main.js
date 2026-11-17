// Perlindungan ringan: menu "simpan gambar" dan seret gambar dimatikan.
document.addEventListener('contextmenu', function (e) { if (e.target && e.target.tagName === 'IMG') e.preventDefault(); });
document.addEventListener('dragstart', function (e) { if (e.target && e.target.tagName === 'IMG') e.preventDefault(); });

document.addEventListener('DOMContentLoaded', function () {
    var D = window.MURDES || {};

    // Statistik: angkanya diisi di data.js dan naik dari 0 saat bagian ini terlihat.
    var works = D.works || [];
    var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function countUp(el, n) {
        n = Number(n) || 0;
        var big = n >= 1000;
        var target = big ? n / 1000 : n;
        var suffix = big ? 'K+' : '+';
        var show = function (x) {
            el.textContent = (Number.isInteger(target) ? Math.round(x) : x.toFixed(1).replace('.', ',')) + suffix;
        };
        if (reduceMotion || !window.requestAnimationFrame) { show(target); return; }
        var t0 = null;
        function tick(t) {
            if (t0 === null) t0 = t;
            var p = Math.min((t - t0) / 1200, 1);
            show(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        }
        show(0);
        requestAnimationFrame(tick);
    }
    [['stat-project', D.totalTemplate], ['stat-asset', D.totalAsset], ['stat-tutorial', D.totalTutorial]].forEach(function (s) {
        var el = document.getElementById(s[0]);
        if (!el) return;
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) { io.disconnect(); countUp(el, s[1]); }
            });
            io.observe(el);
        } else {
            countUp(el, s[1]);
        }
    });

    // Software & tools: berjalan loop dari kanan ke kiri.
    // Satu grup diulang beberapa kali supaya cukup lebar, lalu grup digandakan agar loop mulus.
    var tools = document.getElementById('tools');
    var list = D.tools || [];
    function makeTool(t) {
        var el = document.createElement('div');
        el.className = 'tool';
        var ic = document.createElement('div');
        ic.className = 'tool-icon';
        if (t.icon) {
            var img = document.createElement('img');
            img.src = t.icon; img.alt = ''; img.loading = 'lazy';
            ic.appendChild(img);
        } else {
            ic.textContent = t.name.slice(0, 2).toUpperCase();
        }
        el.title = t.name;
        el.setAttribute('aria-label', t.name);
        el.appendChild(ic);
        return el;
    }
    if (list.length) {
        for (var g = 0; g < 2; g++) {
            var group = document.createElement('div');
            group.className = 'tools-group';
            if (g === 1) group.setAttribute('aria-hidden', 'true');
            for (var r = 0; r < 3; r++) list.forEach(function (t) { group.appendChild(makeTool(t)); });
            tools.appendChild(group);
        }
    }

    // Katalog gaya album (seperti Google Foto): tinggi baris sama, lebar mengikuti rasio asli gambar.
    var album = document.getElementById('gallery');
    var GAP = 6;
    var items = [];

    function parseRatio(r) {
        if (typeof r === 'string' && r.indexOf('/') > 0) {
            var p = r.split('/');
            return Number(p[0]) / Number(p[1]) || 1;
        }
        return Number(r) || 1;
    }

    function makeTile(w) {
        var f = document.createElement('figure');
        f.className = 'work';
        if (w.image) {
            var img = document.createElement('img');
            img.src = w.image; img.alt = w.title || w.tag || ''; img.decoding = 'async';
            f.appendChild(img);
        } else {
            var ph = document.createElement('div');
            ph.className = 'work-ph';
            ph.textContent = w.tag || 'Project';
            f.appendChild(ph);
        }
        if (w.title) {
            var cap = document.createElement('figcaption');
            cap.className = 'work-label';
            cap.textContent = w.title;
            f.appendChild(cap);
        }
        return f;
    }

    // Bagi karya ke baris-baris. Tiap baris diskala supaya pas selebar kolom.
    function layout() {
        var W = album.getBoundingClientRect().width;
        if (!W || !items.length) return;
        var H = W < 520 ? 150 : 210;   // tinggi baris yang diinginkan (px)
        var row = [], sum = 0;
        album.textContent = '';

        function flush(fill) {
            if (!row.length) return;
            var h = fill ? (W - GAP * (row.length - 1)) / sum : H;
            var el = document.createElement('div');
            el.className = 'album-row';
            row.forEach(function (it) {
                it.el.style.height = h + 'px';
                it.el.style.flex = fill ? it.ratio + ' 1 0%' : '0 0 ' + (h * it.ratio) + 'px';
                el.appendChild(it.el);
            });
            album.appendChild(el);
            row = []; sum = 0;
        }

        items.forEach(function (it) {
            row.push(it); sum += it.ratio;
            if (sum * H + GAP * (row.length - 1) < W) return;   // baris belum penuh
            if (row.length > 1) {
                // Pilih baris dengan atau tanpa karya terakhir, mana yang tingginya lebih dekat ke H.
                var hWith = (W - GAP * (row.length - 1)) / sum;
                var sumWithout = sum - it.ratio;
                var hWithout = (W - GAP * (row.length - 2)) / sumWithout;
                if (Math.abs(hWithout - H) < Math.abs(hWith - H)) {
                    row.pop(); sum = sumWithout; flush(true);
                    row.push(it); sum = it.ratio;
                    if (sum * H >= W) flush(true);
                    return;
                }
            }
            flush(true);
        });
        // Baris terakhir: kalau sudah hampir penuh dilebarkan, kalau tidak dibiarkan ukuran aslinya.
        flush(sum * H + GAP * Math.max(row.length - 1, 0) >= W * 0.78);
    }

    function build() {
        items.forEach(function (it) { it.el = makeTile(it.w); });
        layout();
        var lastW = album.getBoundingClientRect().width, raf = 0;
        window.addEventListener('resize', function () {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(function () {
                var w = album.getBoundingClientRect().width;
                if (Math.abs(w - lastW) > 1) { lastW = w; layout(); }
            });
        });
        // Efek kilau saat karya ditekan
        album.addEventListener('pointerdown', function (e) {
            var t = e.target.closest ? e.target.closest('.work') : null;
            if (!t) return;
            t.classList.remove('shine');
            void t.offsetWidth;
            t.classList.add('shine');
        });
        album.addEventListener('animationend', function (e) {
            if (e.target.classList) e.target.classList.remove('shine');
        });
    }

    if (!works.length) {
        album.outerHTML = '<p class="empty">Belum ada project.</p>';
    } else {
        // Rasio tiap gambar diambil dari data.js (ratio) atau dibaca dari file gambarnya.
        var pending = works.length;
        var done = function (i, ratio) {
            items[i] = { w: works[i], ratio: ratio, el: null };
            if (--pending === 0) build();
        };
        works.forEach(function (w, i) {
            if (w.ratio) { done(i, parseRatio(w.ratio)); return; }
            if (!w.image) { done(i, 1); return; }
            var im = new Image();
            im.onload = function () { done(i, im.naturalWidth / im.naturalHeight || 1); };
            im.onerror = function () { done(i, 1); };
            im.src = w.image;
        });
    }
});
