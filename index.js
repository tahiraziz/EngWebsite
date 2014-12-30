$(".button-collapse").sideNav();
$('ul.tabs').tabs();
$('.collapsible').collapsible();
$(".collapsible-header").click(function() {
  $(this).find('.mdi-navigation-arrow-drop-down-circle').toggleClass("rotate");
  $('.collapsible-header').parent().not('.active').find('.mdi-navigation-arrow-drop-down-circle').removeClass("rotate");
});

/*SMOOTH SCROLLING EXCEPT ON TABS*/
$(function() {
  $('a[href*=#]:not([href=#events], [href=#aboutAcm])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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
