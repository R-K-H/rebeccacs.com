<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
   
    $dir = $_SERVER['DOCUMENT_ROOT'] . '/blog';
	//$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php','.gitignore','backup'));
	function scan_dir($dir) {
	    $ignored = array('..', '.', 'index.php','.gitignore','backup');

	    $files = array();    
	    foreach (scandir($dir) as $file) {
	        if (in_array($file, $ignored)) continue;
	        $files[$file] = filemtime($dir . '/' . $file);
	    }

	    arsort($files);
	    $files = array_keys($files);

	    return ($files) ? $files : false;
	}
	$files = scan_dir($dir);
?>
<style type="text/css">
	#hideoverflow { overflow: hidden; }
	#outer { position: relative; left: 50%; float: left; }
	#inner { position: relative; left: -50%; float: left; }
	.rslides {
	  position: relative;
	  list-style: none;
	  overflow: hidden;
	  width: 100%;
	  padding: 0;
	  margin: 0;
	  height:400px; 
	  }

	.rslides li {
	  -webkit-backface-visibility: hidden;
	  position: absolute;
	  display: none;
	  width: 100%;
	  left: 0;
	  top: 0;
	  }

	.rslides li:first-child {
	  position: relative;
	  display: block;
	  float: left;
	  }

	.rslides img {
	  display: block;	  
	  height: auto;
	  float: left;
	  width: 100%;
	  border: 0;
	  }
	  .lslides {
	  position: relative;
	  list-style: none;
	  overflow: hidden;
	  width: 100%;
	  padding: 0;
	  margin: 0;
	  height:400px; 
	  }

	.lslides li {
	  -webkit-backface-visibility: hidden;
	  position: absolute;
	  display: none;
	  width: 100%;
	  left: 0;
	  top: 0;
	  }

	.lslides li:first-child {
	  position: relative;
	  display: block;
	  float: left;
	  }

	.lslides img {
	  display: block;	  
	  height: auto;
	  float: left;
	  width: 100%;
	  border: 0;
	  }
	 .centered-btns_nav {
	  z-index: 3;
	  position: absolute;
	  -webkit-tap-highlight-color: rgba(0,0,0,0);
	  top: 50%;
	  left: 0;
	  opacity: 0.5;
	  text-indent: -9999px;
	  overflow: hidden;
	  text-decoration: none;
	  height: 61px;
	  width: 38px;
	  background: transparent url("/assets/images/themes.gif") no-repeat left top;
	  margin-top: -45px;
	  }
	 .centered-btns_nav:hover {
	  opacity: 1.0;
	}
	.centered-btns_nav:active {
	  opacity: 1.0;
	}

	.centered-btns_nav.next {
	  left: auto;
	  background-position: right top;
	  right: 10px !important;
  	}
  	.centered-btns_nav.prev {
	  left: auto;
	  background-position: left top;
	  left: 10px !important;
  	}
	#newsletter{
		z-index: 99999;
		height: 150px;
		right:0px;
		position: fixed;
		background: #fff;
	}
	@media screen and (max-width: 480px) {
	    #newsletter-body{
			width: 300px !important;
		}
	}
	#newsletter-body{
		float: right;
		width: 460px;
		height: 150px;
		padding-left: 20px;
		padding-right: 5px;
	}

	#button{
		height: 150px;
		width: 30px;
		float: left;
		color: white;
		background: black;
		text-align: center;
		vertical-align: middle;
	}
	#button:after{
		text-align: center;
		vertical-align: middle;
		content: '<';
	}
	.reveal:after{
		text-align: center;
		vertical-align: middle;
		content:'X' !important;
	}
	.fl{
	float:left;
	}

	.m-slider-el-title {

	    
	    position: absolute;
	    bottom: 50px;
	}

</style>
<div id="newsletter">
	<div id="button"></div>
	<div id="newsletter-body" style="display: none;">
		<p>Enter your email below to receive the monthly newsletter and periodic updates.</p>
		<form action="//rebeccacs.us14.list-manage.com/subscribe/post?u=a1a64df7c5d45da8ae16c3db9&amp;id=e36058af4e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="form-inline validate" target="_blank" novalidate>
  			<div class="form-group">
				<input type="email" value="" name="EMAIL" class="form-control email" id="mce-EMAIL" placeholder="email address" required>
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    			<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a1a64df7c5d45da8ae16c3db9_e36058af4e" tabindex="-1" value=""></div>
			</div>
			<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-default btn-outline">
		</form>
	</div>
</div>

<!--End mc_embed_signup-->
	</div>
</div>

