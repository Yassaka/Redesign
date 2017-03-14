$(document).ready(function () {
	var $header = $(".header");
	var $menu = $('.header__menu');
	var $items = $('.header__items');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$header.addClass('fixed');

			return;
		}

		$header.removeClass('fixed');
	});

	$menu.click(function (e) {
		$items.toggleClass('show');
	});

	$('a[href*=\\#]').on('click', function (event){
		event.preventDefault();
		$items.removeClass('show');

		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - $header.height()
		}, 500);
	});

	$('.content__carousel').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 600
	});
});
