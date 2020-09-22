
//БУРГЕР
$(document).ready(function () {
   $(".header-burger").click(function (event) {
      $(".header-burger, .header-menu").toggleClass("active"); /*при нажатии меняются виды указанных классов (полоски бургера меняем на крестик, меню выкатывается из под шапки)*/
      $("body").toggleClass("lock"); /*чтобы при открытом меню бургера текст под меню случайно не скролился, оставался на том же месте, где мы зашли в бургер*/
   });
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