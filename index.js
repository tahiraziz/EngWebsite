$(document).ready(function () {

$(".button-collapse").sideNav();
$('.collapsible').collapsible();
$(".collapsible-header").click(function() {
  $(this).find('.mdi-navigation-arrow-drop-down-circle').toggleClass("rotate");
  $('.collapsible-header').parent().not('.active').find('.mdi-navigation-arrow-drop-down-circle').removeClass("rotate");
});
$('.input-field').find(label).mouseenter(function() {
  $(this).css("z-index", "1");
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




});


