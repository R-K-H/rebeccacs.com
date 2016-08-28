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
					echo '<li>';
					echo '<a href="'.$file.'">'.$file.'</a>';
					echo '</li>';
				}
			?>
		</ul>
	</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>