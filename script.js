$(function(){
	var width = 444;
	animationSpeed = 1000;
	pause = 3000;
	currentSlide = 1;

	var $slider = $('#top-slider');
		$sliderContainer = $slider.find('.sliders');
		$slides = $sliderContainer.find('.slide');

	setInterval(function(){
		$sliderContainer.animate({"margin-left": "-="+width, animationSpeed}, function(){
			++currentSlide;
			if(currentSlide === $slides.length){
				currentSlide = 1;
				$sliderContainer.css("margin-left", 0);
			};
		});
	}, pause);
});
$(document).ready(function(){
  $('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });
});
if( $(window).width() < 992)
{
  $( ".burger-menu" ).on( "click", function() {
  	$(".main-menu").toggle();
	});
	$( ".footer-title1" ).on( "click", function() {
	  $(".footer-items1").toggle();
	});
	$( ".footer-title2" ).on( "click", function() {
	  $(".footer-items2").toggle();
	});
	$( ".footer-title3" ).on( "click", function() {
	  $(".footer-items3").toggle();
	});
	$( ".footer-title4" ).on( "click", function() {
	  $(".footer-items4").toggle();
	});
	$( ".footer-title5" ).on( "click", function() {
	  $(".footer-items5").toggle();
	});
}
