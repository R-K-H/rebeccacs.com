<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
?>
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<img src="assets/images/headshot.jpg" class="img-responsive">
			</div>
	  		<div class="col-md-5">

	  			<h1 style="padding-top:80px;">Bio</h1>
	  			<p>Rebecca Cordalis-Selvig is an aesthete, tastemaker and blogger currently working as an assistant and freelance fashion stylist in Vancouver, Canada.</p>

	  		</div>
	  	</div>
	  	<div class="clearfix" style="padding-bottom: 70px;"></div>
		<div class="row" style="padding-bottom: 70px;">
			<div class="col-sm-3 contact-form">
				<h1 style="padding: 0;margin: 0;float: right;font-style: italic;">Let's Connect</h1>
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