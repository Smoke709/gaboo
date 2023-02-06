/* global jQuery */

/* global window */
(function ($) {
  var COMMON = {
    init: function init() {
      this.cacheDOM();
      $(window).on('resize', this.reCalcOnResize.bind(this));
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.windowWidth = $(window).width();
    },
    reCalcOnResize: function reCalcOnResize() {
      this.windowWidth = $(window).width();
    }
  };
  var mainNavigation = {
    init: function init() {
      this.$mainNavContainer = $('#site-navigation');
      this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
      this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
      this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
      this.$menuToggler.on('click', this.toggleMenu.bind(this));
    },
    toggleMenu: function toggleMenu(e) {
      e.preventDefault();
      this.$mainMenuContainer.toggleClass('shown');
    }
  };
  $(function () {
    COMMON.init();
    mainNavigation.init();
  }); //responsive navbar

  var menubtn = document.querySelector('.menu-btn');
  var closebtn = document.querySelector('.close-btn');
  var navMenu = document.querySelector('.nav-menu');
  menubtn.addEventListener('click', function () {
    navMenu.classList.add('slidenav');
  });
  closebtn.addEventListener('click', function () {
    navMenu.classList.remove('slidenav');
  }); //toggle sub-menu

  $('.sub-btn').on('click', function () {
    $(this).next().slideToggle();
  });
  /* show more / show less  */
  //  $('#show-more-content')

  $('.show-more-content').fadeOut(300);
  $('.collection-btn a').on('click', function () {
    var currentText = $('.collection-btn a').text();

    if ($('.collection-btn a').text() == 'Show Me More') {
      $('.collection-btn a').text('Show Me Less');
      $('.show-more-content').fadeIn(300);
    } else {
      $('.collection-btn a').text('Show Me More');
      $('.show-more-content').fadeOut(300);
    }
  }); // //collection card slider init
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
    arrows: false
  });
  $('.slider-nav').slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    asNavFor: ".slider-for",
    canterPadding: 0,
    focusOnSelect: true
  });
})(jQuery);