<?php
$ds          = DIRECTORY_SEPARATOR;  //1
$path = $_SERVER['DOCUMENT_ROOT'];
$storeFolder = 'uploads';   //2
$response_array['status'] = 'error'; 
$response_array['data'] = '404';
if (!empty($_FILES)) {
     
    $tempFile = $_FILES['file']['tmp_name'];          //3             
      
    $targetPath = $path . $ds. 'assets/images' . $ds . $storeFolder . $ds;  //4
     
    $targetFile =  $targetPath. $_FILES['file']['name'];  //5
 
    if(move_uploaded_file($tempFile,$targetFile)) {
    	echo json_encode($response_array); //6
	}
     
}