---
id: "589"
title: Thematic featured images
date: 2010-08-31T17:00:07-04:00
template: post
slug: /thematic-featured-images/
image: /files/2010/08/Screen-shot-2010-08-31-at-1.29.20-AM-250x250.png
tags:
  - CSS
  - Wordpress
---

I was wondering what the "Featured Images" box was when creating new posts and
discovered that it's a handy way to add images to a post. It auto resizes,
crops (if you want), and can make it just "work" in your layout. The only
drawback I've seen is I can't use urls for the image.

Unfortunately, the [Thematic](http://themeshaper.com/thematic/ 'Thematic')
theme doesn't have out-of-the-box support for it.

Fortunately, [Thematic](http://themeshaper.com/thematic/ 'Thematic') is very
customizable so this is pretty easy.

The gist of what I'm doing is turning on this feature in
[Wordpress](http://wordpress.org 'WordPress'), telling it the default size,
and then adding the image to beginning of my post.  I added some left-right
alternating alignment based on the number of the post.  Not perfect if you
create lots of drafts, but better than just having the images always on the
same side.

Here's what you need to add to your Thematic child theme's `function.php`:

```php
// Add Thumbnail Support for Theme (introduced in 2.9)
if ( function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size(250, 250);
}

// Add post thumbnail to post excerpt
function my_add_post_thumb($content) {
  if (has_post_thumbnail()) {
    global $id;
    //$id = get_post_thumbnail_id();
    $align = $id % 2 == 0 ? 'left' : 'right';
    return get_the_post_thumbnail(NULL, array(250,250), array('class' => ' wp-post-image-' . $align)) . $content;
  } else {
    return $content;
  }
}
// Add it to the excerpt on the home page.
add_filter('get_the_excerpt', 'my_add_post_thumb');
// Add it to the content for a single post.
add_filter('the_content',     'my_add_post_thumb');
```

And here's the styling you need to add for the left/right images:

```css
body .wp-post-image,
body .wp-post-image-left {
    float: left;
    margin: 5px 20px 20px 0;
}
body img.wp-post-image-right {
    float: right;
    margin: 5px 0 20px 20px;
}
```

Ciao!

### Update

It looks like Thematic now has support for featured images, but I like mine
better. Ideally I would integrate with their support some how, but I'm too
lazy at the moment.

Add this to your `function.php`:

```php
// Turn off Thematic's thumb support:
function childtheme_post_thumbs($bool) {
  return FALSE;
}
add_filter('thematic_post_thumbs', 'childtheme_post_thumbs');
```

And change the CSS to look like this to override the
`.entry-content .wp-post-image` rules:

```css
/*** wp-post-image ***/
body .entry-content .wp-post-image,
body .entry-content .wp-post-image-left {
    float: left;
    margin: 5px 20px 20px 0;
    border: none;
    padding: 0;
}
html body .entry-content .wp-post-image-right {
    float: right;
    margin: 5px 0 20px 20px;
}
```
