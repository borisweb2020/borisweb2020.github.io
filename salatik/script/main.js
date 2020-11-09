$(function() {
// ====== Header & Nav
	const $menu      = $('#menu');
	const $headerNav = $('#headerNav');
	const $header    = $('#header');
	const $burger    = $('#burger');

	const $headerSearch = $('#headerForm .header_form-search');

//*** Installing nav.menu 
	function breakPoints() {

	let widthWindow     = $(window).width();
	let heightHeaderNav = $headerNav.outerHeight();
	let heightHeader    = $header.outerHeight();
	let posMenu;

		if($headerNav.hasClass('show')){
			posMenu = heightHeaderNav + heightHeader - 1;
		}else{
			posMenu = 0;
		}

		if(widthWindow < 768) {
			$menu.addClass('menu-mobile');
			$menu.offset({top: posMenu});
			
		} else {
			$menu.removeClass('menu-mobile');
			$menu.css('top', '');
		}
	}

	breakPoints();

	$(window).on('resize', function() {
		breakPoints();
	});

//*** toggling burger
	$burger.on('click', function(event) {
		event.preventDefault();

		$headerNav.toggleClass('show');
		$menu.toggleClass('show');
		breakPoints();
	})

//*** toggling sublist menu
	$('#menu .menu_list-wrap').on('click', function(event) {
		event.preventDefault();

		$(this).next().toggleClass('active');
		$(this).children('.menu_list-icon').toggleClass('rotate');
		$('#menu .menu_list-wrap').not(this).next().removeClass('active');
		$('#menu .menu_list-wrap').not(this).children('.menu_list-icon').removeClass('rotate');
	})

//*** installing Placeholder for <input.header_form-search>
	function placeHolder() {
		let widthWindow = $(window).width();

		if(widthWindow < 1440) {
			$headerSearch.attr('placeholder', 'Поиск');
		} else {
			$headerSearch.attr('placeholder', 'Поиск рецептов');
		}
	}

	placeHolder();

	$(window).on('resize', function() {
		placeHolder();
	});


// ======Slider for Intro
	const $introSlider = $('#introSlider');

	$introSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button class="intro_button slick-next" type="button"><svg class="intro_button-right"><use xlink:href="#arrowSlider"></use></svg></button>',
		prevArrow: '<button class="intro_button slick-prev" type="button"><svg class="intro_button-left"><use xlink:href="#arrowSlider"></use></svg></button>',
		dots: true,
	})


// ====== Accordion for Ingredients
	const $ingredientsBtn = $('#ingredients .ingredients_item-btn');

	$ingredientsBtn.on('click', function() {
		
		$(this).next().slideToggle(300, 'linear');

		if($(this).find('use').attr('xlink:href') == '#plus') {
			$(this).find('use').attr('xlink:href', '#minus');
		} else {
			$(this).find('use').attr('xlink:href', '#plus');
		}
	});

// ====== Button Up
	const $buttonUp = $('#buttonUp');
	const $pointAppearing = $('#pointAppearing');
	
	function appearButton() {
		let posElement = $pointAppearing.offset().top;
		let posScroll  = $(window).scrollTop();

		if( posScroll > posElement){
			$buttonUp.addClass('fixed');
		} else {
			$buttonUp.removeClass('fixed');
		}
	}

	appearButton();

	$(window).on('resize, scroll', function(){
		appearButton();
	});



	$buttonUp.on('click', function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 800, 'linear');
	});

//*** toggling profile menu

	$('#header .header_profile-btn').on('click', function(event){
		event.preventDefault();

		$(this).next().toggleClass('show');
		$(this).children().toggleClass('rotate');
	});

});