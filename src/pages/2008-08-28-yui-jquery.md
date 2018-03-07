---
id: 171
title: 'YUI -> jQuery'
date: 2008-08-28T23:22:20+00:00
author: docwhat
template: post
guid: http://docwhat.gerf.org/?p=171
slug: /yui-jquery/
title_tag:
  - Switched from YUI to jQuery
categories:
  - docwhat
tags:
  - JavaScript
  - WebDev
---
I just switched my (rather limited) JavaScript from <a href="http://developer.yahoo.com/yui">YUI</a> to <a href="http://jquery.com/">jQuery</a>.

jQuery took a little (a couple hours) to learn how to write something close to idiomatic code. My <a href="http://git.gerf.org/?p=docwhat-web.git;a=blob;f=theme/src/js/script.js;h=87ac59f52f0790c531b10dc4860044978d40b86e;hb=bc23da7e2f25c95d41101ff9e811dea81d69b116">new code</a> is much much smaller and easier to read.

Why did I switch away from YUI you might ask?

A couple reasons:
<ol>
	<li>jQuery has a bunch of idiomatic constructs to make what I'm doing here much easier: Example: <code>$('table tbody tr:even').each(function () {$(this).addClass('alt')});</code></li>
	<li>jQuery is smaller.</li>
	<li>I use YUI at work.</li>
	<li>I just wanted to try something new.</li>
</ol>
Ciao!