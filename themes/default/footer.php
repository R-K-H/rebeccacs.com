		<div id="instagram">
				<header class="header">
					<h2 class="title">Instagram</h2>
					<a class="white-btn" href="http://instagram.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'instagram');"><i class="fa fa-instagram icon-instagram"></i> @rcselvig</a>
				</header>
				<div id="instafeed" class="images clearfix"></div>
		</div>
		<?php $base_url = $_SERVER["SERVER_NAME"]; ?>
		<footer id="footer" class="site-footer" role="contentinfo">
		<div class="top">
			<div class="container inner">
				<h1 class="logo-container">
					<a class="logo" href="http://rebeccacs.com" title="Rebecca Cordalis-Selvig" rel="home">Rebecca Cordalis-Selvig</a>
				</h1>
				<div class="info">
					<ul class="social-links">
						<li><a class="fa fa-twitter twitter-btn" href="https://twitter.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'twitter');"></a></li>
						<li><a class="fa fa-instagram instagram-btn" href="https://instagram.com/rcselvig" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'instagram');"></a></li>
						<li><a class="fa fa-pinterest pinterest-btn" href="https://www.pinterest.com/rcselvig/" target="_blank" onclick="ga('send', 'event', 'external click', 'click', 'pinterest');"></a></li>
					</ul>				
				</div>
				<nav class="main-navigation navigation">
					<ul id="menu-main-1" class="clearfix menu">
						<?php 
                echo '<li class="menu-item"><a href="http://'.$base_url.'/index.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'work\');">Work</a></li>';
                echo '<li class="menu-item"><a href="http://'.$base_url.'/about.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'about\');">About</a></li>';
                echo '<li class="menu-item"><a href="http://'.$base_url.'/contact.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'contact\');">Contact</a></li>';
               ?>
					</ul>
				</nav>				
			</div>	
		</div>		
		<div class="bottom">
			<div class="container inner">
				<div class="span copyright">
					<p class="small">
						All rights reserved. © <?php echo date('Y');?> Rebecca Cordalis-Selvig</p>
				</div>
			</div>
		</div>
	</footer>
		</div>
		<script type="text/javascript" src="http://<?php echo $base_url;?>/assets/js/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="http://<?php echo $base_url;?>/assets/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="http://<?php echo $base_url;?>/assets/js/instafeed.min.js"></script>
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
	        template: '<a class="image overlay-btn col-md-2 col-sm-4 col-xs-4 no-gutter" href="{{link}}" target="_blank" onclick="ga(\'send\', \'event\', \'external click\', \'click\', \'instagram\');"><img src="{{image}}" /></a>'
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