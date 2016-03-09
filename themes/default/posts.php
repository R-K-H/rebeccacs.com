<?php theme_include('header'); ?>
<section class="content post" style="padding: 3em 0;">
	<?php if(has_posts()): ?>
			<?php posts(); ?>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <header class="header post-header" style="margin: 6em 0 0 0;">
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
  				<div class="col-md-4 col-sm-4 col-xs-4">
  					<div class="content">
  						<?php preg_match_all('/<img[^>]+>/i',article_markdown(), $result); ?>
              <?php print_r($result[0][0]);?>
  					</div>
          </div>
          <div class="col-md-12 clearfix" style="min-height:40px;"></div>
			<?php $i = 0; while(posts()): ?>
      <?php if($i == 0):?>
				
        <div class="col-md-6 col-md-offset-3">
          <?php preg_match_all('/<img[^>]+>/i',article_markdown(), $result); ?>
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
              <div class="content">
              <?php print_r($result[0][0]);?>
            </div>
              <div class="read-more">
                <a class="read-more-btn white-btn" href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>">continue reading</a>
              </div>
            </header>

            </div>
            <div class="col-md-12 clearfix" style="min-height:40px;"></div>
      <?php else:?>

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
            <div class="col-md-12 clearfix" style="min-height:40px;"></div>
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
