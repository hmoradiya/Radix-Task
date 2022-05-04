var nav = document.querySelector("nav");

$(document).ready(function () {
  $(".dropdown-menu").hover(function () {
    $(".dropdown").toggleClass("active");
  });
});

// banner

$(".slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
});

// brand slider

$(".brands").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        arrows: false,

        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,

        slidesToScroll: 1,
      },
    },
  ],
});

// partner slider

$(".partners").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        arrows: false,

        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,

        slidesToScroll: 1,
      },
    },
  ],
});

//theme detail

$(document).ready(function () {
  if (localStorage.getItem("popState") != "shown") {
    $("#once-popup").delay(2000).fadeIn();
    localStorage.setItem("popState", "shown");
  }

  $("#popup-close").click(function (e) {
    $("#once-popup").fadeOut();
  });
  $("#once-popup").click(function (e) {
    $("#once-popup").fadeOut();
  });
});
