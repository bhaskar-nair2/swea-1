$(function () {
	new WOW().init();
	$("#main_tagline").typed({
		strings: ["Empowering Thoughts.", "Igniting Minds."],
		contentType: 'html',
		typeSpeed: 100,
		startDelay: 500,
		loop: true,
		backDelay: 1000
	});
	$("a[href='#home']").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});
});
