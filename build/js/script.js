var navMain = document.querySelector(".main-navigation");
var navToggleOpen = document.querySelector(".main-navigation__toggle--open");
var navToggleClose = document.querySelector(".main-navigation__toggle--close");

navMain.classList.remove("main-navigation--nojs");

navToggleOpen.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  }
});

navToggleClose.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--opened")) {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});
