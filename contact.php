<html>
	<head>
		<title>rebecca cordalis-selvig | editorial stylist</title>
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	</head>
	<body>
		<div id="wrap">
			<header id="header" role="banner">
				<div class="inner container">
					<div class="info">
						<ul class="social-links">
							<li><a class="fa fa-twitter twitter-btn" href="https://twitter.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'twitter');"></a></li>
							<li><a class="fa fa-instagram instagram-btn" href="https://instagram.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'instagram');"></a></li>
							<li><a class="fa fa-pinterest pinterest-btn" href="https://www.pinterest.com/rcselvig/" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'pinterest');"></a></li>
						</ul>
					</div>
					<nav class="main-navigation navigation">
						<ul id="menu-main" class="clearfix menu">
						<?php 
                echo '<li class="menu-item"><a href="index.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'work\');">Work</a></li>';
                echo '<li class="menu-item"><a href="about.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'about\');">About</a></li>';
                echo '<li class="menu-item"><a href="contact.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'contact\');">Contact</a></li>';
               ?>
						</ul>
					</nav>
				</div>
			</header>
			<div id="main" class="site-main col-md-12" role="main">
				<div id="single">
					<div class="content">
							<div class="container">
								<div class="inner">
									<img src="assets/images/home-image.jpg" alt="rebecca cordalis-selvig" style="padding-bottom:20px;" />
									<div class="row">
										<div class="col-sm-4">
										<h3>Say Hello!</h3>
										<hr>
										<address>
										<strong>Email:</strong> <a href="mailto:#"> hello@rebeccacs.com</a><br><br>
										<strong>Phone:</strong> (604)448-2627
										</address>
										</div>
										<div class="col-sm-8 contact-form">
										<form id="contact" method="post" class="form" role="form">
										<div class="row">
										<div class="col-xs-6 col-md-6 form-group">
										<input class="form-control" id="name" name="name" placeholder="Name" type="text" required autofocus />
										</div>
										<div class="col-xs-6 col-md-6 form-group">
										<input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
										</div>
										</div>
										<textarea class="form-control" id="message" name="message" placeholder="Message" rows="5"></textarea>
										<br />
										<div class="row">
										<div class="col-xs-12 col-md-12 form-group">
										<button class="btn btn-primary pull-right" type="submit">Submit</button>
										</form>
										</div>

								</div>
							</div>
					</div>
				</div>
			</div>
			<footer>
			</footer>
		</div>
		<script type="text/javascript" src="assets/js/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-68144791-1', 'auto');
		  ga('send', 'pageview');

		</script>
	</body>
</html>
