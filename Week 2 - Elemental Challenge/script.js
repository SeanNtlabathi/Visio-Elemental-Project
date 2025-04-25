$(document).ready(function () {
    let current = 0;
    const slides = $(".slide");
    const dots = $(".dot");
  
    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
      dots.removeClass("active").eq(index).addClass("active");
    }

    $(".slider-next").click(function () {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  
    $(".slider-prev").click(function () {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  
    dots.click(function () {
      current = $(this).index();
      showSlide(current);
    });
  
    showSlide(current);
  });
  