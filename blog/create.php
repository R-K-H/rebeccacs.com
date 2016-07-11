<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$basedir = dirname(__FILE__); 
$content = $_POST['page'];
$title = $_POST['title'];
$cleanTitle = urlencode ($title);
$myfile = fopen($basedir . DIRECTORY_SEPARATOR . $title.'.html', 'w+') or die("Unable to open file!");
fwrite($myfile, $content);
fclose($myfile);
sleep(1);
header('Location: http://rebeccacs.com/blog/'.$title.'.html'); /* Redirect browser */
