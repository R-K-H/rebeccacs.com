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
	  height:500px; 
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
	  height:500px; 
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
	  opacity: 0.7;
	  text-indent: -9999px;
	  overflow: hidden;
	  text-decoration: none;
	  height: 61px;
	  width: 38px;
	  background: transparent url("/assets/images/themes.gif") no-repeat left top;
	  margin-top: -45px;
	  }

	.centered-btns_nav:active {
	  opacity: 1.0;
	  }

	.centered-btns_nav.next {
	  left: auto;
	  background-position: right top;
	  right: 0;
  	}
	#newsletter{
		z-index: 99999;
		height: 150px;
		right:0px;
		position: fixed;
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
	}
	#button:after{
		content: '<';
	}
	.reveal:after{
		content:'X' !important;
	}
	.fl{
	float:left;
	}

</style>
<div id="newsletter"><div id="button"></div><div id="newsletter-body" style="display: none;"><p>Enter your email below to receive the monthly newsletter and periodic updates.</p><input type="text" name="email" placeholder="email address" /><button class="button">Sign Up</button></div></div>

<div class="no-gutter row"></div>
	<div class="container">
	<div class="row" style="padding-bottom: 50px;">
	<div class="col-md-8">
	<div class="rslides_container">
		<ul class="rslides centered-btns centered-btns1" id="slider1">
		<?php 
		foreach($files as $file) {
			$texthtml = file_get_contents($file);
			preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
			if(!empty($image)){

				echo '<li><a style="color:#FFF; display: block; margin-bottom:20px; height:400px; padding-bottom:20px;" href="'.$file.'"><img src="'.$image['src'].'" alt="" class="img-responsive"></a></li>';
			}
		}
		?>
		</ul>
		</div>
	</div>
	<div class="col-md-3 col-md-offset-1" style="overflow: hidden;">
		<h1 style="padding:0;margin: 0;font-style: italic;">Lust List</h1>
		<ul class="lslides centered-btns centered-btns1" id="slider2">
			<li><img src="/assets/images/demo-boot.jpg" class="img-responsive"></li>
			<li><img src="/assets/images/lust-list-2.jpg" class="img-responsive"></li>
		</ul>
	</div>
	</div>
		<ul style="list-style-type:none; display: block; padding:0px;">
			<?php				
				foreach($files as $file) {
					$texthtml = file_get_contents($file);
					preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
					if(!empty($image)){
						$fileName = str_replace('.html','',$file);
						echo '<a style="color:#FFF; display: block; margin-bottom:20px; height:400px; padding-bottom:20px;" href="'.$file.'">';
						echo '<li style="display: block; margin-bottom:20px; height:350px; padding-bottom:20px; background: url('.$image['src'].') center center;">';
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