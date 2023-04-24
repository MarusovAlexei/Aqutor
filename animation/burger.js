let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header__nav-menu-items");
let openMenu = document.querySelector(".body");

console.log(openMenu);
console.log(menuBtn);

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  openMenu.classList.toggle("open-menu");
});
