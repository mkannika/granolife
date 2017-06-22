$(document).ready(function(){
	//Click event to scroll to top
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 400);
			return false;
			}
		}
	});

	//$("#main ul.accordion li .inner").hide();
	$("#main ul.accordion h3").click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});

});
