//header
$(function(){

    let win_w = window.innerWidth;
    let s_header = document.querySelector('header');

    window.addEventListener('scroll', ()=> {
    let scroll = window.scrollY;
    //console.log(scroll);

    if(scroll >= 700 && scroll <= 3250){
        s_header.classList.add('on');
    }else if(scroll >= 5690){
        s_header.classList.add('on');
    }else{
      s_header.classList.remove('on');
    }
    });

//gnb panel

let underline_offset = [];
let speed = 500;

$('.gnb > li').each(function(){
  let gnb_l = $(this).offset().left-5 - $('.gnb').offset().left;
  underline_offset.push(gnb_l);
});

/* resize */

$(window).on('resize',function(){
  win_w = $(this).width();
  if(win_w>1200){
    $('.gnb_wrap').removeAttr('style');
    $('.underline').removeAttr('style');
    $('.sub_menu').removeAttr('style');
  }
});

/* gnb */

$('.gnb > li').on('mouseenter',function(){
  let width = $(this).width();
  let i = $(this).index();

  $('.header').addClass('on');
  $('.underline').width(width).css('left',underline_offset[i]);

  if(win_w > 1400){
    $('.sub_menu').add('.gnb_bg').stop().slideDown(speed);
  }else{
    $('.gnb > li > a').off('click');
    $('.gnb > li > a').on('click',function(){
      $('.sub_menu').stop().slideUp();
      $(this).next('.sub_menu').stop().slideToggle();
    });
  }
});

$('.gnb > li').on('mouseleave',function(){
  $('.header').removeClass('on');
  $('.underline').removeAttr('style');
  if(win_w > 1400){
    $('.sub_menu').add('.gnb_bg').stop().slideUp(400);
  }
});

//panel
$('.toggle').on('click',function(){
  $('.gnb_wrap').fadeToggle();
});

//main
  var swiper01 = new Swiper(".main .swiper", {

    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".main .swiper-pagination",
      clickable: true,
    },
  });

//product
  let product_Offset = $('.product').offset().top;
  let add_Offset = $('.add').offset().top;

  $(window).on('scroll',function(){
    let scroll = $(window).scrollTop();

    if(scroll >= product_Offset - 400 && scroll <= add_Offset - 200){
      $('.product').addClass('on');
    }else{
      $('.product').removeClass('on');
    }
  });

//news
  $('.news .news_btn li').on('click',function(e){

    $('.news .news_btn li').removeClass('on');
    $(this).stop().addClass('on');
  });
  $('.news .news_btn li').first().children('a').trigger('click');

  var swiper03 = new Swiper(".news .swiper", {
  
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".news .swiper-pagination",
      type: "fraction",
      },
    navigation: {
      nextEl: ".news .swiper-button-next",
      prevEl: ".news .swiper-button-prev",
      },
      scrollbar: {
        el: ".news .swiper-scrollbar",
        draggable: true,
        //hide: true,
      },
    observer: true, 
    observeParents: true,

      breakpoints: {
        480: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        960: {
          slidesPerView: 3.8,
        },
        1200: {
          slidesPerView: 4.5,
        },
      }
    });

  $('.news .news_btn a').click(function(e){
    e.preventDefault();

    let tab_news_btn = $(this).attr('data-keyword');

    $('.news .swiper-slide').each(function(){

      if(tab_news_btn == 'all'){
        $('.news .swiper-slide').stop().show();
      }else if(tab_news_btn == $(this).attr('data-filter')){
        $(this).stop().show();
      }else{
        $(this).stop().hide();
      }
     });
  });

  /* $('.sony_flow').animate({
  },500,function(){
    $(this).css('color','blue');
    $(this).first().appendTo('.sony_text');
  }); */

}); //구문 끝