/* Accediendo a los elementos del DOM */
const contenedor = document.querySelector('#contenedor');
const btnMenu = document.getElementById('btn-menu');
const enlace = document.querySelectorAll('#contenedor .menu-lateral a #f');

/* Convirtiendo Los Enlaces En Un Array para recorrerlos despues */
const arrayEnlace = Array.from(enlace);

/* El Event Listener Del Click */
btnMenu.addEventListener('click', barraLateral);

function barraLateral() {
    arrayEnlace.forEach(enlace => {
        if (contenedor.classList.contains('active')) {
            enlace.style.display = 'none';
        } else {
            enlace.style.display = 'inline-block';
        }
    });

    /* TOGGLE agrega o quita una imagen */
    contenedor.classList.toggle('active');
}