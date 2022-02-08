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

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navi-menu a[href*=' + sectionId + ']').classList.add('on')
        }else{
            document.querySelector('.navi-menu a[href*=' + sectionId + ']').classList.remove('on')
        }
    })
}
window.addEventListener('scroll', scrollActive)


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
        if(currentScrollTop > 10) {
            $('header').addClass('active_bg');
            $('.title p a').css('color', '#000');
            }else{
            $('header').removeClass('active_bg');
            $('.title p a ').css('color', '#fff');

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
        $('#aboutme').css('background-color', '#fff') //활성
                      .css('opacity', '1');
      }else {
        $('#aboutme').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }
      // skill
      var s2=$('#skill').offset().top;
      if(ws > s2-400){
        $('#skill').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $('#aboutme').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#skill').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }
      // portpolio
      var s3=$('#portpolio').offset().top;
      if(ws > s3-400){
        $('#portpolio').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $('#skill').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#portpolio').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }
      // contact
      var s4=$('#contact').offset().top;
      if(ws > s4-400){
        $('#contact').css('background-color', '#fff') //흰바탕 활성
                      .css('opacity', '1');
        $('#portpolio').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
      }else {
        $('#contact').css('background-color', '#eee') //비활성
                      .css('opacity', '0.5');
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
      view.fadeIn();
      $(this).addClass('on-color');
      $(this).siblings().removeClass('on-color');
  });
});