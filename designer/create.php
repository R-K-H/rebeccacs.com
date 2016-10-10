<?php

function seoUrl($string) {
    //Lower case everything
    $string = strtolower($string);
    //Make alphanumeric (removes all other characters)
    $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
    //Clean up multiple dashes or whitespaces
    $string = preg_replace("/[\s-]+/", " ", $string);
    //Convert whitespaces and underscore to dash
    $string = preg_replace("/[\s_]/", "-", $string);
    return $string;
}
	ini_set('display_errors',1);
	error_reporting(E_ALL);
	
	$basedir = $_SERVER['DOCUMENT_ROOT'] . '/blog'; 

	header('Content-type: application/json');
	$response_array['status'] = 'error'; 
	$response_array['data'] = '404';

	if(isset($_POST['content'])) {
		header('Content-type: application/json');
		$content = $_POST['content'];
		$title = $_POST['title'];
		$response_array['status'] = 'loaded post'; 
		$response_array['data'] = '100';
	}

	$cleanTitle = seoUrl($title);
	
	if( ($myfile = fopen($basedir . DIRECTORY_SEPARATOR . $cleanTitle .'.html', 'w+')) ) {
		$response_array['status'] = 'create file';
		$decodedContent = html_entity_decode($content);
		if(fwrite($myfile, $decodedContent)) {
			$response_array['status'] = 'success';
		}
		fclose($myfile);
	}
	
	echo json_encode($response_array);