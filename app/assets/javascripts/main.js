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
				// isAnimated: true,
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
	});

})

$(function() {
	// Gallery image hover
	$(".img-wrapper").hover(
		function () {
			$(this).find(".img-overlay").animate({ opacity: 1 }, 600);
		}, function () {
			$(this).find(".img-overlay").animate({ opacity: 0 }, 600);
		}
	);
})
