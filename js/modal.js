const buttonOpenModalEl = document.querySelector("#buttonOpenModalEl");
const buttonCloseModalEl = document.querySelector("#buttonCloseModalEl");
const modalEl = document.querySelector("#modalEl");

const toggleModal = () => modalEl.classList.toggle("is-open");

buttonOpenModalEl.addEventListener("click", toggleModal);
buttonCloseModalEl.addEventListener("click", toggleModal);
