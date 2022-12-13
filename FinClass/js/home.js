const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3.2
      }
    }
  });

  var dropDown = $('.ul-profile');
  dropDown.hide();
  $(document).ready(function() {
    var botao = $('.selectProfile');
    var dropDown = $('.ul-profile');
    botao.on('click', function(event) {
      dropDown.stop(true, true).slideToggle();
      event.stopPropagation();
    });
  });



  

  $(document).ready(function(){
    $(".hamburguer").click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass("active");
    });
});
