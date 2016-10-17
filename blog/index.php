<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
    
    $directory = $_SERVER['DOCUMENT_ROOT'] . '/blog';
	$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php','.gitignore','backup'));
?>
<div class="no-gutter row"></div>
	<div class="container">
		<ul style="list-style-type:none; display: block; padding:0px;">
			<?php				
				foreach($scanned_directory as $file) {
					$texthtml = file_get_contents($file);
					preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
					if(!empty($image)){
						$fileName = str_replace('.html','',$file);
						echo '<a style="color:#FFF; display: block; margin-bottom:20px; height:400px; padding-bottom:20px;" href="'.$file.'">';
						echo '<li style="display: block; margin-bottom:20px; height:350px; padding-bottom:20px; background: url('.$image['src'].') center center;">';
						echo '</li><h1 style="color:#FFF; margin-top:-110px; padding-left:20px; padding-bottom:20px;">'.ucwords(str_replace("-", " ", $fileName)).'</h1></a>';
					}
				}
			?>
		</ul>
	</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>