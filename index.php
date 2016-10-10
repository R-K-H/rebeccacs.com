<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
?>
			<div class="no-gutter row">
				<img id="main-img" style="max-width:4066px; margin:auto; width:100%;" alt="rebecca cordalis-selvig"  class="img-responsive"/>
				<noscript>
					<img src="assets/images/rebeccacs-main-pic.jpg" style="max-width:2400px; margin:auto; width:100%;" alt="rebecca cordalis-selvig"  class="img-responsive"/>
				</noscript>
			</div>
			<div class="container">
				<div id="interview" class="col-md-4" style="background:#fff;">
					<p><strong>YOU:</strong> So what do you do?
		            <br><strong>RC-S:</strong> I work for Michelle Addison as a personal stylist assistant and I style various fashion-related shoots in my spare time, usually on the weekends.</p>
		            <p><strong>YOU:</strong> Where are you located?<br>
		            <strong>RC-S:</strong> Vancouver, B.C., Canada.</p>
		            <p><strong>YOU:</strong> What did you study in school?<br>
		            <strong>RC-S:</strong> Media and communications.</p>
					<p><strong>YOU:</strong> Who would you consider to be your style icon?
		            <br>
		            <strong>RC-S:</strong> I really admire Emmanuelle Alt. Her style is very understated and simple, sort of the opposite of fashion-peacocking, which I'm not into. I gravitate to what is classic and timeless. That's just to do with my personal style though. When you are a stylist, you are expected to be stylish, but when it comes down to it, I'm more concerned with what I can create than what I look like.</p>	
		            <p><strong>YOU:</strong> What about style in editorials then?
					<br><strong>RC-S:</strong> Editorial campaigns are about fun and fantasy, they are a reflection of society, and usually emmitt something both inspirational and aspirational. Fashion is continuously morphing, progressing into what is new, unconventional, and it is also a commentary on what is going on in the world&mdash;the images that are created to show consumers designers' new work should be a reflection of that.</p>
				</div>
        		<div class="col-md-7 col-md-offset-1">
          			<h1>"<em>I really admire Emmanuelle Alt. Her style is very understated and simple, sort of the opposite of fashion-peacocking, which I'm not into. I gravitate to what is classic and timeless.</em>"</h1>
				</div>
			</div>
			<div class="no-gutter row">
				<img id="collage-img" src="assets/images/collage_bg.jpg" alt="rebecca cordalis-selvig" class="img-responsive" />
			</div>
			<div class="container">
				<div class="row">
					<div class="col-sm-4 contact-form">
						<img id="contact-img" src="assets/images/contact-me.jpg" alt="contact me" class="img-responsive" />
					</div>
					<div class="col-sm-8 contact-form">
						<div id="alert-area">
						</div>
						<form id="contact" method="post" class="form" role="form" autocomplete="off">
							<input style="display:none;" name="hny-pot" type="text" id="hny-pot" />
							<div class="row">
								<div class="col-xs-6 col-md-6 form-group">
									<input class="form-control" id="req-name" name="req-name" placeholder="Name" type="text" required autocomplete="off" autocapitalize="off" />
								</div>
								<div class="col-xs-6 col-md-6 form-group">
									<input class="form-control" id="req-email" name="req-email" placeholder="Email" type="email" required autocomplete="off" autocapitalize="off" />
								</div>
							</div>
							<textarea class="form-control" id="message" name="message" placeholder="Message" rows="5" autocomplete="off"></textarea>
							<br />
							<button class="btn btn-default pull-right btn-outline" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/instagram.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>			