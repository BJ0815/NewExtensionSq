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
		$('.masonry').masonry({
			itemSelector: '.item',
			columnWidth: function (containerWidth) {
				return containerWidth / 12;
			},
			isAnimated: true,
			// horizontalOrder: true
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

		// $('#flickr').masonry({
		// 	itemSelector: '.item',
		// 	columnWidth: function (containerWidth) {
		// 		return containerWidth / 12;
		// 	}
		// });
		// $('.item img').lazyload({
		// 	effect: 'fadeIn'
		// });
		// $('.item img').trigger('scroll');
})
