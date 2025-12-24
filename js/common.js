 $(document).ready(function(){


  $(".ham").click(function(){
    $(".mgnb-wrap").animate({'left':'0%'});
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({'left':'100%'});
  });


  var page = $('.fullpage').fullpage({

       menu : '.gnb',
        anchors : ['menu1', 'menu2', 'menu3', 'menu4'],

        
        navigation: true,
        navigationTooltips: ['o’neul', 'value', 'menu', 'room'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        autoScrolling: true,

        // 1024 이하 fullpage 스크롤 작동 X
        responsiveWidth: 1024,

        onLeave: function (origin, destination, direction) {
        if (destination == 2 || destination == 3| destination == 4) {
            $("header, #fp-nav").addClass("active");
        } else {
            $("header, #fp-nav").removeClass("active");
        }

        if (destination == 5) {
            $("header, #fp-nav").fadeOut();
        } else {
            $("header, #fp-nav").fadeIn();
        }
      }
  });

  const menu_list = new Swiper(".menu-list", {
    autoplay: {
     delay: 2000,
     disableOnInteraction: false,
     },
      
      loop: true,
      speed: 1000, 
      slidesPerView: 1,
       breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900:{
          slidesPerView: 3,
          spaceBetween: 20,
        },
        
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });

  
  const room_list = new Swiper(".room-list", {

    autoplay: {
     delay: 2000,
     disableOnInteraction: false,
     },
      
      loop: true,
      speed: 1000, 
      slidesPerView: 1,
       breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  });

  
 });