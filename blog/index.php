<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/head.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/header.php';
?>
<div class="no-gutter row"></div>
			<div class="container">
				<div class="your-class">
					<?php // Gets our files.
						$directory = $_SERVER['DOCUMENT_ROOT'] . '/blog';
						$scanned_directory = array_diff(scandir($directory), array('..', '.', 'index.php'));
						$files = array();
						foreach($scanned_directory as $file) { 
							$files[] = $file; 
						} 
						echo json_encode($files);
					?>
			</div>
<?php 
    require_once $_SERVER['DOCUMENT_ROOT'] . '/layouts/foot.php';
?>