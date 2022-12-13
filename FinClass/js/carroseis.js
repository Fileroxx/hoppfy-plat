const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: false,
    
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        }
    }
  

  });