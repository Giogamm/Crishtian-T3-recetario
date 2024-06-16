let indiceActual = 0;
let recetas = Array.from(document.querySelectorAll(".carrusel-item"));

document.addEventListener("DOMContentLoaded", inicializarCarrusel);
document.addEventListener("contentUpdated", () => {
    inicializarCarrusel();
    inicializarDOM();
    inicializarMenu();
});

function inicializarCarrusel() {
    recetas = Array.from(document.querySelectorAll(".carrusel-item"));
    if (recetas.length > 0) {
        inicializarDOM();
    }
}

function inicializarDOM() {
    const carrusel = document.querySelector(".carrusel");
    const flechaIzquierda = document.querySelector(".flecha-izquierda");
    const flechaDerecha = document.querySelector(".flecha-derecha");

    mostrarReceta(indiceActual); // Mostrar primera receta al cargar la página

    flechaDerecha.addEventListener("click", () => {
        siguienteReceta();
    });
    flechaIzquierda.addEventListener("click", () => {
        recetaAnterior();
    });
}

function mostrarReceta(indice) {
    const carrusel = document.querySelector(".carrusel");
    carrusel.innerHTML = ""; // Limpiar contenido anterior

    const receta = recetas[indice];
    const divReceta = receta.cloneNode(true);

    carrusel.appendChild(divReceta);

    // Aplicar la animación de entrada o salida según sea necesario
    if (indiceActual === 0) {
        divReceta.style.animation = "carrusel-entrada 0.6s forwards";
    } else if (indiceActual > 0) {
        divReceta.style.animation = "carrusel-salida 0.6s forwards";
    }
}

function siguienteReceta() {
    recetas[indiceActual].style.animation = "carrusel-salida 0.6s forwards";
    indiceActual = (indiceActual + 1) % recetas.length;
    mostrarReceta(indiceActual);

    setTimeout(() => {
        recetas[indiceActual].style.animation = "carrusel-entrada 0.6s forwards";
    }, 600); // Duración de la animación
}

function recetaAnterior() {
    recetas[indiceActual].style.animation = "carrusel-salida 0.6s forwards";
    indiceActual = (indiceActual - 1 + recetas.length) % recetas.length;
    mostrarReceta(indiceActual);

    setTimeout(() => {
        recetas[indiceActual].style.animation = "carrusel-entrada 0.6s forwards";
    }, 600); // Duración de la animación
}

//abrir y cerrar el menu 
// !no funciona en el movil :(


function inicializarMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", () => {
    //ponerle display block
    navList.style.display = "block";
  });

  window.addEventListener("click", (event) => {
    if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
     navList.style.display = "none";
    }
  });
}
