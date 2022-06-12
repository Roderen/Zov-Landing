$('.slider-container').slick({
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),

  centerPadding: '90px',
  slidesToShow: 4,
  centerMode: true,
  swipe: true,


  responsive: [
    {
      breakpoint: 1801,
      settings: {
        centerPadding: '50px',
      }
    },

    {
      breakpoint: 1681,
      settings: {
        centerPadding: '-50px',
      }
    },

    {
      breakpoint: 1537,
      settings: {
        centerPadding: '150px',
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 1441,
      settings: {
        centerPadding: '80px',
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 1367,
      settings: {
        centerPadding: '100px',
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 1367,
      settings: {
        centerPadding: '100px',
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 1281,
      settings: {
        centerPadding: '0px',
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 1025,
      settings: {
        centerPadding: '25px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 769,
      settings: {
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1
      }
    },
  ]
});