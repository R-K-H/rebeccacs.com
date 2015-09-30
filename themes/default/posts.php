<?php theme_include('header'); ?>
<div id="main" class="site-main col-md-12" role="main">
				<div id="single">
					<div class="content">
							<div class="container">
								<div class="inner">
									<div class="col-md-4">
										<img src="assets/images/work-hair.jpg" />
									</div>
									<div class="col-md-8">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus mi, elementum sit amet lacus et, maximus sollicitudin lectus. Morbi ultricies quis libero quis lobortis. Curabitur euismod urna nisl, vitae scelerisque nunc egestas sed. Suspendisse sagittis metus vitae arcu lacinia, at facilisis tortor placerat. Nam faucibus tristique lectus, vitae consectetur velit sagittis dapibus. Donec ut nulla auctor, mattis tortor vel, rutrum tellus. Suspendisse quis odio urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id pulvinar diam. Sed id ornare nunc, at euismod justo. Donec consectetur consectetur est non tincidunt. Nulla molestie ultrices nisl, eu semper nisi tempor nec. Cras accumsan sapien libero. Suspendisse neque urna, mollis et vulputate non, tristique eleifend leo. Duis ullamcorper ac arcu ac molestie.</p>
								</div>
							</div>
					</div>
				</div>
			</div>
<section class="content">

	<?php if(has_posts()): ?>
		<ul class="items">
			<?php posts(); ?>
			<li>
				<article class="wrap">
					<h1>
						<a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>"><?php echo article_title(); ?></a>
					</h1>

					<div class="content">
						<?php echo article_markdown(); ?>
					</div>

					<footer>
						Posted by <?php echo article_author('real_name'); ?>.
					</footer>
				</article>
			</li>
			<?php $i = 0; while(posts()): ?>
			<?php $bg = sprintf('background: hsl(215, 28%%, %d%%);', round(((++$i / posts_per_page()) * 20) + 20)); ?>
			<li style="<?php echo $bg; ?>">
				<article class="wrap">
					<h2>
						<a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>"><?php echo article_title(); ?></a>
					</h2>
				</article>
			</li>
			<?php endwhile; ?>
		</ul>

		<?php if(has_pagination()): ?>
		<nav class="pagination">
			<div class="wrap">
				<div class="previous">
					<?php echo posts_prev(); ?>
				</div>
				<div class="next">
					<?php echo posts_next(); ?>
				</div>
			</div>
		</nav>
		<?php endif; ?>

	<?php else: ?>
		<div class="wrap">
			<h1>No posts yet!</h1>
			<p>Looks like you have some writing to do!</p>
		</div>
	<?php endif; ?>

</section>

<?php theme_include('footer'); ?>
