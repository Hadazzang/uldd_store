import $ from 'jquery';

$(function () {
  gallery();
});

// 함수
$(document).ready(function () {
  $('#box04 ul li:last').click(function () {
    $('#box04 .gallery').animate({ left: '-1200px' });
    $('#box04 ul li:last').css({ backgroundColor: '#ffd75e' });
    $('#box04 ul li:first').css({ backgroundColor: 'transparent' });
  });
  $('#box04 ul li:first').click(function () {
    $('#box04 .gallery').animate({ left: '0px' });
    $('#box04 ul li:first').css({ backgroundColor: '#ffd75e' });
    $('#box04 ul li:last').css({ backgroundColor: 'transparent' });
  });
});

$(document).ready(function() {
  $('footer button').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});  

$(document).ready(function(){
  $("#box07").click(function(){
    $("#modal").fadeIn();
  });
  
  $(".close").click(function(){
    $("#modal").fadeOut();
  });
});
