$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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
  var projectInfo = {
    'hoist': {
      "title": "HOIST"
    },
    'hbwebsite': {
      'title':'www.harshbhatia.net'
    }
  }
  $projectTileHead = document.querySelector('.project-desc-title');
  var openProjectDescription = function(e){
    document.querySelector('.project-desc-wrapper').style.display ='block';
    $projectTileHead = this;
  }
  $projecttiles = document.querySelectorAll('.project-tile');
  for (var i = 0; i < $projecttiles.length; i++) {
    $projecttiles[i].addEventListener('click', openProjectDescription, false);
}
});
angular.module('website',[]);
angular.module('website').controller('projectController', projectController);

function projectController(){
  var proContr = this;
  proContr.projectList = projectList;
}