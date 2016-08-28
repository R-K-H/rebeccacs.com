<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
?>
<div class="no-gutter row"></div>
	<div class="container">
			<?php // Gets our files.
				$directory = $_SERVER['DOCUMENT_ROOT'] . '/blog';
				$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php'));
				$files = array();
				foreach($scanned_directory as $file) { 
					echo '<a href="'.$file.'">'.$file.'</a>'; 
				}
			?>
	</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>