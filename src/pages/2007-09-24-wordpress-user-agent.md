---
id: 66
title: Wordpress User-Agent
date: 2007-09-24T01:30:25+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2007/09/wordpress-user-agent/
slug: /wordpress-user-agent/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - hack
  - open source
  - Privacy
  - security
  - Wordpress
---
Well, I just got a nasty shock!

I got in at the tail end of <a href="http://comox.textdrive.com/pipermail/wp-hackers/2007-September/014885.html"> a thread</a> about the new update notification feature in <a href="http://wordpress.org">WordPress</a> 2.3.

One of the comments I read kept ricocheting around in my head.  Matt Mullenweg said <a href="http://comox.textdrive.com/pipermail/wp-hackers/2007-September/014856.html">something</a> about the dashboard RSS feeds transmitting my blog URL.  I thought, initially, that he meant the IP address was revealed. But the more I thought about it, the weirder it seemed.

So I started looking through the source and discovered that every service that made an HTTP request had it's own version of <a href="http://en.wikipedia.org/wiki/User_agent">User-Agent</a> with, at minimum, the version number and usually the blog URL!

I understand security well enough to know that this won't suddenly give a hacker the an ability to hack my system.  However, what it does to is give out more information I give <em>anywhere else in my site</em>.

In addition, if I was a hacker and wanted to crack a large number of blogs, then ping-o-matic or some other place that gets this information regularly would be my first target.  I'd then have a reliable list of blogs, with version numbers, that I could launch attacks on.  It's even better than using searches!

And there is no reason to give this data away, at all.

I have submitted a <a href="http://trac.wordpress.org/ticket/5065">bug</a> asking for a single function to generate the user-agent strings.  In addition to improving the code, this would allow for easy overriding in a plugin or something similar.

Meanwhile, I'll probably hack these up in my copy of Wordpress.

I have to admit, I'm disappointed.

Ciao!

UPDATE 2007-09-25: A couple of articles: <a href="http://wank.wordpress.com/2007/09/24/wp-phone-home/">wank.wordpress.com</a> &amp; <a href="http://yro.slashdot.org/article.pl?sid=07/09/25/1632246">Slashdot</a>

UPDATE 2007-09-27: I submitted bugs and patches (<a href="http://trac.wordpress.org/ticket/5065">#5065</a> and <a href="http://trac.wordpress.org/ticket/5085">5085</a>).  There is also a bug about adding an option to the privacy page (<a href="http://trac.wordpress.org/ticket/5066">5066</a>). Isn't <a rel="tag" href="http://en.wikipedia.org/wiki/Open_source">open source</a> wonderful?