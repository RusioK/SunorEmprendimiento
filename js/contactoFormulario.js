const btn = document.getElementById('button');
const alertBox = document.getElementById('alert');


document.getElementById('form').addEventListener('submit', function(event) {
  emailjs.init('ECOp68bJKsmYRN75I');
  event.preventDefault();

  // Limpiar alertas previas
  alertBox.style.display = 'none';
  alertBox.textContent = '';

  // Validación de campos
  const name = document.getElementById('to_names').value.trim();
  const email = document.getElementById('message_ide').value.trim();
  const message = document.getElementById('messages').value.trim();

  if (!name || !email || !message) {
    showAlert('Por favor, complete todos los campos.', 'error');
    return;
  }

  // Validación de formato de correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showAlert('Por favor, ingrese un correo electrónico válido.', 'error');
    return;
  }

  // Cambiar el estado del botón y enviar el formulario
  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_36en1ze';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      showAlert('¡Mensaje enviado con éxito!', 'success');
      this.reset(); // Limpiar formulario tras el envío
    }, (err) => {
      btn.value = 'Send Email';
      showAlert('Error al enviar el mensaje. Intente nuevamente.', 'error');
    });
});

// Función para mostrar alertas
function showAlert(message, type) {
  alertBox.style.display = 'block';
  alertBox.textContent = message;
  alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
  alertBox.style.color = 'white';
  alertBox.style.fontWeight = 'bold';
}
