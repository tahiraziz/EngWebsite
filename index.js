$(".button-collapse").sideNav();
$('ul.tabs').tabs();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 900);
        return true;  /*false makes tabs not work but true means you have to wait 900 to scroll down otherwise glitch*/
      }
    }
  });
});
