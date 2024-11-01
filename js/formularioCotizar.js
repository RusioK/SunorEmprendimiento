// Inicializar EmailJS con tu User ID
emailjs.init('ECOp68bJKsmYRN75I');

const sendButton = document.getElementById('sendButton');
const cotizacionForm = document.getElementById('cotizacionForm');
const exampleModal = document.getElementById('exampleModal');
const productNameInput = document.getElementById('product_name'); // Campo de producto

// Función para validar el correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo
    return regex.test(email);
}

// Función para validar el formulario
function validateForm() {
    const fromName = document.getElementById('from_name').value.trim();
    const messageId = document.getElementById('message_id').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fromName) {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    if (!validateEmail(messageId)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    if (!message) {
        alert('Por favor, ingresa un mensaje.');
        return false;
    }
    return true;
}

// Enviar mensaje
sendButton.addEventListener('click', () => {
    if (!validateForm()) return; // Si la validación falla, no continuar

    sendButton.textContent = 'Enviando...'; // Cambiar texto del botón

    // Enviar el formulario a EmailJS
    emailjs.sendForm('default_service', 'template_11b4txw', cotizacionForm)
        .then(() => {
            alert('¡La solicitud de cotización se creó con éxito!');
            cotizacionForm.reset(); // Reiniciar el formulario
            productNameInput.value = ''; // Limpiar el campo de producto
            sendButton.textContent = 'Enviar Mensaje'; // Restablecer texto del botón
        }, (err) => {
            alert('Error al enviar: ' + JSON.stringify(err));
            sendButton.textContent = 'Enviar Mensaje'; // Restablecer texto del botón
        });
});

// Lógica del modal
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget; // Obtener el botón que activó el modal
        const recipient = button.getAttribute('data-bs-whatever'); // Obtener el valor del atributo 'data-bs-whatever'
        exampleModal.querySelector('.modal-title').textContent = `Cotización para ${recipient}`; // Actualizar título
        productNameInput.value = recipient; // Asignar nombre del producto al campo correspondiente
    });

    // Restablecer el formulario al cerrar el modal
    exampleModal.addEventListener('hidden.bs.modal', () => {
        cotizacionForm.reset(); // Reiniciar el formulario
        productNameInput.value = ''; // Limpiar el campo de producto
    });
}

// Filtro de categorías
const categoryFilter = document.getElementById('categoryFilter');
const productContainer = document.getElementById('productContainer');

categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const products = productContainer.children; // Obtener todos los productos

    Array.from(products).forEach(product => {
        const productCategory = product.dataset.category; // Obtener la categoría del producto
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            product.style.display = ''; // Mostrar el producto
        } else {
            product.style.display = 'none'; // Ocultar el producto
        }
    });
});
