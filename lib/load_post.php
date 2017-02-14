<?php
	$dir = $_SERVER['DOCUMENT_ROOT'] . '/blog';

	$postNumber = $_POST['post'];
	$pageName = $_POST['page'];
	//$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php','.gitignore','backup'));
	function scan_dir($dir) {
	    $ignored = array('..', '.', 'index.php','.gitignore','backup');

	    $files = array();    
	    foreach (scandir($dir) as $file) {
	        if (in_array($file, $ignored)) continue;
	        $files[$file] = filemtime($dir . '/' . $file);
	    }

	    arsort($files);
	    $files = array_keys($files);

	    return ($files) ? $files : false;
	}

	$files = scan_dir($dir);
	$total_files = count($files);
	if($postNumber > $total_files){
		exit;
	} 
	$html = $files[$postNumber];

	preg_replace('.blog\/*.', '', $pageName);
	if($html == $pageName){
		$html = $files[$postNumber+1];
	}
	$classname = 'main-container';
	$dom = new DOMDocument;
	@$dom->loadHTMLFile($html);
	$xpath = new DOMXPath($dom);
	$result = '';
	//$results = $xpath->query('//*[@class="main-container"]');
	foreach($xpath->evaluate('//div[@class="main-container"]/node()') as $childNode) {
	  $result .= $dom->saveHtml($childNode);
	}
	echo $result;

	exit;