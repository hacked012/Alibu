var swiper = new Swiper('.home-section4 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.lnr-chevron-right',
      prevEl: '.lnr-chevron-left',
    },
    breakpoints: {
      1025: {
          slidesPerView: 2
      },
      576: {
          slidesPerView: 1
      }
  }
  });

var swiper2 = new Swiper('.home-section7 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.lnr-chevron-right',
      prevEl: '.lnr-chevron-left',
    },
    breakpoints: {
      1025: {
          slidesPerView: 2
      },
      576: {
          slidesPerView: 1
      }
    }
  });

  var swiper1 = new Swiper('.home-section6 .swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function toggleLanguage() {
    $('.language-wrapper .language-active').on('click', function(e) {
        $(this).parents('.language-wrapper').toggleClass('active')
        $('html').one('click', function() {
            $('.language-wrapper').removeClass('active')
        });
        e.stopPropagation();
    })
  }

  function toggleMenu(){
    $('.menu-wrapper').on('click', function(){
      $('.menu-respons-left').toggleClass('expand');
      $('.menu-respons-right').toggleClass('expand');
      $('.menu-wrapper').toggleClass('change');
      $('.expand').animate({transittion: '0.5s'});
    });
  }

//   function mobileMapping() {
//     $('.alibu-header .menu-respons').mapping({
//         mobileWrapper: '.alibu-header .mobile-wrapper',
//         mobileMethod: 'appendTo',
//         desktopWrapper: '.alibu-header .bottom-wrapper',
//         desktopMethod: 'appendTo',
//         breakpoint: 1025
//     })
// }
$(document).ready(function() {
  toggleLanguage()
  toggleMenu()

  $('.link-to-section').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 95}, 1000);
    return false;
});
})