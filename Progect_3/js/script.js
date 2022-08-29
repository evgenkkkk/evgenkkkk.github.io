$(document).ready(function () {
	$('.carousel_inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
					dotsClass: 'slick-dots'
				}
			}
		]
	});

	$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function () {
		$(this)
			.addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
			.closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
				$('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
			})
		});
	};

	toggleSlide('.catalog-item_link');
	toggleSlide('.catalog-item_back');

	// Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal_close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow')
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});



	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
				  required: "Пожалуйста, введите свою почту",
				  email: "Неправильно введен адрес почты"
				}
			}
			
		});
	};

	validateForms('#conultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+7 (999) 999-99-99");



	// Smooth scroll and pageup

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	})

	$("a[href=#up]").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	})

	new WOW().init();
});


