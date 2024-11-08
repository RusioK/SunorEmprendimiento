// Función para alternar la visibilidad del menú móvil y animar el ícono de la hamburguesa
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active'); // Activa o desactiva la clase 'active' en el menú

    // Añadir o quitar la clase 'open' para animar el ícono de la hamburguesa
    hamburger.classList.toggle('open');
}

// Cerrar el menú cuando el usuario haga clic en un enlace del menú
const menuItems = document.querySelectorAll('#mobile-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.remove('active');  // Cierra el menú al hacer clic en un enlace
        document.querySelector('.hamburger').classList.remove('open'); // Restablece el ícono de la hamburguesa
    });
});

// Asegura que el menú se cierre al hacer clic fuera de él
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Si el clic es fuera del menú y del ícono de hamburguesa, cierra el menú
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('open'); // Restablece el ícono de la hamburguesa
    }
});
// Función para manejar el scroll
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo-container');
    const header = document.querySelector('header');
    
    // Verifica la posición del scroll
    if (window.scrollY > 100) {  // Puedes ajustar el valor según necesites
        logo.classList.add('fixed');
        header.classList.add('sticky');
    } else {
        logo.classList.remove('fixed');
        header.classList.remove('sticky');
    }
});
