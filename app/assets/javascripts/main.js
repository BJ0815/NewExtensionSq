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

		// Gallery image hover
		$(".img-wrapper").hover(
			function () {
				$(this).find(".img-overlay").animate({ opacity: 1 }, 600);
			}, function () {
				$(this).find(".img-overlay").animate({ opacity: 0 }, 600);
			}
		);

		// Lightbox
		var $overlay = $('<div id="overlay"></div>');
		var $image = $("<img>");
		var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
		var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
		var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

		// Add overlay
		$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
		$("#flickr").append($overlay);

		// Hide overlay on default
		$overlay.hide();
		// When an image is clicked
		$(".img-overlay").click(function (event) {
			// Prevents default behavior
			event.preventDefault();
			// Adds href attribute to variable
			var imageLocation = $(this).prev().attr("src");
			// Add the image src to $image
			$image.attr("src", imageLocation);
			// Fade in the overlay
			$overlay.fadeIn("slow");
		});
		// When the overlay is clicked
		$overlay.click(function () {
			// Fade out the overlay
			$(this).fadeOut("slow");
		});

		// When next button is clicked
		$nextButton.click(function (event) {
			// Hide the current image
			$("#overlay img").hide();
			// Overlay image location
			var $currentImgSrc = $("#overlay img").attr("src");
			// Image with matching location of the overlay image
			var $currentImg = $('#masonry img[src="' + $currentImgSrc + '"]');
			// Finds the next image
			var $nextImg = $($currentImg.closest(".image").next().find("img"));
			// All of the images in the gallery
			var $images = $("#masonry img");
			// If there is a next image
			if ($nextImg.length > 0) {
				// Fade in the next image
				console.log('1');
				$("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
			} else {
				console.log('2');
				// Otherwise fade in the first image
				$("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
			}
			// Prevents overlay from being hidden
			event.stopPropagation();
		});


		// When previous button is clicked
		$prevButton.click(function (event) {
			// Hide the current image
			$("#overlay img").hide();
			// Overlay image location
			var $currentImgSrc = $("#overlay img").attr("src");
			// Image with matching location of the overlay image
			var $currentImg = $('#masonry img[src="' + $currentImgSrc + '"]');
			// Finds the next image
			var $nextImg = $($currentImg.closest(".image").prev().find("img"));
			// Fade in the next image
			$("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
			// Prevents overlay from being hidden
			event.stopPropagation();
		});

		// When the exit button is clicked
		$exitButton.click(function () {
			// Fade out the overlay
			$("#overlay").fadeOut("slow");
		});
	});


})

// $(function() {
// 	// Gallery image hover
// 	$(".img-wrapper").hover(
// 		function () {
// 			$(this).find(".img-overlay").animate({ opacity: 1 }, 600);
// 		}, function () {
// 			$(this).find(".img-overlay").animate({ opacity: 0 }, 600);
// 		}
// 	);

// 	// Lightbox
// 	var $overlay = $('<div id="overlay"></div>');
// 	var $image = $("<img>");
// 	var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
// 	var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
// 	var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// 	// Add overlay
// 	$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
// 	$("#flickr").append($overlay);

// 	// Hide overlay on default
// 	$overlay.hide();
// 	// When an image is clicked
// 	$(".img-overlay").click(function (event) {
// 		// Prevents default behavior
// 		event.preventDefault();
// 		// Adds href attribute to variable
// 		var imageLocation = $(this).prev().attr("src");
// 		// Add the image src to $image
// 		$image.attr("src", imageLocation);
// 		// Fade in the overlay
// 		$overlay.fadeIn("slow");
// 	});
// 	// When the overlay is clicked
// 	$overlay.click(function () {
// 		// Fade out the overlay
// 		$(this).fadeOut("slow");
// 	});

// 	// When next button is clicked
// 	$nextButton.click(function (event) {
// 		// Hide the current image
// 		$("#overlay img").hide();
// 		// Overlay image location
// 		var $currentImgSrc = $("#overlay img").attr("src");
// 		// Image with matching location of the overlay image
// 		var $currentImg = $('#masonry img[src="' + $currentImgSrc + '"]');
// 		// Finds the next image
// 		var $nextImg = $($currentImg.closest(".image").next().find("img"));
// 		// All of the images in the gallery
// 		var $images = $("#masonry img");
// 		// If there is a next image
// 		if ($nextImg.length > 0) {
// 			// Fade in the next image
// 			console.log('1');
// 			$("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
// 		} else {
// 			console.log('2');
// 			// Otherwise fade in the first image
// 			$("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
// 		}
// 		// Prevents overlay from being hidden
// 		event.stopPropagation();
// 	});

// 	// When previous button is clicked
// 	$prevButton.click(function (event) {
// 		// Hide the current image
// 		$("#overlay img").hide();
// 		// Overlay image location
// 		var $currentImgSrc = $("#overlay img").attr("src");
// 		// Image with matching location of the overlay image
// 		var $currentImg = $('#masonry img[src="' + $currentImgSrc + '"]');
// 		// Finds the next image
// 		var $nextImg = $($currentImg.closest(".image").prev().find("img"));
// 		// Fade in the next image
// 		$("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
// 		// Prevents overlay from being hidden
// 		event.stopPropagation();
// 	});

// 	// When the exit button is clicked
// 	$exitButton.click(function () {
// 		// Fade out the overlay
// 		$("#overlay").fadeOut("slow");
// 	});
// })
