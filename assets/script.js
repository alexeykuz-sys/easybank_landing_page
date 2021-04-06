const hamburgerBtn = document.getElementById("hamburger-icon");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("cross-icon");
const navBarToggler = document.querySelector('.navbar-toggler')


function hamburgerHandler() {
  modal.classList.add("show");
  closeBtn.classList.add('show')
  navBarToggler.classList.remove('show')
}
hamburgerBtn.addEventListener("click", hamburgerHandler);

function modalClose() {
  modal.classList.remove("show");
  closeBtn.classList.remove('show')
  hamburgerBtn.classList.a('show')
}

closeBtn.addEventListener("click", modalClose);
