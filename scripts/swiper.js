const aboutSwiper = new Swiper(".aboutUsSwiper .swiper", {
  // Optional parameters
  effect: "cards",
  direction: "horizontal",
  autoplay: "true",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const projectSwiper = new Swiper(".projectSwiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: "true",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: "true",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const homeSwiper = new Swiper(".home-below-swiper .swiper", {
  direction: "horizontal",
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  on: {
    slideChangeTransitionEnd: updateLeftSwiper,
    slideChange: function () {
      updateContent(this.realIndex);
  }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
