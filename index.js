$(".button-collapse").sideNav();
$('ul.tabs').tabs();
$('.collapsible').collapsible();

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
