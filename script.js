let indiceActual = 0;
const recetas = Array.from(document.querySelectorAll(".carrusel-item"));

function mostrarReceta(indice) {
  recetas.forEach((receta, index) => {
    if (index === indice) {
      receta.classList.add("carrusel-entrada");
      setTimeout(() => {
        receta.classList.remove("carrusel-entrada");
      }, 600); // Eliminar la animación de entrada después del tiempo de duración
    } else {
      receta.classList.remove("carrusel-entrada");
      receta.classList.remove("carrusel-salida");
    }
  });
}

function siguienteReceta() {
  recetas[indiceActual].classList.add("carrusel-salida");
  indiceActual = (indiceActual + 1) % recetas.length;
  mostrarReceta(indiceActual);
  recetas[indiceActual].style.animation = "carrusel-salida 0.6s forwards";
}

function recetaAnterior() {
  recetas[indiceActual].classList.add("carrusel-salida");
  indiceActual = (indiceActual - 1 + recetas.length) % recetas.length;
  mostrarReceta(indiceActual);
  recetas[indiceActual].style.animation = "carrusel-entrada 0.6s forwards";
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

// !navegación

const checkIsNavigationSuported = () => {
  return Boolean(document.StarViewTransition);
};

const fetchPage = async (url) => {
  const response = await fetch(url);
  const text = await response.text();
  const [, data] = text.match(/<body>([\s\S]+)<\/body>/);
  return data;
};

const StarViewTransition = () => {
  if (!checkIsNavigationSuported()) return;
  window.navigation.addEventListener("navigate", (event) => {
    const toUrl = new URL(event.detail.to);

    // es una pagina externa? si es asi lo ignoramos
    if (toUrl.origin !== window.location.origin) return;

    // si es una navegación interna
    event.intercept({
      async headler() {
        const data = await fetchPage(toUrl.pathname);

        // utilizar la api de view transition
        document.StarViewTransition(() => {
          document.body.innerHTML = data;
          document.documentElement.scrollTop = 0;
        });
      },
    });
  });
};
