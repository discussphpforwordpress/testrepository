<?php
/**
 * Team template.
 *
 * @package The7
 * @since 1.0.0
 */

/* Template Name: 团队 */

// File Security Check
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$config = presscore_config();
$config->set( 'template', 'team' );

// add content area
add_action( 'presscore_before_main_container', 'presscore_page_content_controller', 15 );

get_header();

	if ( presscore_is_content_visible() ): ?>

			<!-- Content -->
			<div id="content" class="content" role="main">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); // main loop

					do_action( 'presscore_before_loop' );

					if ( post_password_required() ) {
						the_content();
					} else {
						// fullwidth wrap open
						if ( $config->get( 'full_width' ) ) { echo '<div class="full-width-wrap">'; }

						$container_classes = array( 'wf-container' );
						if ( get_post_meta( get_the_ID(), '_dt_team_options_round_images', true ) ) {
							$container_classes[] = 'round-images';
						}

						// masonry container open
						echo '<div ' . presscore_masonry_container_class( $container_classes ) . presscore_masonry_container_data_atts() . '>';

							$page_query = presscore_get_filtered_posts( array( 'post_type' => 'dt_team', 'taxonomy' => 'dt_team_category' ) );
							if ( $page_query->have_posts() ): while( $page_query->have_posts() ): $page_query->the_post();

								// populate config
								presscore_populate_team_config();

								presscore_get_template_part( 'mod_team', 'team-post' );

							endwhile; wp_reset_postdata(); endif;

						// masonry container close
						echo '</div>';

						// fullwidth wrap close
						if ( $config->get( 'full_width' ) ) { echo '</div>'; }

						dt_paginator( $page_query );
					}

					do_action( 'presscore_after_loop' );

					presscore_display_share_buttons_for_post( 'page' );

				endwhile; endif; // main loop
				?>

			</div><!-- #content -->

			<?php
			do_action('presscore_after_content');

	endif; // if content visible

get_footer(); ?>