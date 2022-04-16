let menuButton = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");
menuButton.addEventListener("click", function () {
  nav.classList.add("open-nav");
  overlay.classList.add("open-overlay");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  overlay.classList.remove("open-overlay");
});
