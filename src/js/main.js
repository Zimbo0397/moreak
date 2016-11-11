
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).on('ready', function () {
	var $window = $(window),
		windowWidth = $window.width(),
		windowHeight = $window.height(),
		bodyHeight = $('body').height();


		// resize
		$window.on('resize', function () {

			windowWidth = $window.width();
			windowHeight = $window.height();
			bodyHeight = $('body').height();

		});

});


$(window).on('load', function() {
	$('#scroll-btn').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
})


// Blueimp Init
// document.getElementById('links').onclick = function (event) {
//     event = event || window.event;
//     var target = event.target || event.srcElement,
//         link = target.src ? target.parentNode : target,
//         options = {index: link, event: event},
//         links = this.getElementsByTagName('a');
//     blueimp.Gallery(links, options);
// };


$(window).on('load', function() {
	$('.iframe-holder').each(function() {

		$(this).on('click', function() {

			$self= $(this),
			selfData = $self.attr('data-href');

			$('.iframe-holder').removeClass('active');
			$self.addClass('active');
			$self.html('<iframe src="'+selfData+'" frameborder="0" allowfullscreen></iframe>');
			console.log($self)
			
		})

	});
	
});