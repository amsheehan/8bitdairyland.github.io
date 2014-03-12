$(document).ready(function(){
  //var imgHeight = $('.header-img').height();
  
  var windowHeight = window.innerHeight;
  // Add and subtract 20 because of the level's ground
  var canvasHeight = windowHeight - 20;
  var contentMargin = canvasHeight + 20;

  $('.header-lvl').css("height", windowHeight + "px");
  $('#level-canvas').css("height", canvasHeight + "px");
  $('.content-overlay').css("top", contentMargin + "px");
});
