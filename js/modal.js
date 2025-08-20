const buttonOpenModalEl = document.querySelector("#buttonOpenModalEl");
const buttonCloseModalEl = document.querySelector("#buttonCloseModalEl");
const modalEl = document.querySelector("#modalEl");
const mobileMenu = document.querySelector(".mobile-menu");
const buttonBurger = document.querySelector(".burger-btn");
const buttonMobileMenu = document.querySelector(".button-mobile-menu");

const toggleModal = () => modalEl.classList.toggle("is-open");
const toggleMobileMenu = () => mobileMenu.classList.toggle("is-open");

buttonOpenModalEl.addEventListener("click", toggleModal);
buttonCloseModalEl.addEventListener("click", toggleModal);
buttonBurger.addEventListener("click", toggleMobileMenu);
buttonMobileMenu.addEventListener("click", toggleMobileMenu);
