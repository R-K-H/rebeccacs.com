<?php require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php'; ?>
<!doctype html>
	<head>
		<title>Rebecca Cordalis-Selvig</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="/assets/css/style.css">
		<link rel="stylesheet" type="text/css" href="/assets/css/font.css">
		<link rel="icon" href="/assets/img/favicon.png" type="image/png">

		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

		<meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="generator" content="RCSELVIG">

	    <meta property="og:title" content="Rebecca Cordalis-Selvig | Fashion Editorial Stylist">
	    <meta property="og:type" content="website">
	    <meta property="og:url" content="rebeccacs.com">
	    <meta property="og:image" content="//rebeccacs.com/assets/images/rebeccacs-main-pic-xl.jpg">
	    <meta property="og:site_name" content="Rebecca Cordalis-Selvig | Fashion Editorial Stylist">

	    <meta name="description" content="Disrupting fashion." />
		<meta name="keywords" content="Rebecca Cordalis-Selvig, Rebecca Fashion, Rebecca Selvig, RCSelvig, Rebecca Selvig Fashion, Editorial Styling Rebecca Selvig" />

	    <meta name="robots" content="index,nofollow" />

		<meta name="p:domain_verify" content="ffee7fb519a29b809227451780ce6bab"/>

		<link href="//cdn.rawgit.com/noelboss/featherlight/1.3.5/release/featherlight.min.css" type="text/css" rel="stylesheet" />
		<script src="//code.jquery.com/jquery-1.12.4.js"></script>
  		<script src="//code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
		<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
		<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
		
		<script type="text/javascript" src="/assets/js/mobile.js"></script>

	    <style type="text/css">
		    #collage-img {
		    	padding-bottom:30px; padding-top:30px; max-width:1170px; margin:auto; width:100%;
		    }
		    
		    .post-header {
		    	    text-align: center;
		    }
		    .post .category a {
			    padding: 1em 0;
			    border-bottom: 2px solid #000;
			}
		    h2 {
	    	    font-family: 'Linotype Didot W01';
			    font-weight: 400;
			    font-style: normal;
			    margin: 0.4em 0;
			    font-size: 62px;
			    font-size: 6.2rem;
			    line-height: 0.9;
			    text-transform: uppercase;
			    font-weight: normal;
		    }
		    @media (max-width: 890px) {
			    #interview {
			    	margin-top:0px;
			    }
			    p {
			    	font-size: 1em;
			    }
			    h1 {
			    	font-size: 1.2em;
			    	padding-top:25px;
			    }
			    #instagram {
				    /*position: relative;*/
				    margin-top: 1em;
				}
				#collage-img {
				  	padding-bottom: 0px !important;
				}
			}
			@media (min-width: 900px){
			  	#interview {
				  	margin-top:-550px;
				  }
				  h1 {
				  	padding-top: 70px;
				  }
				  
			}
			@media (min-width: 1400px)and (max-width: 4000px){
			  	#interview {
				  	margin-top:-750px;
				  }
				  h1 {
				  	padding-top: 15px;
				  }
			}
			a:hover {
			    outline: 0;
			}
			a:hover {
			    color: #c50000;
			    text-decoration: none !important;
			}
			.post .excerpt {
			    font-family: 'Adobe Garamond W08';
			    font-weight: 400;
			    font-style: italic;
			    padding: 0 20em;
			    margin: 2em 0 1em 0;
			}
			#footer .navigation .menu>li>a, #header .navigation .menu>li>a {
			    display: inline-block;
			    line-height: 1.3;
			    padding: 2px 0;
			    font-family: 'Sackers Gothic W01';
			    font-weight: 500;
			    font-style: normal;
			    text-transform: uppercase;
			    letter-spacing: 1px;
			    font-size: 8px;
			    font-size: 0.8rem;
			    -webkit-transition: none;
			    -moz-transition: none;
			    -o-transition: none;
			    transition: none;
			}
			button {
			    -webkit-transition: all 0.3s ease;
			    -moz-transition: all 0.3s ease;
			    -o-transition: all 0.3s ease;
			    transition: all 0.3s ease;
			}
			a {
			    text-decoration: none !important;
			    color: #000;
			    cursor: pointer;
			    -webkit-transition: all 0.3s ease;
			    -moz-transition: all 0.3s ease;
			    -o-transition: all 0.3s ease;
			    transition: all 0.3s ease;
			}
			p {
				font-family: 'Adobe Garamond W08';
			    font-weight: 400;
			    font-style: italic;
			}
			.scrollup {
			    width: 40px;
			    height: 40px;
			    position: fixed;
			    bottom: 10%;
			    right: 15%;
			    display: none;
          		background-color: #fff;
			}
	      .featherlight .featherlight-image{
	        max-width:100%;
	        max-height:100%;
	        width:auto;
		    }
		    .lazy {
		    display: none;
			}
			.image-1 {
				height:700px;
			}
			.image-1 img {
				height:700px;
			}
			.slick-arrow {
			    position: absolute;
			    top: 50%;
			    display: block;
			    width: 20px;
			    height: 20px;
			    margin-top: -10px;
			    padding: 0;
			    cursor: pointer;
			    color: #000;
			    border: none;
			    outline: none;
			    background: transparent;
			}
			.next {
				right: -25px;
			}
			.prev {
				left: -25px;
			}
			.slick-slide {
				display: none !important;
			}
			.slick-active {
				display: block !important;
			}
			.arrows {
				font-size: 25pt;
				font-family: 'ArrrowsRegular';
			}
	    </style>

	</head>