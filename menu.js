document.addEventListener("DOMContentLoaded", inicializarCarrusel);
document.addEventListener("contentUpdated", () => {

  inicializarMenu();
});

function inicializarMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", () => {
    //ponerle display block
    navList.style.display = "block";
  });
window.addEventListener("click", (event) => {
    // si le vuelvo a dar click al boton se oculta solo para celular
    if (window.innerWidth <= 768) {
        if (event.target !== menuToggle) {
            navList.style.display = "none";
        }
    }
});
}