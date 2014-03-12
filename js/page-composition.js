$(document).ready(function(){
  //var imgHeight = $('.header-img').height();
  
  var windowHeight = window.innerHeight;
  var canvasHeight = windowHeight - 20;

  $('.header-lvl').css("height", windowHeight + "px");
  //$('.header-overlay').css("height", imgHeight + "px");
  $('#level-canvas').css("height", canvasHeight + "px");
});
