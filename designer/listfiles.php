<?php
// Gets our files.
	$directory = $_SERVER['DOCUMENT_ROOT'] . '/assets/images/uploads';
	$scanned_directory = array_diff(scandir($directory), array('..', '.'));

	foreach($scanned_directory as $file) { 
		echo $file . ','; 
	}
