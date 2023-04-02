var links = document.querySelectorAll(".link");
let jsonData = [];

async function fetchData() {
  try {
    const response = await fetch("data.json");
    jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur :", error);
  }
}

async function main() {
  await fetchData();
  displayHeadphones();
}

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/headphones": "/pages/headphones.html",
  "/speakers": "/pages/speakers.html",
  "/earphones": "/pages/earphones.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById("container").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", route);
  xhr.send();

  if (path === "/headphones") {
    main();
  }
};

handleLocation();

window.onpopstate = handleLocation;

links.forEach((link) => {
  link.addEventListener("click", route);
});

function displayMenu() {
  var toggleMenu = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu_layer");
  var container = document.querySelector("#container");
  var cartIcon = document.querySelector(".cart_icon");
  var cart = document.querySelector(".cart");

  toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("hamburger_active");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      cartIcon.classList.remove("active");
      cart.style.display = "none";
      container.style.filter = "brightness(40%)";
    } else {
      container.style.filter = "brightness(100%)";
    }
  });
}

function displayCart() {
  var toggleMenu = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu_layer");
  var container = document.querySelector("#container");
  var cartIcon = document.querySelector(".cart_icon");
  var cart = document.querySelector(".cart");

  cartIcon.addEventListener("click", () => {
    cartIcon.classList.toggle("active");
    if (cartIcon.classList.contains("active")) {
      cart.style.display = "block";
      toggleMenu.classList.remove("hamburger_active");
      menu.classList.remove("active");
      container.style.filter = "brightness(40%)";
    } else {
      cart.style.display = "none";
      container.style.filter = "brightness(100%)";
    }
  });
}

displayMenu();
displayCart();

function displayHeadphones() {
  const products = document.querySelector(".col_17");
  console.log(jsonData);

  products.innerHTML = jsonData
    .filter((product) => product.category === "headphones")
    .map((product) => {
      return `<div class="col col_18" data-product-id="${product.id}">
    <img
      src="${product.image.mobile}"
      alt=""
    />
    <div class="col col_19">
      <p class="normal new_product">new product</p>
      <p class="bold">${product.name}</p>
      <p class="medium">
        ${product.description}
      </p>
      <a href="#" class="bold product_btn">see product</a>
    </div>
  </div>`;
    })
    .join("");
}
