document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#mobile-menu");
  const navList = document.querySelector(".nav-list");

  menu.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
              navList.style.animation = "salida 0.2s ease-in-out forwards";
      setTimeout(() => {
        navList.classList.remove("active");
        navList.classList.remove("salida");

      }, 300); 
    } else {
      navList.style.animation = "entrada 0.2s ease-in-out forwards";
      navList.classList.add("active");
    }
  });
});

// Array de objetos, cada uno representa una receta
let recetas = [
  {
    imagen: "img/flan napolitano.webp",
    descripcion: "Flan Napolitano",
 
  },
  {
    imagen: "img/brownie.webp",
    descripcion: "Brownie",

  },
  {
    imagen: "img/flan.webp",
    descripcion: "flan",
  },
  {
    imagen: "img//gelatina de choco fresa.webp",
    descripcion: "gelatina de chocofresa",
  },

];

// Obtén el elemento del DOM donde quieres insertar las recetas
let carrusel = document.querySelector(".carrusel");

// Genera el HTML para cada receta y añádelo al carrusel
recetas.forEach((receta) => {
  let img = document.createElement("img");
  img.src = receta.imagen;

  let p = document.createElement("p");
  p.textContent = receta.descripcion;

  let divDescripcion = document.createElement("div");
  divDescripcion.appendChild(p);
  
  // Asigna la clase después de crear divDescripcion
  divDescripcion.className = "descripcion";

  let div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(divDescripcion);

  carrusel.appendChild(div);
});

let indiceActual = 0;

function mostrarReceta(indice) {
  // limpia el carrusel
  carrusel.innerHTML = "";

  // obtén la receta y crea el HTML
  let receta = recetas[indice];
  let img = document.createElement("img");
  img.src = receta.imagen;
  img.alt = receta.descripcion;

  let p = document.createElement("p");
  p.textContent = receta.descripcion;

  let div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(p);

  // añade la nueva receta al carrusel
  carrusel.appendChild(div);

  
  let previousSlide = carrusel.querySelector(".slide:not(.slide-out)");
  if (previousSlide) previousSlide.classList.add("slide-out");
}
function siguienteReceta() {
  indiceActual = (indiceActual + 1) % recetas.length; 
  mostrarReceta(indiceActual); 
  let img = document.querySelector("img");
  img.style.animation = "carrusel-entrada 0.6s ease-in-out forwards"; 
}

function recetaAnterior() {
  indiceActual = (indiceActual - 1 + recetas.length) % recetas.length; // retrocede al índice anterior, pero va al final si llega a 0
  mostrarReceta(indiceActual); 
  let img = document.querySelector("img");
    img.style.animation = "carrusel-salida 0.6s ease-in-out forwards";
}

document
  .querySelector(".flecha-izquierda")
  .addEventListener("click", recetaAnterior);
document
  .querySelector(".flecha-derecha")
  .addEventListener("click", siguienteReceta);

// muestra la primera receta al cargar la página
mostrarReceta(indiceActual);
