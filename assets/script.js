const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-icon");
const hamburgerBtn = document.getElementById("hamburger-icon");
const navBarToggler = document.querySelector('.navbar-toggler')


function hamburgerHandler() {
  modal.classList.add("show");
  closeBtn.classList.add('show')
  hamburgerBtn.classList.remove('show')
  closeBtn.classList.add('show')
}
hamburgerBtn.addEventListener("click", hamburgerHandler);

function modalClose() {
  modal.classList.remove("show");
  closeBtn.classList.remove('show')
  hamburgerBtn.classList.add('show')
}

closeBtn.addEventListener("click", modalClose);
