//Navbar HAmburger
const hamburger = document.querySelector("#hamburger");
const btn = document.querySelector("button.mobile-menu");
const btnClose = document.querySelector("button.mobile-menu-close");
const menu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    btn.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");
    menu.classList.toggle("hidden");
});

