<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
    
    $directory = $_SERVER['DOCUMENT_ROOT'] . '/blog';
	$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php','.gitignore'));
?>
<div class="no-gutter row"></div>
	<div class="container">
		<ul>
			<?php				
				foreach($scanned_directory as $file) {
					$texthtml = file_get_contents($file);
					preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $texthtml, $image);
					$fileName = str_replace('.html','',$file);
					echo '<li>';
					echo '<a href="'.$file.'"><img style="width:300px;" src="'.$image['src'].'"/><h1>'.$fileName.'</h1></a>';
					echo '</li>';
				}
			?>
		</ul>
	</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>