



const navmenu = document.querySelector("#navmenu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const opcionesMenu = document.querySelectorAll(".nav-list a");

abrir.addEventListener("click", () => {
    navmenu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
        navmenu.classList.remove("visible");
});

opcionesMenu.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      navmenu.classList.remove("visible"); 
    });
  });
