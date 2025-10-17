document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form || !alertBox) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // evita que recargue

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showAlert('Por favor completa todos los campos.', 'danger');
      return;
    }

    if (!validateEmail(email)) {
      showAlert('Correo electrónico inválido.', 'warning');
      return;
    }

    showAlert('¡Mensaje enviado correctamente!', 'success');
    form.reset();
  });

  function showAlert(message, type) {
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});