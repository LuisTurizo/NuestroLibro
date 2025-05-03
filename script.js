// Configuración del libro
const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Mostrar portada al inicio
pages[0].style.display = 'flex';

// Botones de navegación
document.querySelector('.next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'flex';
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        pages[currentPage].style.display = 'flex';
    }
});

// Control de música
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');

btnMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊 ON';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇 OFF';
    }
});