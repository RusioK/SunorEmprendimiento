// Inicializar EmailJS con tu User ID
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('ECOp68bJKsmYRN75I');

    const sendButton = document.getElementById('sendButton');
    const clearButton = document.getElementById('clearButton');
    const cotizacionForm = document.getElementById('cotizacionForm');
    const exampleModal = document.getElementById('exampleModal');
    const productNameInput = document.getElementById('product_name');
    const categoryFilter = document.getElementById('categoryFilter');
    const productContainer = document.getElementById('productContainer');

    // Validar el formulario
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

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

    // Evento de envío
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            if (!validateForm()) return;

            sendButton.textContent = 'Enviando...';

            emailjs.sendForm('default_service', 'template_11b4txw', cotizacionForm)
                .then(() => {
                    alert('¡La solicitud de cotización se creó con éxito!');
                    cotizacionForm.reset();
                    productNameInput.value = '';
                    sendButton.textContent = 'Enviar Mensaje';
                }, (err) => {
                    alert('Error al enviar: ' + JSON.stringify(err));
                    sendButton.textContent = 'Enviar Mensaje';
                });
        });
    }


    // Modal de ejemplo
    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const recipient = button.getAttribute('data-bs-whatever');
            exampleModal.querySelector('.modal-title').textContent = `Cotización para ${recipient}`;
            productNameInput.value = recipient;
        });

        exampleModal.addEventListener('hidden.bs.modal', () => {
            cotizacionForm.reset();
            productNameInput.value = '';
        });
    }

    // Filtro de categorías
    if (categoryFilter && productContainer) {
        categoryFilter.addEventListener('change', () => {
            const selectedCategory = categoryFilter.value;
            const products = productContainer.children;

            Array.from(products).forEach(product => {
                const productCategory = product.dataset.category;
                product.style.display = (selectedCategory === 'all' || productCategory === selectedCategory) ? '' : 'none';
            });
        });
    }
});





