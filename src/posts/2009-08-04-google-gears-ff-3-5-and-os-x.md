---
id: "426"
title: Google Gears, FF 3.5, and OS-X
date: 2009-08-04T19:11:06+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=426
slug: /google-gears-ff-3-5-and-os-x/
categories:
  - docwhat
tags:
  - Firefox
  - Google Gears
  - OS X
---

If you have OS-X and you installed Firefox 3.5 and discovered that Google Gears
isn't working for you, then this post is for you.

Apparently, Firefox 3.5 will suck in the Safari plugins and try to use them.
This includes the Gears for Safari plugin which breaks sites with gears support.
:-/

You can tell if you have a problem by going to
<a href="http://gears.google.com/">http://gears.google.com/</a> and seeing if
there is a big blue box on the right-hand side.  It should say something like:
"Download Gears" or "Gears is installed".

If you don't see anything on the right-hand side then you need this fix:

<ol>
	<li>In the menu bar, click on Tools</li>
	<li>Select Add-ons</li>
	<li>Click on the Plugins tab</li>
	<li>Disable the plugin called "Gears". It should have a subtitle of "Gears for Safari".</li>
</ol>

You should now be able to go to
<a href="http://gears.google.com/">http://gears.google.com/</a> and see the blue
box with an install link.

Ciao!
