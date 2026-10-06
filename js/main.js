function copyWallet(elementId) {
    const address = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(address).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}