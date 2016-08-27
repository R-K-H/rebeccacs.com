<?php
// ini_set('display_errors',1);
// error_reporting(E_ALL);
$basedir = dirname(__FILE__); 

//$content = $_POST['page'];
//$title = $_POST['title'];
$redirect = false;

header('Content-type: application/json');
$response_array['status'] = 'error'; 
$response_array['data'] = $_POST['content'];

if(!isset($_POST['content'])) {
	header('Content-type: application/json');
	$content = $_POST['content'];
	$title = $_POST['title'];

	$response_array['data'] = $title;
	$redirect = false;
}

$cleanTitle = urlencode ($title);
$myfile = fopen($basedir . DIRECTORY_SEPARATOR . $title.'.html', 'w+') or die("Unable to open file!");
if(fwrite($myfile, $content)) {
	$response_array['status'] = 'success'; 
}

fclose($myfile);

if($redirect) {
	sleep(1);
	header('Location: http://rebeccacs.com/blog/'.$title.'.html'); /* Redirect browser to new page */
}

echo json_encode($response_array);
