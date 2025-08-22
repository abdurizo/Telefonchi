var swiper = new Swiper(".brand", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
       1200:{
slidesPerView: 6,
       },
        1025: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        920: {
          slidesPerView: 4.6,
          spaceBetween: 20,
        },
        764: {
          slidesPerView: 2.6,
        },
        575: {
          slidesPerView: 2.6,
        },
        300: {
          slidesPerView:1.6,
          spaceBetween: 20,
        }
      },
    });