/* script.js */

function loadContent(page) {
    const iframe = document.getElementById('content-frame');
    iframe.style.opacity = 0;
    setTimeout(() => {
        iframe.src = page;
        iframe.onload = () => iframe.style.opacity = 1;
    }, 200);
}
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});
