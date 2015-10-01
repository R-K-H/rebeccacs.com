<?php theme_include('header'); ?>
<!--<div id="main" class="site-main col-md-12" role="main">
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
			</div>-->
<section class="content post">
	<?php if(has_posts()): ?>
			<?php posts(); ?>
				<article class="wrap">
          <div class="col-md-6">
            <header class="header post-header">
              <div class="category">
                <a href="#"><?php echo article_category();?></a>
              </div>
              <h2 class="title">
                <a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>"><?php echo article_title(); ?></a>
              </h2>
              <div class="meta">
                <span class="date"><?php echo article_date(); ?></span>
                <a class="comments" href="#"><i class="fa fa-comment"></i></a>
              </div>
              <div class="excerpt">
                <p><?php echo article_description(); ?></p>
              </div>
              <div class="read-more">
                <a class="read-more-btn white-btn" href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>">continue reading</a>
              </div>
            </header>
          </div>
  				<div class="col-md-6">
  					<div class="content">
  						<?php preg_match_all('/<img[^>]+>/i',article_markdown(), $result); ?>
              <?php print_r($result[0][0]);?>
  					</div>
          </div>
				</article>
			<?php $i = 0; while(posts()): ?>
      <?php if($i == 0):?>
				<article class="wrap">
        <div class="col-md-6 col-md-offset-3">
          <?php preg_match_all('/<img[^>]+>/i',article_markdown(), $result); ?>
            <?php //if(isset($result[0][0])) print_r($result[0][0]);?>
            <header class="header post-header-1">
              <div class="category">
                <a href="#"><?php echo article_category();?></a>
              </div>
              <h2 class="title">
                <?php echo article_title(); ?>
              </h2>
              <div class="meta">
                <span class="date"><?php echo article_date(); ?></span>
                <a class="comments" href="#"><i class="fa fa-comment"></i></a>
              </div>
              <div class="excerpt">
                <p><?php echo article_description(); ?></p>
              </div>
              <div class="read-more">
                <a class="read-more-btn white-btn" href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>">continue reading</a>
              </div>
            </header>
            </div>
				</article>
      <?php else:?>
        <article class="wrap">
        <div class="col-md-6 col-md-offset-3">
          <?php preg_match_all('/<img[^>]+>/i',article_markdown(), $result); ?>
            <?php if(isset($result[0][0])) print_r($result[0][0]);?>
            <header class="header post-header-1">
              <div class="category">
                <a href="#"><?php echo article_category();?></a>
              </div>
              <h2 class="title">
                <?php echo article_title(); ?>
              </h2>
              <div class="meta">
                <span class="date"><?php echo article_date(); ?></span>
                <a class="comments" href="#"><i class="fa fa-comment"></i></a>
              </div>
              <div class="excerpt">
                <p><?php echo article_description(); ?></p>
              </div>
              <div class="read-more">
                <a class="read-more-btn white-btn" href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>">continue reading</a>
              </div>
            </header>
            </div>
        </article>
      <?php endif;?>
      <?php $i++;?>
			<?php endwhile; ?>
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
