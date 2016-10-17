<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
   
    $directory = $_SERVER['DOCUMENT_ROOT'] . '/blog';
	$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php','.gitignore','backup'));

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
</style>
<div class="no-gutter row"></div>
	<div class="container">
	<div class="row" style="padding-bottom: 50px;">
	<div class="col-md-8">
	<div class="rslides_container">
		<ul class="rslides centered-btns centered-btns1" id="slider1">
		<?php 
		foreach($scanned_directory as $file) {
			$texthtml = file_get_contents($file);
			preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
			if(!empty($image)){
				echo '<li><img src="'.$image['src'].'" alt=""></li>';
			}
		}
		?>
		</ul>
		</div>
	</div>
	<div class="col-md-4" style="overflow: hidden;">
		<h1>Lust List</h1>
		<img src="/assets/images/headshot.jpg" style="width:auto;">
		<p>This is paragraph text for the lust list. This will have images and a link.</p>
	</div>
	</div>
		<ul style="list-style-type:none; display: block; padding:0px;">
			<?php				
				foreach($scanned_directory as $file) {
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
	  });
	</script>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>