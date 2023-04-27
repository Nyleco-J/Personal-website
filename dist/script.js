// const headerbg = document.querySelector(".background");
const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
//   headerbg.classList.toggle("open");
    headerBot.style=("transition: .5s ease;");
    arjay.classList.toggle("show");
});

const spotify = document.querySelectorAll(".footer__item h4")
spotify.forEach((song) => {
    song.addEventListener("click", () => {
        song.nextElementSibling.classList.toggle("open");
        song.querySelector("i").classList.toggle("open");
    })
});