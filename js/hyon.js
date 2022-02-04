// 타이틀 나타나기
$(document).ready(function(){
  $('.paper').css("transform","translateY(0px)").css("opacity","1");
    $(window).scroll(function(){
      $('.paper').css("transform","translateY(0px)").css("opacity","0");

      var h1=$(this).scrollTop();
      if(h1==0){
        $('.paper').css("transform","translateY(0px)").css("opacity","1");
      } else{
        $('.paper').css("transform","translateY(0px)").css("opacity","0");

      }
      
      

  });
});


// 스크롤시 메뉴 고정
var currentScrollTop=0;
        $(document).ready(function(){
        scrollController();
        $(window).scroll(function(){
            scrollController();
            });
        });
        function scrollController(){
        currentScrollTop = $(window).scrollTop();
        if(currentScrollTop > 10) {
            $('header').addClass('active_bg');
            }else{
            $('header').removeClass('active_bg');
            }
        }


// 페이지이동하면서 배경화면색 변함

$(function(){
  var ws = 0;
  $(document).scroll(function(){
     ws = $(this).scrollTop();
      // about me 
      var s1=$('#aboutme').offset().top;
      if(ws > s1-400){
        $('#aboutme').css('background-color', '#eee') //gray 색상
                      .css('opacity', '1');
      }else {
        $('#aboutme').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }
      // skill
      var s2=$('#skill').offset().top;
      if(ws > s2-400){
        $('#skill').css('background-color', '#eee') //gray 색상
                      .css('opacity', '1');
        $('#aboutme').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#skill').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }
      // work
      var s3=$('#work').offset().top;
      if(ws > s3-400){
        $('#work').css('background-color', '#eee') //gray 색상
                      .css('opacity', '1');
        $('#skill').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#work').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }
      // contact
      var s4=$('#contact').offset().top;
      if(ws > s4-400){
        $('#contact').css('background-color', '#eee') //gray 색상
                      .css('opacity', '1');
        $('#work').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#contact').css('background-color', '#fff') //비활성
                      .css('opacity', '0.5');
      }
  });
});