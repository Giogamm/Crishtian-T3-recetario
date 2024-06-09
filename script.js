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
    tiempo: "⏰: 30 minutos",
    dificultad: "Dificultad: Fácil",
    video: "https://www.youtube.com/watch?v=HhNiEkn_Bws",
  },
  {
    imagen: "img/brownie.webp",
    descripcion: "Brownie",
    tiempo: "⏰: 45 minutos",
    dificultad: "Dificultad: Media",
    video: "https://www.youtube.com/watch?v=Xv4ibRE_ZQA",
  },
  {
    imagen: "img/flan.webp",
    descripcion: "Flan",
    tiempo: "⏰: 60 minutos",
    dificultad: "Dificultad: Media",
    video: "https://www.youtube.com/watch?v=0KAgtWeNtsI",
  },
  {
    imagen: "img/gelatina de choco fresa.webp",
    descripcion: "Gelatina de Chocofresa",
    tiempo: "⏰: 20 minutos",
    dificultad: "Dificultad: Fácil",
    video: "https://www.youtube.com/watch?v=fuHEql_fjH8",
  },
];

// Obtén el elemento del DOM donde quieres insertar las recetas
let carrusel = document.querySelector(".carrusel");
let divDescripcion;

// Genera el HTML para cada receta y añádelo al carrusel
recetas.forEach((receta) => {
  let img = document.createElement("img");
  img.src = receta.imagen;

  let p = document.createElement("p");
  p.textContent = receta.descripcion;

  let spanTiempo = document.createElement("span");
  spanTiempo.textContent = receta.tiempo;
  spanTiempo.classList.add("tiempo");

  let spanDificultad = document.createElement("span");
  spanDificultad.textContent = receta.dificultad;
  spanDificultad.classList.add("dificultad");

  let divDescripcion = document.createElement("div");
  divDescripcion.appendChild(p);
  divDescripcion.appendChild(spanTiempo);
  divDescripcion.appendChild(spanDificultad);

  let div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(divDescripcion);

    // Añadir evento de clic para enviar al video correspondiente
    img.addEventListener("click", () => {
      window.location.href = receta.video; // Redirigir al enlace de YouTube
    });
  

  carrusel.appendChild(div);
});

let indiceActual = 0;

function mostrarReceta(indice) {
  // Limpia el carrusel
  carrusel.innerHTML = "";

  // Obtén la receta y crea el HTML
  let receta = recetas[indice];
  let img = document.createElement("img");
  img.src = receta.imagen;
  img.alt = receta.descripcion;

  let p = document.createElement("p");
  p.textContent = receta.descripcion;

  let spanTiempo = document.createElement("span");
  spanTiempo.textContent = receta.tiempo;
  spanTiempo.classList.add("tiempo");

  let spanDificultad = document.createElement("span");
  spanDificultad.textContent = receta.dificultad;
  spanDificultad.classList.add("dificultad");

  let divDescripcion = document.createElement("div");
  divDescripcion.appendChild(p);
  divDescripcion.appendChild(spanTiempo);
  divDescripcion.appendChild(spanDificultad);


  let div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(divDescripcion);
 
  img.addEventListener("click", () => {
    window.location.href = receta.video; // Redirigir al enlace de YouTube
  });


  carrusel.appendChild(div);

  
}

function siguienteReceta() {
  indiceActual = (indiceActual + 1) % recetas.length;
  mostrarReceta(indiceActual);
 let img = document.querySelector("img");
 let div = document.querySelector(".carrusel div div");
  div.style.animation = "carrusel-entrada 0.6s forwards";
  img.style.animation = "carrusel-entrada 0.6s forwards";
}

function recetaAnterior() {
  indiceActual = (indiceActual - 1 + recetas.length) % recetas.length;
  mostrarReceta(indiceActual);
   let div = document.querySelector(".carrusel div div");
   let img = document.querySelector("img");
   img.style.animation = "carrusel-salida 0.6s forwards";
   div.style.animation = "carrusel-salida 0.6s forwards";

}

// Añadir eventos de clic a las flechas
document
  .querySelector(".flecha-izquierda")
  .addEventListener("click", recetaAnterior);
document
  .querySelector(".flecha-derecha")
  .addEventListener("click", siguienteReceta);

// Muestra la primera receta al cargar la página
mostrarReceta(indiceActual);


