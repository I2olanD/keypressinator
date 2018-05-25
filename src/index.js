const container = document.getElementById('key');
window.addEventListener('keydown', event => {
  event.preventDefault();
  container.textContent = event.keyCode;
});
