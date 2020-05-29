$(function() {

//******* service slider

let serviceSlider = $('#serviceSlider');

serviceSlider.slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  		{
  			breakpoint: 500,
  			settings: {
  				slidesToShow: 2
  			}
  		}
  ]
});

//******* feedback sliders

let counterSlider = $('#counterSlider');
let feedbackSlider = $('#feedbackSlider');


counterSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: feedbackSlider
});

feedbackSlider.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: counterSlider,
	arrows: false,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// count bar
let total = counterSlider.slick('getSlick').slideCount,
	currentSlide = counterSlider.slick('slickCurrentSlide'),
	slide = currentSlide + 1;

if (total > 1) {
	$('.counter_current').text(slide);
	$('.counter_total').text(total);
}

counterSlider.on('afterChange', function(event, slik, currentSlide, nextSlide){
	let currentSl = currentSlide + 1;
	$('.counter_current').text(currentSl);
});


//==== Fixed Header 
let header = $("#header");
let intro = $("#intro");

let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();


function checkScroll(scrollPos, introH) {
	if(scrollPos > introH) {
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
}

$(window).on('scroll resize', function(){
	introH = intro.innerHeight();
	scrollPos = $(this).scrollTop();

	checkScroll(scrollPos, introH);
});

// ..... Nav Toggle
let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on('click', function(event){
	event.preventDefault();

	nav.toggleClass("show");
});


//---- Smooth Scroll
$("[data-scroll]").on("click", function(event){
	event.preventDefault();

	let headerH = header.innerHeight();
	let elementId = $(this).data('scroll');
	let elementOffset = $(elementId).offset().top;

	nav.removeClass("show");

	$("html, body").animate({
		scrollTop: elementOffset - headerH
	}, 700);
});



});