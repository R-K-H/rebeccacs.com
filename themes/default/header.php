<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>
		<?php $base_url = $_SERVER["SERVER_NAME"]; ?>
		<meta name="description" content="<?php echo site_description(); ?>">

		<link rel="stylesheet" href="<?php echo theme_url('/css/reset.css'); ?>">
		<link rel="stylesheet" href="<?php echo theme_url('/css/style.css'); ?>">
		<link rel="stylesheet" href="<?php echo theme_url('/css/small.css'); ?>" media="(max-width: 400px)">
		<link rel="stylesheet" type="text/css" href="http://<?php echo $base_url; ?>/assets/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="http://<?php echo $base_url; ?>/assets/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="http://<?php echo $base_url; ?>/assets/css/style.css">
		<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo rss_url(); ?>">
		<link rel="shortcut icon" href="<?php echo theme_url('img/favicon.png'); ?>">

		<!--[if lt IE 9]>
			<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<script>var base = '<?php echo theme_url(); ?>';</script>
		<script src="<?php echo asset_url('/js/zepto.js'); ?>"></script>
		<script src="<?php echo theme_url('/js/main.js'); ?>"></script>

	    <meta name="viewport" content="width=device-width">
	    <meta name="generator" content="Anchor CMS">

	    <meta property="og:title" content="<?php echo site_name(); ?>">
	    <meta property="og:type" content="website">
	    <meta property="og:url" content="<?php echo e(current_url()); ?>">
	    <meta property="og:image" content="<?php echo theme_url('img/og_image.gif'); ?>">
	    <meta property="og:site_name" content="<?php echo site_name(); ?>">
	    <meta property="og:description" content="<?php echo site_description(); ?>">

		<?php if(customised()): ?>
		    <!-- Custom CSS -->
    		<style><?php echo article_css(); ?></style>

    		<!--  Custom Javascript -->
    		<script><?php echo article_js(); ?></script>
		<?php endif; ?>
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
                echo '<li class="menu-item"><a href="http://'.$base_url.'/index.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'work\');">Work</a></li>';
                echo '<li class="menu-item"><a href="http://'.$base_url.'/about.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'about\');">About</a></li>';
                echo '<li class="menu-item"><a href="http://'.$base_url.'/contact.php" onclick="ga(\'send\', \'event\', \'internal click\', \'click\', \'contact\');">Contact</a></li>';
               ?>
						</ul>
					</nav>
				</div>
			</header>
