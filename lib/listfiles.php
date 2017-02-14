<?php
	// Gets our files.
	$directory = $_SERVER['DOCUMENT_ROOT'] . '/public/images/uploads';
	$scanned_directory = array_diff(scan_dir($directory), array('..', '.'));
	$files = array();
	foreach($scanned_directory as $file) { 
		$files[] = $file; 
	} 
	echo json_encode($files);

function scan_dir($dir) {
    $ignored = array('.', '..', '.svn', '.htaccess');

    $files = array();    
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) continue;
        $files[$file] = filemtime($dir . '/' . $file);
    }

    arsort($files);
    $files = array_keys($files);

    return ($files) ? $files : false;
}