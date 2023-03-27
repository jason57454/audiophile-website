var menu = document.querySelector(".hamburger");
var toggleMenu = document.querySelector(".menu_layer");
var hero = document.querySelector(".main");

menu.addEventListener("click", () => {
  menu.classList.toggle("hamburger_active");
  toggleMenu.classList.toggle("active");
  if (toggleMenu.classList.contains("active")) {
    hero.style.filter = "brightness(40%)";
  } else {
    hero.style.filter = "brightness(100%)";
  }
});
