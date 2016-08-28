<?php
	// Gets our files.
	$directory = $_SERVER['DOCUMENT_ROOT'] . '/assets/images/uploads';
	$scanned_directory = array_diff(scandir($directory), array('..', '.'));
	$files = array();
	foreach($scanned_directory as $file) { 
		$files[] = $file; 
	} 
	echo json_encode($files);