let indiceActual = 0;
let recetas = Array.from(document.querySelectorAll(".carrusel-item"));

document.addEventListener("DOMContentLoaded", inicializarCarrusel);
document.addEventListener("contentUpdated", () => {
    inicializarCarrusel();
    inicializarDOM();
    inicializarConversor();
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



function inicializarConversor() {
  const convertButton = document.getElementById("convertButton");
  if (convertButton) {
    convertButton.addEventListener("click", convert);
    console.log("Conversor inicializado");
  } else {
    console.log("Botón de conversión no encontrado");
  }
}

function convert() {
  const measureType = document.getElementById("measureType").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  let result;

  if (isNaN(inputValue)) {
    result = "Por favor, ingresa un número válido";
  } else {
    switch (measureType) {
      case "tbspToGrams":
        result = `${inputValue} Cucharada(s) = ${inputValue * 15} gramos`;
        break;
      case "cupToMl":
        result = `${inputValue} Taza(s) = ${inputValue * 240} mililitros`;
        break;
      case "ozToGrams":
        result = `${inputValue} Onza(s) = ${inputValue * 28.35} gramos`;
        break;
      case "tspToMl":
        result = `${inputValue} Cucharadita(s) = ${
          inputValue * 4.93
        } mililitros`;
        break;
      default:
        result = "Conversión no soportada";
    }
  }

  document.getElementById("result").innerText = result;
}

function inicializarCarrusel() {
  console.log("Inicializar carrusel");
  // Aquí puedes agregar la lógica para inicializar el carrusel
}