<div class="no-gutter row"></div>
	<div class="container">
	<div class="row" style="padding-bottom: 10px;">
	<div class="col-md-8">
	<div class="rslides_container">
		<ul class="rslides centered-btns centered-btns1" id="slider1">
		<?php 
		foreach($files as $file) {
			$texthtml = file_get_contents('blog/'.$file);
			preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
			if(!empty($image)){
				$fileName = str_replace('.html','',$file);
				echo '<li style="background: url(\''.$image['src'].'\') center center;">';
				echo '<a style="color:#FFF; display: block; margin-bottom:20px; height:400px; padding-bottom:20px;" href="/blog/'.$file.'">';
				echo '<div class="m-slider-el-title"><header class="header" style="width: auto; ">';
				echo '<span class="white-btn">'.ucwords(str_replace("-", " ", $fileName)).'</span></header></div>';
				echo '</a></li>';
			}
		}
		?>
		</ul>
		</div>
	</div>
	<div class="col-md-3 col-md-offset-1" style="overflow: hidden;">
		
						<header class="header" style="width: 160px; margin: auto;">
							<span class="white-btn">Lust List</span>
						</header>
		<ul class="lslides centered-btns centered-btns1" id="slider2">
			<li style="width: 250px; height:250px; background: url('/assets/images/demo-boot.jpg') center center; background-size: 250px;"><a href="amazon.com">&nbsp;</a></li>
			<li style="width: 250px; height:250px; background: url('/assets/images/lust-list-2.jpg') center center; background-size: 250px;"><a href="amazon.com">&nbsp;</a></li>
		</ul>
	</div>
	</div>
		<header class="header" style="width: 170px; margin: auto; padding-bottom: 20px;">
			<span class="white-btn">Recent Posts</span>
		</header>
		<ul style="list-style-type:none; display: block; padding:0px;">
			<?php				
				foreach($files as $file) {
					$texthtml = file_get_contents('blog/'.$file);
					preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
					if(!empty($image)){
						$fileName = str_replace('.html','',$file);
						echo '<a style="color:#FFF; display: block; margin-bottom:20px; height:400px; padding-bottom:20px;" href="/blog/'.$file.'">';
						echo '<li style="display: block; margin-bottom:20px; height:350px; padding-bottom:20px; background: url(\''.$image['src'].'\') center center;">';
						echo '<div id="outer"><div id="inner"><header class="header" style="margin-top: 330px;"><span class="white-btn">'.ucwords(str_replace("-", " ", $fileName)).'</span></header></div></div></li></a>';
					}
				}
			?>
		</ul>
	</div>
	<script type="text/javascript">
		$(function() {
	    $(".rslides").responsiveSlides({
			  auto: true,             // Boolean: Animate automatically, true or false
			  speed: 500,            // Integer: Speed of the transition, in milliseconds
			  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
			  pager: false,           // Boolean: Show pager, true or false
			  nav: true,             // Boolean: Show navigation, true or false
			  random: false,          // Boolean: Randomize the order of the slides, true or false
			  pause: false,           // Boolean: Pause on hover, true or false
			  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
			  prevText: "Previous",   // String: Text for the "previous" button
			  nextText: "Next",       // String: Text for the "next" button
			  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
			  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
			  manualControls: "",     // Selector: Declare custom pager navigation
			  namespace: "centered-btns",   // String: Change the default namespace used
			  before: function(){},   // Function: Before callback
			  after: function(){}     // Function: After callback
			});
	    $(".lslides").responsiveSlides({
			  auto: true,             // Boolean: Animate automatically, true or false
			  speed: 500,            // Integer: Speed of the transition, in milliseconds
			  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
			  pager: false,           // Boolean: Show pager, true or false
			  nav: false,             // Boolean: Show navigation, true or false
			  random: false,          // Boolean: Randomize the order of the slides, true or false
			  pause: false,           // Boolean: Pause on hover, true or false
			  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
			  prevText: "Previous",   // String: Text for the "previous" button
			  nextText: "Next",       // String: Text for the "next" button
			  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
			  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
			  manualControls: "",     // Selector: Declare custom pager navigation
			  namespace: "centered-btns",   // String: Change the default namespace used
			  before: function(){},   // Function: Before callback
			  after: function(){}     // Function: After callback
			});
	  });
		$( "#button" ).on('click',function(e) {
			$('#newsletter-body').toggle(500);
			$('#button').toggleClass('reveal');
			e.preventDefault();
		});
		$(function() {

		    var $sidebar   = $("#newsletter"), 
		        $window    = $(window),
		        offset     = $sidebar.offset(),
		        topPadding = 300;

		    $window.scroll(function() {
		        if ($window.scrollTop() > offset.top) {
		            $sidebar.stop().animate({
		                marginTop: topPadding
		            });
		        } else {
		            $sidebar.stop().animate({
		                marginTop: 0
		            });
		        }
		    });
		    
		});
	</script>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>