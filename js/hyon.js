// 타이틀 나타나기
$(document).ready(function(){
  $('.paper').css("transform","translateY(0px)").css("opacity","1");
  //   $(window).scroll(function(){
  //     $('.paper').css("transform","translateY(0px)").css("opacity","0");

  //     var h1=$(this).scrollTop();
  //     if(h1==0){
  //       $('.paper').css("transform","translateY(0px)").css("opacity","1");
  //     } else{
  //       $('.paper').css("transform","translateY(0px)").css("opacity","0");
  //     }
  // });
});

// 메뉴 활성화시 on
$(function(){
 $('#menu ul li a').click(function(){
   $('#menu ul li a:first-child').removeClass('on');
   $(this).addClass('on');
   $(this).siblings().removeClass('on');
   
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
if(currentScrollTop > 1) {
    $('header').addClass('active_bg');
    $('.title p a').css('color', '#000');
    $('.title p a span').css('color', '#fff');

    }else{
    $('header').removeClass('active_bg');
    $('.title p a ').css('color', '#fff');
    }
}


// 페이지이동하면서 배경화면색 변함

$(function(){
  var ws = 0;
  var $home=$('.home');
  var $aboutme=$('.aboutme');
  var $skill=$('.skill');
  var $work=$('.portpolio');
  var $design=$('.design');
  var $contact=$('.contact');
  $(document).scroll(function(){
     ws = $(this).scrollTop();
      // about me 
      var s1=$('#aboutme').offset().top;
      if(ws > s1-500){
        $('#aboutme').css('background-color', '#fff') //활성
                      .css('opacity', '1');
        $aboutme.addClass('on');
        $home.removeClass('on'); //비활성

      }else {
        $('#aboutme').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $aboutme.removeClass('on');
        $home.addClass('on');
      }
      // skill
      var s2=$('#skill').offset().top;
      if(ws > s2-500){
        $('#skill').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $skill.addClass('on');
        $('#aboutme').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $aboutme.removeClass('on');
        // 퍼센트표기
        $('.html').css('height', '80%');
        $('.css').css('height', '80%');
        $('.js').css('height', '68%');
        $('.jquery').css('height', '80%');
        $('.photoshop').css('height', '95%');
        $('.illu').css('height', '94%');
        $('.papo').css('height', '94%');

      }else {
        $('#skill').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $skill.removeClass('on');
      }
      // portpolio
      var s3=$('#portpolio').offset().top;
      
      if(ws > s3-500){
        $('#portpolio').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $work.addClass('on');
        $('#skill').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $('.skill').removeClass('on');
      }else {
        $('#portpolio').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $work.removeClass('on');
      }
      // design
      var s4=$('#design').offset().top;
      
      if(ws > s4-500){
        $('#design').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $design.addClass('on');
        $('#portpolio').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $work.removeClass('on');
      }else {
        $('#design').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $design.removeClass('on');
      }
      // contact
      var s5=$('#contact').offset().top;
      if(ws > s5-500){
        $('#contact').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $contact.addClass('on');
        $('#design').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $design.removeClass('on');

      }else {
        $('#contact').css('background-color', '#f9f6ec') //비활성
                      .css('opacity', '0.5');
        $contact.removeClass('on');

      }
  });
});

// work menu 클릭시 포트폴리오 view
$(function(){
  var workmenu = $(".work-list li");
  var contents = $(".work-view li");

  workmenu.click(function(){
      var index=$(this).index();

      var view = contents.eq(index);
      contents.not(view).fadeOut("fast");
      view.fadeIn("fast");
      $(this).addClass('on-color');
      $(this).siblings().removeClass('on-color');
  });
});

$(function(){

});