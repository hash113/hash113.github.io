$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top,
        }, 1000);
        return false;
      }
    }
  });
  window.sr = ScrollReveal({ reset: true });
  window.sr = ScrollReveal({ duration: 600 });
  window.sr = ScrollReveal().reveal('.reveal1,.reveal2, .reveal3,.reveal4,.reveal5,.reveal6,.reveal7,.reveal8,.reveal9,.reveal10,.reveal11,.reveal12, .reveal13,.reveal14,.reveal15,.reveal16,.reveal17,.reveal18,.reveal19,.reveal20');
});