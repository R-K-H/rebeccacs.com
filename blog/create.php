<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$basedir = dirname(__FILE__); 

$content = $_POST['page'];
$title = $_POST['title'];
$redirect = true;

if(isset($_POST['content']) && $_POST['content'] != null) {
	$payload = $_POST['content'];
	$content = $payload[0];
	$title = $payload[1];
	$redirect = false;
}

$cleanTitle = urlencode ($title);
$myfile = fopen($basedir . DIRECTORY_SEPARATOR . $title.'.html', 'w+') or die("Unable to open file!");
fwrite($myfile, $content);
fclose($myfile);

if($redirect) {
	sleep(1);
	header('Location: http://rebeccacs.com/blog/'.$title.'.html'); /* Redirect browser to new page */
}

echo "Page Created";