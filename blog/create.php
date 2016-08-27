<?php
	ini_set('display_errors',1);
	error_reporting(E_ALL);
	
	$basedir = dirname(__FILE__); 

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

	$cleanTitle = urlencode ($title);
	
	if( ($myfile = fopen($basedir . DIRECTORY_SEPARATOR . $title.'.html', 'w+')) ) {
		$response_array['status'] = 'create file';
		$decodedContent = html_entity_decode($content);
		if(fwrite($myfile, $decodedContent)) {
			$response_array['status'] = 'success';
		}
		fclose($myfile);
	}
	
	echo json_encode($response_array);