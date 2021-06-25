
"use strict"
let modal = document.querySelector(".modal");
let grayFrameForNavMenu = document.querySelector(".close-nav-menu");
console.log(modal);
let moreDetailsButton = document.querySelectorAll(".more-details");
console.log(moreDetailsButton);
let closeButton = document.querySelector(".btn-close");
console.log(closeButton);


function open(window) {
    window.classList.add("show");
    window.classList.remove("hide");
}

function close(window) {
    window.classList.add("hide");
    window.classList.remove("show")
}

function closeModal(){
    close(modal);
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        close(modal);
    }
})


grayFrameForNavMenu.addEventListener("click", function (e) {
    if (e.target === grayFrameForNavMenu) {
        closeNavMenu();
    }
})

function closeNavMenu(){
    mainMenu.classList.remove("active-menu");
    mobileMenu.classList.remove("active-menu");
    close(grayFrameForNavMenu);
}

function showModalByScroll () {
  // console.log(window.pageYOffset)
  // console.log(document.documentElement.scrollHeight)
  if(window.pageYOffset > document.documentElement.scrollHeight/2) {
      open(modal)
      window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

// console.log(mobileMenu);
// console.log(mainMenu);

mobileMenu.addEventListener("click", function(){
    if (!mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
        mobileMenu.classList.add("active-menu");
        open(grayFrameForNavMenu);
    } else {
        closeNavMenu();
    }
});

