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
			<div id="main" class="site-main col-md-12" role="main" style="padding-bottom:50px;">
				<div id="single">
					<div class="content">
							<div class="container">
								<div class="inner">
									<img src="assets/images/contact-image.jpg" alt="rebecca cordalis-selvig" />
									<div class="col-md-4" style="background:#fff; margin-top:-550px;">
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
										<br><strong>RC-S:</strong> Editorial campaigns are about fun and fantasy, they are a reflection of society, and usually emmitt something both inspirational and aspirational. Fashion is continuously morphing, progressing into what is new, unconventional, and it is also a commentary on what is going on in the world-the images that are created to show consumers designers' new work should be a reflection of that.</p>
									</div>
                  <div class="col-md-7 col-md-offset-1">
                  <h1 style="padding-top:75px;">"<em>I really admire Emmanuelle Alt. Her style is very understated and simple, sort of the opposite of fashion-peacocking, which I'm not into. I gravitate to what is classic and timeless.</em>"</h1>
                  </div>
								</div>
							</div>
					</div>
				</div>
			</div>
			<div id="instagram">
				<header class="header">
					<h2 class="title">Instagram</h2>
					<a class="white-btn" href="http://instagram.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'instagram');"><i class="fa fa-instagram icon-instagram"></i> @rcselvig</a>
				</header>
				<div id="instafeed" class="images clearfix"></div>
			</div>
			<footer>
			</footer>
		</div>
		<script type="text/javascript" src="assets/js/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="assets/js/instafeed.min.js"></script>
		<script type="text/javascript">
	    var feed = new Instafeed({
	        get: 'user',
	        accessToken: '674909336.e4fca26.7906b0e36f3e41f58a6b17ee12e179b6',
	        userId: 674909336,
	        sortBy: 'most-recent',
	        links: true,
	        limit: 6,
	        resolution: 'standard_resolution',
	        clientId: 'e4fca26f6ec747c185a98e84db533f49',
	        template: '<a class="image overlay-btn col-md-2 col-sm-12 no-gutter" href="{{link}}" target="_blank" onclick="ga(\'send\', \'event\', \'external click\', \'click\', \'instagram\');"><img src="{{image}}" /></a>'
	    });
	    feed.run();
		</script>
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
