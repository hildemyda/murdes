document.addEventListener('DOMContentLoaded', function () {
    var D = window.MURDES || {};
    var fmt = function (n) { return Number(n).toLocaleString('id-ID') + '+'; };

    // Statistik
    var works = D.works || [];
    document.getElementById('stat-project').textContent = fmt(works.length);
    document.getElementById('stat-asset').textContent = fmt(D.totalAsset || 0);
    document.getElementById('stat-tutorial').textContent = fmt(D.totalTutorial || 0);

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
        var nm = document.createElement('span');
        nm.textContent = t.name;
        el.appendChild(ic); el.appendChild(nm);
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
