
$(document).ready(function () {

/*SMOOTH SCROLLING*/
$('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 700);
              return false;
          }
      }
  });



/*Activates mobile menu on certain screen length*/
$(".button-collapse").sideNav();
/*Activates collapsible of sig events on home page*/
$('.collapsible').collapsible();



/*Makes drop down button sig collapsible rotate to upwards if item is open, rotates button to normal if item is closed*/
$(".collapsible-header").click(function() {
  $(this).find('.mdi-navigation-arrow-drop-down-circle').toggleClass("rotate");
  $('.collapsible-header').parent().not('.active').find('.mdi-navigation-arrow-drop-down-circle').removeClass("rotate");
});
$('.input-field').find('.label').mouseenter(function() {
  $(this).css("z-index", "1");
});



});


