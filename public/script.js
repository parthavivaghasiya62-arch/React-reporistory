$(document).ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".switch").on("click", function (e) {
  $(".text-block").toggleClass("collapsed"); //you can list several class names
  e.preventDefault();
});
