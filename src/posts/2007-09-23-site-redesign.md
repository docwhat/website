---
id: 65
title: Site Redesign
date: 2007-09-23T21:36:44+00:00
template: post
slug: /site-redesign/
tags:
  - design
  - Wordpress
---

I have redesigned my whole site. While a lot changes are visual, there are even
more changes in the way the unseen back-end parts have changed.

Previously, I had a modified copy of the default WP 2.x theme (which is based on
Kubric theme). It was reasonable markup, but I spent a lot of time modifying the
classes and adding containers to hang my CSS off of. In addition, tracking the
changes to the default theme was a pain.<!-- more -->

As I read through [CSS Mastery](https://amzn.to/2I3YKXd) I realized that there
were significantly better ways to do the markup that would allow even more
powerful CSS.

About the same time I discovered the
[Sandbox Theme](http://www.plaintxt.org/themes/sandbox/). This had a lot of the
same kind of design ideas as CSS Mastery; the body element was given tags based
on what page it is and everything had classes that help the CSS know where it is
being applied.

I looked through some of the themes and borrowed ideas liberally. Most of the
layout is from [Will Wilkens](http://iamww.com/)'s
[Moo Point](http://iamww.com/wordpress-theme-moo-point) style sheets for Sandbox
but I also looked through a lot of the
[Sandbox Content winners](http://www.sndbx.org/2007/08/07/and-the-winners-are/).

Even though Sandbox itself has excellent markup, there were still things that I
wanted to customize and Sandbox doesn't have any markup customization available
to it. So I wrote a simple tool to do
[insert and replace](http://hg.gerf.org/docwhat.web/file/theme/bin/insert) and
used that to make changes to Sandbox.

I also wrote a bunch of makefiles, in the style of
"[Recursive Make Considered Harmful](http://miller.emu.id.au/pmiller/books/rmch/)"
and its
[implementation notes](http://www.xs4all.nl/~evbergen/nonrecursive-make.html).
You can view them in my ~~Mercurial Repository~~.

Some of the advantages of the back-end build system I put together:

- It builds everything into a build directory before installing it live.
- The JavaScript is linted and compile checked before going live.
- The CSS is linted and checked for some errors.
- JavaScript and CSS are concatenated into one file each and compressed with
  [YUI Compressor](http://www.julienlecomte.net/blog/2007/08/13/introducing-the-yui-compressor/)
- The Sandbox files are tweaked to overcome issues that they
  [won't](http://code.google.com/p/sandbox-theme/issues/detail?id=40)
  [fix](http://code.google.com/p/sandbox-theme/issues/detail?id=41) or things
  that that I just want different, personally. Such as my serving the
  content-type as XHTML for those browsers that handle it.
- Any problems in the patching and changes will cause the build to fail, which
  prevents a class of brokenness from ever being made live.
- When I'm debugging, files are not compressed and local
  [YUI](http://developer.yahoo.com/yui/) files are used instead of
  [Yahoo Hosted](http://developer.yahoo.com/yui/articles/hosting/) versions.

The other reason I made these changes is I wanted my site to be ready for the
changes coming up in [Wordpress 2.3](http://codex.wordpress.org/Version_2.3) due
out tomorrow.

Of course, I like hacking around with my site too; I'm sure that was part of the
motivation as well.

Ciao!
