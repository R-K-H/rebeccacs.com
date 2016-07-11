<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$basedir = dirname(__FILE__); 
$content = $_POST['page'];
$myfile = fopen($basedir . DIRECTORY_SEPARATOR . 'blog_test.html', 'w+') or die("Unable to open file!");
fwrite($myfile, $content);
fclose($myfile);
