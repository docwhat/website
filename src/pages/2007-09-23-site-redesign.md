---
id: 65
title: Site Redesign
date: 2007-09-23T21:36:44+00:00
author: docwhat
template: post
guid: http://docwhat.gerf.org/2007/09/site-redesign/
slug: /site-redesign/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - CSS
  - design
  - open source
  - theme
  - Wordpress
  - XHTML
---
I have redesigned my whole site.  While a lot changes are visual, there are even more changes in the way the unseen back-end parts have changed.

Previously, I had a modified copy of the default WP 2.x theme (which is based on Kubric theme).  It was reasonable markup, but I spent a lot of time modifying the  classes and adding containers to hang my CSS off of.  In addition, tracking the changes to the default theme was a pain.

As I read through <a title="CSS Mastery: : Advanced Web Standards Solutions by Andy Budd" href="http://www.amazon.com/gp/redirect.html%3FASIN=1590596145%26tag=thedocwha-20%26lcode=xm2%26cID=2025%26ccmID=165953%26location=/o/ASIN/1590596145%253FSubscriptionId=0EMV44A9A5YT1RVDGZ82">CSS Mastery</a> I realized that there were significantly better ways to do the markup that would allow even more powerul CSS.

About the same time I discovered the <a href="http://www.plaintxt.org/themes/sandbox/">Sandbox Theme</a>.  This had a lot of the same kind of design ideas as CSS Mastery; the body element was given tags based on what page it is and everything had classes that help the CSS know where it is being applied.

I looked through some of the themes and borrowed ideas liberally.  Most of the layout is from <a href="http://iamww.com/">Will Wilkens</a>'s <a href="http://iamww.com/wordpress-theme-moo-point">Moo Point</a> style sheets for Sandbox but I also looked through a lot of the <a href="http://www.sndbx.org/2007/08/07/and-the-winners-are/">Sandbox Content winners</a>.

Even though Sandbox itself has excellent markup, there were still things that I wanted to customize and Sandbox doesn't have any markup customization available to it.  So I wrote a simple tool to do <a href="http://hg.gerf.org/docwhat.web/file/theme/bin/insert">insert and replace</a> and used that to make changes to Sandbox.

I also wrote a bunch of makefiles, in the style of "<a href="http://miller.emu.id.au/pmiller/books/rmch/">Recursive Make Considered Harmful</a>" and its <a href="http://www.xs4all.nl/~evbergen/nonrecursive-make.html">implementation notes</a>.  You can view them in my <a href="http://hg.gerf.org/docwhat.web/file/dc122d29d493/theme/">Mercurial Repository</a>.

Some of the advantages of the back-end build system I put together:
<ul>
	<li>It builds everything into a build directory before installing it live.</li>
	<li>The JavaScript is linted and compile checked before going live.</li>
	<li>The CSS is linted and checked for some errors.</li>
	<li>JavaScript and CSS are concatenated into one file each and compressed with <a href="http://www.julienlecomte.net/blog/2007/08/13/introducing-the-yui-compressor/">YUI Compressor</a></li>
	<li>The Sandbox files are tweaked to overcome issues that they <a href="http://code.google.com/p/sandbox-theme/issues/detail?id=40">won't</a> <a href="http://code.google.com/p/sandbox-theme/issues/detail?id=41">fix</a> or things that that I just want different, personally.  Such as my serving the content-type as XHTML for those browsers that handle it.</li>
	<li>Any problems in the patching and changes will cause the build to fail, which prevents a class of brokenness from ever being made live.</li>
	<li>When I'm debugging, files are not compressed and local <a href="http://developer.yahoo.com/yui/">YUI</a> files are used instead of <a href="http://developer.yahoo.com/yui/articles/hosting/">Yahoo Hosted</a> versions.</li>
</ul>
The other reason I made these changes is I wanted my site to be ready for the changes coming up in <a href="http://codex.wordpress.org/Version_2.3">Wordpress 2.3</a> due out tomorrow.

Of course, I like hacking around with my site too; I'm sure that was part of the motivation as well.

Ciao!