let indiceActual = 0;
let recetas = [];

document.addEventListener("DOMContentLoaded", inicializarCarrusel);

document.addEventListener("contentUpdated", () => {
  inicializarCarrusel();
  inicializarDOM();
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
  divReceta.style.animation = "carrusel-entrada 0.6s forwards";
  carrusel.appendChild(divReceta); // Agregar receta clonada

  setTimeout(() => {
    divReceta.style.animation = ""; // Eliminar la animación después del tiempo de duración
  }, 600);
}

function siguienteReceta() {
  recetas[indiceActual].style.animation = "carrusel-salida 0.6s forwards";
  indiceActual = (indiceActual + 1) % recetas.length;
  mostrarReceta(indiceActual);
  recetas[indiceActual].style.animation = "carrusel-entrada 0.6s forwards";
}

function recetaAnterior() {
  recetas[indiceActual].style.animation = "carrusel-salida 0.6s forwards";
  indiceActual = (indiceActual - 1 + recetas.length) % recetas.length;
  mostrarReceta(indiceActual);
  recetas[indiceActual].style.animation = "carrusel-entrada 0.6s forwards";
}
