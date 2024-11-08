document.addEventListener('DOMContentLoaded', () => {
    const customTrack = document.querySelector('.custom-icon-track');
    const customSlides = document.querySelectorAll('.custom-icon-slide');
    const customPrevButton = document.querySelector('.custom-slider-button.custom-prev');
    const customNextButton = document.querySelector('.custom-slider-button.custom-next');
    let customCurrentIndex = 0;

    // Función para calcular el número de slides visibles según el tamaño de la pantalla
    function getVisibleSlides() {
        if (window.innerWidth <= 480) {
            return 1; // En pantallas muy pequeñas, mostrar solo 1 slide
        } else if (window.innerWidth <= 768) {
            return 2; // En tabletas, mostrar 2 slides
        } else {
            return 4; // En pantallas grandes, mostrar 4 slides
        }
    }

    // Función para actualizar la posición del carrusel
    function updateCustomSlider() {
        const visibleSlides = getVisibleSlides(); // Obtener el número de slides visibles
        const slideWidth = 100 / visibleSlides; // El ancho de cada slide en porcentaje
        customTrack.style.transform = `translateX(-${customCurrentIndex * slideWidth}%)`;
    }

    // Función para obtener el índice máximo permitido para evitar desplazamientos fuera de los límites
    function getMaxIndex() {
        const visibleSlides = getVisibleSlides();
        return Math.max(customSlides.length - visibleSlides, 0); // Asegurarse de no sobrepasar el número de slides
    }

    // Botón "prev" (anterior)
    customPrevButton.addEventListener('click', () => {
        customCurrentIndex = (customCurrentIndex > 0) ? customCurrentIndex - 1 : getMaxIndex();
        updateCustomSlider();
    });

    // Botón "next" (siguiente)
    customNextButton.addEventListener('click', () => {
        const maxIndex = getMaxIndex();
        customCurrentIndex = (customCurrentIndex < maxIndex) ? customCurrentIndex + 1 : 0;
        updateCustomSlider();
    });

    // Escuchar el cambio de tamaño de la ventana para recalcular los índices y el deslizamiento
    window.addEventListener('resize', updateCustomSlider);

    // Inicializar la vista del carrusel
    updateCustomSlider();
});
