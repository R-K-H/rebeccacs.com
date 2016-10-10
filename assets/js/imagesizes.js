$(document).ready(function() {
	if ($(window).width() <= 640) {
			$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
			$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
	} else {
		if ($(window).width() <= 1200) {
		    if(isMobile) {
				$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
			} else {
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic-lg.jpg");
			}
		} else {
		    if(isMobile) {
				$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
			} else {
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic-xl.jpg");
			}
		}
	}
});
$(window).resize(function() {
	if ($(window).width() <= 640) {
		$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
		$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
	} else {
		if ($(window).width() <= 1200) {
		    if(isMobile) {
				$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
			} else {
				$('#contact-img').attr("src", "assets/images/contact-me.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic-lg.jpg");
			}
		} else {
		    if(isMobile) {
				$('#contact-img').attr("src", "assets/images/contact-me-down.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic.jpg");
			} else {
				$('#contact-img').attr("src", "assets/images/contact-me.jpg");
				$('#main-img').attr("src", "assets/images/rebeccacs-main-pic-xl.jpg");
			}
		}
	}
});