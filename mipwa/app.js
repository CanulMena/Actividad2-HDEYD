function guardarNota() {
  const texto = document.getElementById('nota').value;
  localStorage.setItem('nota', texto);
  alert('¡Nota guardada!');
}

// Cargar la nota al iniciar
document.addEventListener('DOMContentLoaded', () => {
  const texto = localStorage.getItem('nota');
  if (texto) {
    document.getElementById('nota').value = texto;
  }
});

// Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(error => console.error('Fallo en el registro', error));
}
