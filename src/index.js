const container = document.getElementById('key');
window.addEventListener('keydown', event => container.textContent = event.keyCode);
