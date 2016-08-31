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
  window.sr = ScrollReveal({ duration: 1100 });
  window.sr = ScrollReveal().reveal('.reveal1,.reveal2, .reveal3,.reveal4,.reveal5,.reveal6,.reveal7,.reveal8,.reveal9,.reveal10');
  var projectInfo = {
    hoist: {
      title: 'HOIST',
    },
    hbwebsite: {
      title:'www.harshbhatia.net',
    },
  };
  $projectTileHead = document.querySelector('.project-desc-title');
  var openProjectDescription = function(e) {
    document.querySelector('.project-desc-wrapper').style.display = 'block';
    $projectTileHead = this;
  };

  $projecttiles = document.querySelectorAll('.project-tile');
  for (var i = 0; i < $projecttiles.length; i++) {
    $projecttiles[i].addEventListener('click', openProjectDescription, false);
  }
});

// angular.module('website', []);
// angular.module('website').controller('projectController', projectController);

// function projectController() {
//   var proContr = this;
//   proContr.projectList = projectList;
// }
