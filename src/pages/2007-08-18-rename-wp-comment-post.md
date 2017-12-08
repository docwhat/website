---
id: 64
title: WordPress anti-spam recipe
date: 2007-08-18T16:30:06+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2007/08/rename-wp-comment-post/
slug: /rename-wp-comment-post/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - Apache
  - howto
  - spam
  - tip
  - Wordpress
---
Here's a simple recipe to cut down on comment spam in [WordPress](http://wordpress.org/). I assume you have basic understanding of Unix commands or can translate them to windows.

1.  Make a directory in the root of your WordPress file system called `post`.
2.  Create a file in the directory called `index.php` with the following contents:

    ``` php
    < ?php
    include("../wp-comments-post.php");
    ?>
    ```

3.  Modify the form `comments.php` in your theme to point to `/post/` instead of `/wp-comments-post.php`
4.  Add the following [RewriteRule](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html#rewriterule) to your ".htaccess" files to block "wp-comments-post.php":

    ``` apache
    RewriteRule ^/wp-comments-post.php - [F,L]
    ```

Is this a perfect solution? No, it isn't; spammers will work around it, using scripts that read your blog posts first to get the correct page to post to. But it does slow down a spammer. To a spammer, time is money, so a mass-spammer will be less likely use it. For an unpopular blog like my own, it isn't worth it for a spammer to work around this problem (or even notice it is a problem). However, if you own a super popular blog, this won't add much protection because the reward to the spammer is high enough that the extra cost is worthwhile.

I hope this helps you. :-)

BTW: If you use the [Permalink-Redirect](http://fucoder.com/code/permalink-redirect/) plugin, then you can change that `RewriteRule` to:

``` apache
RewriteRule ^/(wp-comments-post|wp-trackback).php - [F,L]
```

Why? Because nobody parsing your HTML will ever get a link to `/wp-trackback.php`!

Ciao!
