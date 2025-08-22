var swiper = new Swiper(".mySwiper_my", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
       
        1025: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        920: {
          slidesPerView: 4.4,
          spaceBetween: 20,
        },
        764: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 2.6,
          spaceBetween: 10,
        },
        300: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        }
      },
    });