/* global jQuery */
/* global window */
(($) => {
	const COMMON = {
		init() {
			this.cacheDOM();

			$(window).on('resize', this.reCalcOnResize.bind(this));
		},
		cacheDOM() {
			this.$body = $('body');
			this.windowWidth = $(window).width();
		},
		reCalcOnResize() {
			this.windowWidth = $(window).width();
		},
	};

	const mainNavigation = {
		init() {
			this.$mainNavContainer = $('#site-navigation');
			this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
			this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
			this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
			this.$menuToggler.on('click', this.toggleMenu.bind(this));
		},
		toggleMenu(e) {
			e.preventDefault();
			this.$mainMenuContainer.toggleClass('shown');
		},
	};

	$(() => {
		COMMON.init();
		mainNavigation.init();
	});
    
	//responsive navbar
    let menubtn = document.querySelector('.menu-btn');
	let closebtn = document.querySelector('.close-btn');
	let navMenu = document.querySelector('.nav-menu');

     menubtn.addEventListener('click', ()=>{
		navMenu.classList.add('slidenav');
	 })
	 closebtn.addEventListener('click', ()=>{
		navMenu.classList.remove('slidenav');
	 })
	 //toggle sub-menu
	 $('.sub-btn').on('click', function(){
		$(this).next().slideToggle();
	 })

	 /* show more / show less  */
	//  $('#show-more-content')
	$('.show-more-content').fadeOut(300);
	$('.collection-btn a').on('click', function(){
		var currentText = $('.collection-btn a').text();
		if($('.collection-btn a').text() == 'Show Me More') {
			$('.collection-btn a').text('Show Me Less');
			$('.show-more-content').fadeIn(300);
		}
		else {
			$('.collection-btn a').text('Show Me More');
			$('.show-more-content').fadeOut(300);
		}
	});

	// //collection card slider init
	// $('.card-slider').slick({
	// 	dots:false,
	// 	inifinite:true,
	// 	arrows:true,
	// 	slidesToScroll:1,
	// 	slidesToShow:4,
	// })

	//slick slider init in cart page
	$('.slider-for').slick({
      dots: false,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  asNavFor: ".slider-nav",
	  arrows: false,
	});
	$('.slider-nav').slick({
		dots:false,
		arrows: false,
		slidesToScroll: 1,
		slidesToShow: 3,
		asNavFor: ".slider-for",
		canterPadding: 0,
		focusOnSelect: true,
	})

})(jQuery);
