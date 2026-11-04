document.addEventListener('DOMContentLoaded', function () {
    var D = window.MURDES || {};
    var fmt = function (n) { return Number(n).toLocaleString('id-ID') + '+'; };

    // Statistik
    var works = D.works || [];
    document.getElementById('stat-project').textContent = fmt(works.length);
    document.getElementById('stat-asset').textContent = fmt(D.totalAsset || 0);
    document.getElementById('stat-tutorial').textContent = fmt(D.totalTutorial || 0);

    // Software & tools
    var tools = document.getElementById('tools');
    (D.tools || []).forEach(function (t) {
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
        var nm = document.createElement('span');
        nm.textContent = t.name;
        el.appendChild(ic); el.appendChild(nm);
        tools.appendChild(el);
    });

    // Katalog
    var grid = document.getElementById('gallery');
    if (!works.length) {
        grid.outerHTML = '<p class="empty">Belum ada project.</p>';
    }
    works.forEach(function (w, i) {
        var f = document.createElement('figure');
        f.className = 'work' + (i === 0 ? ' work-featured' : '');
        if (w.image) {
            var img = document.createElement('img');
            img.src = w.image; img.alt = w.title; img.loading = 'lazy';
            f.appendChild(img);
        } else {
            var ph = document.createElement('div');
            ph.className = 'work-ph';
            ph.textContent = w.tag || 'Project';
            f.appendChild(ph);
        }
        var cap = document.createElement('figcaption');
        cap.className = 'work-label';
        cap.textContent = w.title;
        f.appendChild(cap);
        grid.appendChild(f);
    });
});
