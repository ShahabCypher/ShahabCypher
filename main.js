// nav bar button click

$('#barbtn').click(function() {
		$('#head').toggleClass("clicked");
});

/* close on click */
$(document).on('click', function (e) {
		var clickedEl = $(e.target);
		var outsideClicker = $('#barbtn');
		
		if ( !(clickedEl.is(outsideClicker) || outsideClicker.has(clickedEl).length > 0) ) {
		$('#head').removeClass('clicked');
		}
});

/* remove on scroll */
$(document).scroll(function () {
		if ($('#head').hasClass('clicked')) {
				$('#head').removeClass('clicked');
		}
});