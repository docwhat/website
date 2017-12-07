---
id: 60
title: What language would you like it in?
date: 2007-06-20T20:12:01+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2007/06/what-language-would-you-like-it-in/
permalink: /what-language-would-you-like-it-in/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - "It's All Text!"
  - JavaScript
  - translation
---
<narf>
So I have finally submitted It's All Text! to <a href="http://www.babelzilla.org/">Babelzilla</a>, the mozilla translation site.  It took a little <a href="http://www.babelzilla.org/forum/index.php?showtopic=3269&amp;st=0&amp;p=30125&amp;#entry30125">work</a> to get in, though.  There isn't anything so simple that I cannot break it. :-)

<!--more-->

Their system automagically created a <a href="http://www.babelzilla.org/forum/index.php?showtopic=3270&amp;pid=30126&amp;mode=threaded&amp;start=#entry30126">discussion thread</a> and it'll track changes as I upload them.  They have mixed a lot of technologies to produce something pretty spiffy.  I know how hard it is to mix this stuff and the fact it works well is amazing.

I submitted the translations because I'm just about ready to submit version 1.0, probably in the next month.  I tend to work on IAT in spurts because that's how my attention works.  Of course, if I get an interesting question, that'll get me interested again.

The only changes I'm making right now is the packaging and looking to clean up the memory footprint.

I've changed my build scripts to create .JAR files (like most extensions use) for the chrome.  This saves space on disk when the extension is downloaded.

The memory is one of these things where I think something is a little screwy, but I can't prove it because I don't have the <a href="http://en.wikipedia.org/wiki/Instrumentation_%28computer_programming%29">instrumentation</a> in Firefox to find problems.  I don't think it's a memory leak exactly.  What I think is going on is that I'm some how slowing down the garbage collection or something similar.

Anyway, that'll be an ongoing battle, I suspect.

I wanted to thank everyone who gave feedback, event when it was to point out bad news.  I feel like a character from a Japanese manga wearing his <a href="http://en.wikipedia.org/wiki/Hachimaki">hachimaki</a> shouting, with a determined look on his face, "People are depending on me.  I must do my best!"

Ciao!
</narf>

