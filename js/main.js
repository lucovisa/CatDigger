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

function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

function switchTab(tabId) {
    const panels = document.querySelectorAll('.tab-panel');
    const links = document.querySelectorAll('.nav-link');
    panels.forEach(p => p.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    const panel = document.getElementById(tabId);
    const link = document.querySelector('.nav-link[data-tab="' + tabId + '"]');
    if (panel) panel.classList.add('active');
    if (link) link.classList.add('active');
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