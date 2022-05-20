$(function() {
		
		$('#barbtn').click(function(event) {
				event.preventDefault()
				$('#bar').toggleClass('bar-shadow')
				$('#buttons').toggleClass('nav-clicked');
		});
		
		$('.navlink').click(function() {
				$('#buttons').removeClass('nav-clicked');
		});
		
		$(window).scroll(function() {
				var reveals = $('.reveal');
				for (var i = 0; i < reveals.length; i++) {
						var windowHeight = window.innerHeight;
						var elementTop = reveals[i].getBoundingClientRect().top;
						var elementVisible = 150;
						var attr = reveals[i].getAttribute('id');
						if (elementTop < windowHeight - elementVisible) {
								reveals[i].classList.add("active");
								if (attr === 'skillDiv') {
										$('#py').addClass('animate');
										$('#js').addClass('animate');
										$('#web').addClass('animate');
								}
						} else {
								reveals[i].classList.remove("active");
								if (attr === 'skillDiv') {
										$('#py').removeClass('animate');
										$('#js').removeClass('animate');
										$('#web').removeClass('animate');
								}
						}
				}
	 });
	 
})
