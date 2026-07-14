const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

new Swiper('.img-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responosive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 3
    },
  }
});
