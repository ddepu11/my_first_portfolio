const logo = document.getElementById("logo");
const logoContainer = document.getElementById("logo-container");
const navbar = document.getElementById("navbar");
const menuBar = document.getElementById("hamburger"),
  cross = document.getElementById("cross"),
  links = document.getElementById("links");

logo.classList.add("grow");

setInterval(() => {
  if (logo.classList.contains("grow")) {
    logo.classList.remove("grow");
    logo.classList.add("shrink");
  } else if (logo.classList.contains("shrink")) {
    logo.classList.remove("shrink");
    logo.classList.add("grow");
  }
}, 3000);

setInterval(() => addCard(), 100);

function addCard() {
  if (window.innerWidth <= 450) {
    navbar.classList.add("card");
    menuBar.classList.remove("hidden");
    cross.classList.remove("hidden");
  } else if (window.innerWidth >= 450) {
    navbar.classList.remove("card");
    menuBar.classList.add("hidden");
    cross.classList.add("hidden");
  }
}

menuBar.addEventListener("click", () => {
  links.classList.remove("hide");
  links.classList.add("show");
});

cross.addEventListener("click", () => {
  links.classList.add("hide");
  links.classList.remove("show");
});
