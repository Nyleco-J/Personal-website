const proj_nav =document.querySelectorAll(".proj-link");
const proj_content =document.querySelectorAll(".proj-display");
proj_nav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
})

function removeActiveStar(){
  proj_nav.forEach((star) => {
    star.classList.remove("active");
  })
}

function removeActiveContent(){
    proj_content.forEach((star) => {
    star.classList.remove("active");
  })
}


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

var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
  });

  var slider = tns({
    container: '.my-slider1',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
  });