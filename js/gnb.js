
let winWidth = window.innerWidth; //화면의 가로 길이
console.log(winWidth);

$('.trigger').click(function(){
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    $('header').animate({left:-250},500);
    $('.gnb').animate({right:0},500);
  } else {
    $('header').animate({left:0},500);
    $('.gnb').animate({right:-250},500);    
  }
})
