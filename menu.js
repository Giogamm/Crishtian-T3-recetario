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
    if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
      navList.style.display = "none";
    }
  });
}
