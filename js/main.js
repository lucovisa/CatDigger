function copyWallet(elementId) {
    const address = document.getElementById(elementId).textContent;
    const btn = event.target;
    navigator.clipboard.writeText(address).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

(function () {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
})();