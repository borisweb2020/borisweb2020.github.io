$(function(){

// ===== About Slider
let $photoSlider = $('#photoSlider'),
	$aboutSlider = $('#aboutSlider');

$photoSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	speed: 1000,
	arrows: false
});

$aboutSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	speed: 1000,
	appendArrows: $('.about_buttonbox'),
	nextArrow: '<button type="button" class="about_button slick-next"><img class="about_arrow" src="img/about/arrow-right.png" alt="arrow next"></button>',
	prevArrow: '<button type="button" class="about_button slick-prev"><img class="about_arrow" src="img/about/arrow-left.png" alt="arrow previous"></button>',
	asNavFor: $photoSlider
});

// ===== Job Slider
let $jobSlider = $('#jobSlider');

$jobSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	speed: 500,
	arrows: false,
	dots: true,
	appendDots: $('.job_dotsbox')
});

// ===== Height of a bar

function barHeight() {

	let $barWidth = $('.skill_bar', '#skillInner').outerWidth();

	let heightOfBar = $barWidth * 0.33333;

	let $barHeight = $('.skill_bar', '#skillInner').outerHeight(heightOfBar);
}

$(window).on('resize', function(){

	barHeight();
}); 

barHeight(); 


// ===== Filling a bar

function barFill() {

	let $bar = $('.skill_bar:empty', '#skillInner');

	$bar.addClass('skill_fill');
}

barFill();

// ===== Installing <h3 .title_small> according position of a bar

function moveTitle() {

	let $title = $('.title_small:last-child', '.skill_content');
	let $fillBar = $('.skill_bar:parent:eq(0)', '.skill_content');
	
		
	$fillBar.each( function(index, value) {

		let posBar = $(this).position().left;

		$title.eq(index).css('left', posBar);
			
	});
} 

moveTitle();

$(window).on('resize', function() {
	moveTitle();
});

// ===== Smooth scroll
$('[data-scroll]').on('click', function(event) {

	event.preventDefault();

	let elementId = $(this).data('scroll');

	let elementPos = $(elementId).offset().top;

	$('html, body').animate({
		scrollTop: elementPos
	}, 1000, 'linear');
	
});

// ===== Scroll top

let $scroll = $('#scroll');

function checkScroll() {
let introH = $('#intro').innerHeight();
let navH = $('#nav').innerHeight();

let showScroll = introH + navH;

let scrollPos = $(window).scrollTop();

if(scrollPos > showScroll) {
		$scroll.addClass('fixed');
} else {
		$scroll.removeClass('fixed');
}

}

checkScroll();

$(window).on('scroll resize', function() {

	checkScroll();
});




$scroll.on('click', function(event) {

	event.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 800, 'linear');
});


	
});