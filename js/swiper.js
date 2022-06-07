$('.swiper-wrapper').slick({
    centerPadding: '90px',
    slidesToShow: 4,
    centerMode: true,
    swipe: false,

    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),

    responsive: [
      {
        breakpoint: 1730,
        settings: {
          centerPadding: '-50px',
        },

        breakpoint: 1596,
        settings: {
          centerPadding: '100px',
          slidesToShow: 3,
        },

        breakpoint: 1410,
        settings: {
          centerPadding: '80px',
          slidesToShow: 3,
        },

        breakpoint: 1350,
        settings: {
          centerPadding: '0px',
          slidesToShow: 3,
        },

        breakpoint: 1100,
        settings: {
          centerPadding: '25px',
          slidesToShow: 3,
          slidesToScroll: 1
        },

        breakpoint: 810,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });