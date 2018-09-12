/*
	Landed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

	// var $window = $(window),
	// 	$body = $('body');

// // Play initial animations on page load.
$(window).on('load', function () {
	window.setTimeout(function () {
		$('body').removeClass('is-preload');
	}, 100);
});


	// // Title Bar.
	// $(
	// 	'<div id="titleBar">' +
	// 	'<a href="#navPanel" class="toggle"></a>' +
	// 	'<span class="title">' + $('#logo').html() + '</span>' +
	// 	'</div>'
	// )
	// 	.appendTo($body);


$(document).on("turbolinks:load", function () {
	function f_masonry() {

		var $container = $('#masonry');
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector: '.item',
				columnWidth: '.item',
				isAnimated: true,
				// isFitWidth: true,
				percentPosition: true,
				transitionDuration: 0,
			});
		});
	}

	$(function () {
		f_masonry();
		$(".item img").lazyload({
			effect: "fadeIn",
			failurelimit: 40,
			load: f_masonry,
		});

		// Gallery image hover
		$(".img-wrapper").hover(
			function () {
				$(this).find(".img-overlay").animate({ opacity: 1 }, 600);
			}, function () {
				$(this).find(".img-overlay").animate({ opacity: 0 }, 600);
			}
		);

		// photoswipe
		var items = [];
		var $pic = $('.photos');
		$pic.find('a').each(function() {
			var $img_src = $(this).data('src'),
					$height = $(this).data('height'),
					$width = $(this).data('width');

			var item = {
				src: $img_src,
				w: $width,
				h: $height
			}

			// item.append(img);
			items.push(item);
		});

		var $pswp = $('.pswp')[0];
		$pic.on('click', 'figure', function (event) {
			event.preventDefault();

			var $index = $(this).children().data('index');
			var options = {
				index: $index,
				bgOpacity: 0.7,
				showHideOpacity: true
			}

			// Initialize PhotoSwipe
			var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
			lightBox.init();
		});


		// var $overlay = $('.overlay');
		// var $overlay = $('<div id="overlay"></div>');
		// var $images = $('<div class="swiper-container gallery-top"></div>');
		// var $prevButton = $('<div class="swiper-button-prev"></div>');
		// var $nextButton = $('<div class="swiper-button-next"></div>');
		// var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
		// var $gallery = $('<div class="swiper-container gallery-thumbs"></div>');

		// $('.photos').each(function(){
		// 	var $pic = $(this);
		// 	var wrapp = $('<div class="swiper-wrapper"></div>');
		// 	getItems = function() {
		// 		var items = [];
		// 		$pic.find('img').each(function() {
		// 			var img_src = $(this).attr('data-original');

		// 			var item = $('<div class="swiper-slide"></div>');
		// 			// var img = $('<img>');
		// 			var urlString = 'url(' + img_src + ')';
		// 			// img.attr('src', img_src);
		// 			item.css({"background-image": urlString});

		// 			// item.append(img);
		// 			items.push(item);
		// 		});
		// 		return items;
		// 	}
		// 	var items = getItems();
		// 	var wrapper = wrapp.append(items);
		// 	$gallery.append(wrapper.clone());
		// 	$images.append(wrapper.clone());
		// 	// console.log(items);debugger;
		// });
		// $images.append($prevButton).append($nextButton);
		// $overlay.append($images);
		// $overlay.append($gallery);
		// $('#flickr').append($overlay);

		// var galleryTop = new Swiper('.gallery-top', {
		// 	spaceBetween: 10,
		// 	loop: true,
		// 	loopedSlides: 5, //looped slides should be the same
		// 	// direction: 'horizontal',
		// 	// mousewheel: true,

		// 	// 如果需要前进后退按钮
		// 	navigation: {
		// 		nextEl: '.swiper-button-next',
		// 		prevEl: '.swiper-button-prev',
		// 	},

		// 	// on: {
		// 	// 	click: function() {
		// 	// 		$overlay.fadeOut("slow");
		// 	// 	}
		// 	// }
		// });

		// var galleryThumbs = new Swiper('.gallery-thumbs', {
		// 	spaceBetween: 10,
		// 	slidesPerView: 4,
		// 	touchRatio: 0.2,
		// 	loop: true,
		// 	loopedSlides: 5, //looped slides should be the same
		// 	slideToClickedSlide: true,
		// });
		// galleryTop.controller.control = galleryThumbs;
		// galleryThumbs.controller.control = galleryTop;


		// $overlay.append($mySwiper);

		// $overlay.hide();

		// // When an image is clicked
		// $(".img-overlay").click(function (event) {
		// 	// Prevents default behavior
		// 	event.preventDefault();

		// 	// Fade in the overlay
		// 	$overlay.fadeIn("slow");
		// });
		// // When the exit button is clicked
		// $exitButton.click(function () {
		// 	// Fade out the overlay
		// 	$("#overlay").fadeOut("slow");
		// });


	});


})