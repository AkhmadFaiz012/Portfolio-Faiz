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


window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
 
    if (window.pageYOffset > fixedNav) {
       header.classList.add('navbar-fixed-ireng');
    } else {
       header.classList.remove('navbar-fixed-ireng');
    }
 };
