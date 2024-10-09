// navbar sticky
const navHeader = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
     let hero = document.querySelector('navbar');
     if (this.window.pageYOffset > 0) {

          navHeader.classList.add('navbar-sticky')
     } else {
          navHeader.classList.remove('navbar-sticky')
     }
});

// add seach infdut
const searchBtn = document.querySelector(".seach");
const searchBox = document.querySelector(".search-box");
const xmark =document.querySelector(".fa-xmark");
searchBtn.addEventListener("click", () => {
     searchBox.classList.add("active");
})
xmark .addEventListener('click', ()=>{
     searchBox.classList.remove("active");
})

// add to card
const cardBtn = document.querySelector(".adtocard");
const addCard = document.querySelector(".addcard");
const close =document.querySelector(".close");

cardBtn.addEventListener("click", () => {
     addCard.classList.add("show");
})
close .addEventListener('click', ()=>{
     addCard.classList.remove("show");
})