/* $(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>', 
		responsive: [
			{
				breakpoint: 992,
      			settings: {
					dots: true,
					arrows: false
				  }
			}
		]
	  });
}); */  /* для slick */

/* let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  }); */ /* для tiny-slider */

  $(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		nav:true,
		navText: [
			'<img src="icons/left.svg">',
			'<img src="icons/right.svg">'
			/* '<img src="icons/left.svg">',
			'<img src="icons/right.svg">' */
		] ,
		autoplay:true,
		autoplayTimeout:3000, 
		autoplayHoverPause:false,
		responsive:{
					
		}
	});
  });