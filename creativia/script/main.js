$(function() {

// Slider for Intro

let introSlider = $('#introSlider');

introSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="intro_arrow slick-prev"><svg><use xlink:href="#arrow-prev"></use></svg></button>',
	nextArrow: '<button type="button" class="intro_arrow slick-next"><svg><use xlink:href="#arrow-next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 780,
			settings: {
				arrows: false,
				dots: true
			}
		},
	]
});


// Accordion for About

$('#aboutCreativia .about_button').on('click', function() {
	
	$(this).next().toggleClass('about_stext--active');

	if ($(this).next().hasClass('about_stext--active') == true) {

		$(this).find('img').attr('src', 'img/about/minus.svg');
		$(this).children('h3').addClass('about_subtitle--red');
	} else {

		$(this).find('img').attr('src', 'img/about/plus.svg');
		$(this).children('h3').removeClass('about_subtitle--red');
	}
});


// Style for Product CheckBox

let $productCheckboxLeft = $('#productFormLeft .product_checkbox');
let $productCheckboxRight = $('#productFormRight .product_checkbox');	

$productCheckboxLeft.on('change', function() {

	if ($(this).prop('checked') == true) {

		$(this).parent().addClass('product--checked');
	} else {

		$(this).parent().removeClass('product--checked');
	}
});

$productCheckboxRight.on('change', function() {

	if ($(this).prop('checked') == true) {

		$(this).parent().addClass('product--checked');
	} else {

		$(this).parent().removeClass('product--checked');
	}
});


// Slider for Client
$('#clientSlider').slick({

	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
});

// Accordion for Service
$('#serviceAccordion .service_button').on('click', function(){
	$(this).next().slideToggle(500, 'linear');
	$(this).children('.service_iconbox').toggleClass('service_iconbox--active');
	$(this).find('.service_icon').toggleClass('service_icon--active');
});

// Toogle for Blog

$('#blogReview').on('click', function(){

	let $blogInvisible = $('#blogInvisible');

	$blogInvisible.slideToggle(800, 'linear');
	$(this).children('.blog_arrow').toggleClass('blog_arrow--up');
});

// Smooth Scroll

$('#headerNav .header_link').on('click', function(event){
	event.preventDefault();

	let elementId = $(this).data('scroll');
	let elementPosition = $(elementId).offset().top;
	

	$('html, body').animate({
		scrollTop: elementPosition
	}, 1000, "linear");

	$('#headerNav').removeClass('show');
});


$('.scrollBar').on('click', function(){

	$('html, body').animate({
		scrollTop: 0
	}, 1000, "linear");
});

// Nav Toggle
let $nav = $('#headerNav');
let $navToggle = $('#navToggle');

$navToggle.on('click', function(){

	$nav.toggleClass('show');
});



});