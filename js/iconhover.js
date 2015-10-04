$(document).ready(function() {
	$('.cio-social-hover').hover(function() {
		var src = $(this).children(":first").attr("src").match(/[^\.]+/) + "-dark.png";
		$(this).children(":first").attr("src", src);
	},
	function() {
		var src = $(this).children(":first").attr("src").replace("-dark.png", ".png");
		$(this).children(":first").attr("src", src);
	});

	$('.cio-social-hover').click(function() {
		var src = $(this).children(":first").attr("src").replace("-dark.png", ".png");
		$(this).children(":first").attr("src", src);
	});
});