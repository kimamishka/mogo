
//БУРГЕР
$(document).ready(function () {
   $(".header-burger").click(function (event) {
      $(".header-menu").toggleClass("active");
      $(".header-menu").css("top", "0");
   });
});
$(".header-inner__link").click(function (event) {
   $(".header-menu").css("top", "-100%");
});

//Spoiler
$(document).ready(function () {
   $('.right-inner__top').click(function (event) {
      if ($('service-content__right').hasClass('one')) {
         $('.right-inner__top').not($(this)).removeClass('active');
         $('.right-inner__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

//slider-s
$(document).ready(function () {
   $('.slider-s').slick({
      prevArrow: "<img src='images/ARROW_/left1.png' class='prev__s' alt='1'>",
      nextArrow: "<img src='images/ARROW_/right2.png' class='next__s' alt='2'>",
      arrows: true,
      dots: false,
      slidesToShow: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 1400,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});
//slider-w
$(document).ready(function () {
   $('.slider-w').slick({
      prevArrow: "<img src='images/ARROW_/left1.png' class='prev__s' alt='1'>",
      nextArrow: "<img src='images/ARROW_/right2.png' class='next__s' alt='2'>",
      arrows: true,
      dots: false,
      slidesToShow: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 1400,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});
$(document).ready(function () {
   $('.slider-l').slick({
      arrows: false,
      dots: false,
      slidesToShow: 6,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 5
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 2
            }
         }
      ]
   });
});