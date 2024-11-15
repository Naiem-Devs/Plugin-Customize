(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });

  $(document).ready(function() {
    $('#Video').magnificPopup({
        type: 'iframe'
    });
});
 
document.querySelector('html').classList.remove('no-js');
    if (!window.Cypress) {

      AOS.init({
        mirror: true,
        duration: 1500,
        initClassName: 'aos-init',
        once: true,
      });

    }

})(jQuery);
