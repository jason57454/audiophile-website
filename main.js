var menu = document.querySelector(".hamburger");
var toggleMenu = document.querySelector(".menu_layer");
var hero = document.querySelector(".main");
var cartIcon = document.querySelector(".cart_icon");
var cart = document.querySelector(".cart");

menu.addEventListener("click", () => {
  menu.classList.toggle("hamburger_active");
  toggleMenu.classList.toggle("active");
  if (toggleMenu.classList.contains("active")) {
    cartIcon.classList.remove("active");
    cart.style.display = "none";
    hero.style.filter = "brightness(40%)";
  } else {
    hero.style.filter = "brightness(100%)";
  }
});

cartIcon.addEventListener("click", () => {
  cartIcon.classList.toggle("active");
  if (cartIcon.classList.contains("active")) {
    cart.style.display = "block";
    menu.classList.remove("hamburger_active");
    toggleMenu.classList.remove("active");
    hero.style.filter = "brightness(40%)";
  } else {
    cart.style.display = "none";
    hero.style.filter = "brightness(100%)";
  }
});
