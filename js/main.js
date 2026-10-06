function copyWallet(id) {
    const address = document.getElementById(id).textContent;
    const btn = event.target;
    navigator.clipboard.writeText(address).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => {
            btn.textContent = original;
        }, 2000);
    });
}

function toggleWallets() {
    const block = document.getElementById('walletsBlock');
    block.classList.toggle('open');
}

function toggleHero() {
    const hero = document.querySelector('.hero');
    hero.classList.toggle('collapsed');
}

function openModal(text) {
    document.getElementById('modalText').textContent = text;
    document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
    document.getElementById('modal').classList.remove('open');
}

function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

function switchTab(tabId, updateHash) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const panel = document.getElementById(tabId);
    const link = document.querySelector('.nav-link[data-tab="' + tabId + '"]');
    if (panel) panel.classList.add('active');
    if (link) link.classList.add('active');
    if (updateHash !== false) {
        history.replaceState(null, '', '#' + tabId);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            switchTab(link.dataset.tab);
        });
    });
});