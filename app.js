
"use strict"
let modal = document.querySelector(".modal");
console.log(modal);
let moreDetailsButton = document.querySelectorAll(".more-details");
console.log(moreDetailsButton);
let closeButton = document.querySelector(".btn-close");
console.log(closeButton);

// moreDetailsButton.forEach(item => {
//     item.addEventListener("click", function () {
//         openModal();
//     })
// });


function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
})

function showModalByScroll () {
  // console.log(window.pageYOffset)
  // console.log(document.documentElement.scrollHeight)
  if(window.pageYOffset > document.documentElement.scrollHeight/2) {
      openModal()
      window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

// console.log(mobileMenu);
// console.log(mainMenu);

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
});

