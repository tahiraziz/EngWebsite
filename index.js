$(".button-collapse").sideNav();
$('ul.tabs').tabs();

/*SMOOTH SCROLLING EXCEPT ON TABS*/
$(function() {
  $('a[href*=#]:not([href=#contactAcm], [href=#event1Acm], [href=#event2Acm], [href=#aboutAcm], [href=#event1UtdHackers], [href=#event2UtdHackers], [href=#contactUtdHackers], [href=#aboutUtdHackers], [href=#event1Codeburners], [href=#event2Codeburners], [href=#contactCodeburners], [href=#aboutCodeburners], [href=#event1Wwc], [href=#event2Wwc], [href=#contactWwc], [href=#aboutWwc], [href=#event1Csg], [href=#event2Csg], [href=#contactCsg], [href=#aboutCsg], [href=#event1Lug], [href=#event2Lug], [href=#contactLug], [href=#aboutLug])').click(function() {
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
