// Contact Form
		  $('#contact').submit(function( event ){
		  	event.preventDefault();
		  	console.log(document.referrer);
		  	ga('send', 'event', 'submit', 'form', 'contact');
		  	if($('#req-email').val() === '' || $('#req-name').val() === '' || $('#message').val() === '') {
		  		$("#alert-area").append($("<div class='alert-message danger fade in' data-alert><p>Please fill out all required fields.</p></div>"));
		  		$(".alert-message").delay(1000).fadeOut("slow", function () { $(this).fadeTo('slow', 0).slideUp(); });
		  	} else {
			  	$.post("contact.php", {'ref': document.referrer,'req-email': $('#req-email').val(), 'req-name': $('#req-name').val(), 'message': $('#message').val(), 'pot': $('#hny-pot').val()})
				  	.done(function ( data ) {
				  		var news = JSON.parse(data);
				  		$("#alert-area").append($("<div class='alert-message " + news.type + " fade in' data-alert><p> " + news.message + " </p></div>"));
				  		if(news.type == 'success') {
				  			$(".contact-form").delay(1000).fadeOut("slow", function () { $(this).fadeTo('slow', 0).slideUp(); });
				  			ga('send', 'event', 'received', 'form', 'contact');
				  		}
				  		ga('send', 'event', 'failed', 'form', 'contact');
		    			//$(".alert-message").delay(2000).fadeOut("slow", function () { $(this).remove(); });
				  	});
			}
		  });