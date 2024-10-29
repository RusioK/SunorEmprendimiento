// Inicializar EmailJS con tu User ID
emailjs.init('ECOp68bJKsmYRN75I');

const sendButton = document.getElementById('sendButton');
const cotizacionForm = document.getElementById('cotizacionForm');

sendButton.addEventListener('click', function () {
    sendButton.textContent = 'Enviando...'; // Cambiar texto del botón

    // Enviar el formulario a EmailJS
    emailjs.sendForm('default_service', 'template_11b4txw', cotizacionForm)
        .then(() => {
            sendButton.textContent = 'Enviar Mensaje'; // Restablecer texto del botón
            alert('¡Mensaje enviado con éxito!'); // Mensaje de éxito
            cotizacionForm.reset(); // Reiniciar el formulario
        }, (err) => {
            sendButton.textContent = 'Enviar Mensaje'; // Restablecer texto del botón
            alert('Error al enviar: ' + JSON.stringify(err)); // Mensaje de error
        });
});

// Lógica del modal
const exampleModal = document.getElementById('exampleModal');
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');
        const modalTitle = exampleModal.querySelector('.modal-title');

        modalTitle.textContent = `Cotización para ${recipient}`;
    });
}
