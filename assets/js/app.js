// ===========navbar toggle============
const navmenu = () => {
    document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
    document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
    document.getElementById("nav_line_1").classList.toggle("rotate-45");
    document.getElementById("nav_line_2").classList.toggle("-rotate-45");
    document
      .getElementById("nav_line_out_side")
      .classList.toggle("translate-x-9");
    document.body.classList.toggle("overflow-hidden");
  };
  // ==========slider-1================
  $('.slideBox').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow:".next",
    prevArrow:".prev",
  });
  // ===============slider-2=============
  $(document).ready(function () {
    $(".big-img-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".second-row-slider",
      infinite: true,
    });
  
    $(".second-row-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".big-img-slider",
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      variableWidth: true,
    });
  });