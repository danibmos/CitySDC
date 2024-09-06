let prevScrollPos = window.pageYOffset;
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const headerHeight = header.offsetHeight;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (currentScrollPos < 50) {
        // Estamos en la parte superior
        header.style.top = "0";
        header.style.height = "120px"; // Ajusta este valor según tus necesidades
        nav.style.opacity = "1";
        logo.classList.remove('logo-fixed');
    } else if (prevScrollPos > currentScrollPos) {
        // Scrolling hacia arriba
        header.style.top = "0";
        header.style.height = "100px"; // Altura reducida del header
        nav.style.opacity = "1";
        logo.classList.add('logo-fixed');
    } else {
        // Scrolling hacia abajo
        header.style.top = `-120px`;
        nav.style.opacity = "0";
        logo.classList.add('logo-fixed');
    }
    
    prevScrollPos = currentScrollPos;
}

// Función para manejar la visibilidad de la barra de desplazamiento
let scrollTimer;
function handleScrollVisibility() {
    document.body.classList.add('scrolling');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
    }, 1000); // La barra desaparece después de 1 segundo de inactividad
}

// Agregar el evento de scroll
window.addEventListener('scroll', handleScrollVisibility);