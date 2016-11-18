//@prepros-prepend jquery.bpopup.min.js
//@prepros-prepend jquery.interactive_bg.js

$(document).ready(function() {

  var popup = $('.skills__popup');

  $('.btn_color-red').on('click', function(e) {
    e.preventDefault();
    popup.bPopup ({
      speed: 500,
      transition: "slideDown",
      transitionClose: "slideDown"
    });
  });

  $('.skills__btn-close').on('click', function(e) {
    e.preventDefault();
    popup.bPopup ({
      speed: 500,
      transitionClose: "slideDown"
    }).close();
  });

  $(".main-page").interactive_bg();

});

$(window).resize(function() {
  $(".main-page > .ibg-bg").css({
    width: $(window).outerWidth(),
    height: $(window).outerHeight()
  });
});
