---
id: 66
title: Wordpress User-Agent
date: 2007-09-24T01:30:25+00:00
template: post
slug: /wordpress-user-agent/
tags:
  - Wordpress
---

Well, I just got a nasty shock!

I got in at the tail end of
[a thread](http://comox.textdrive.com/pipermail/wp-hackers/2007-September/014885.html)
about the new update notification feature in [WordPress](http://wordpress.org)
2.3.

One of the comments I read kept ricocheting around in my head. Matt Mullenweg
said
[something](http://comox.textdrive.com/pipermail/wp-hackers/2007-September/014856.html)
about the dashboard RSS feeds transmitting my blog URL. I thought, initially,
that he meant the IP address was revealed. But the more I thought about it,
the weirder it seemed.

So I started looking through the source and discovered that every service that
made an HTTP request had it's own version of
[User-Agent](http://en.wikipedia.org/wiki/User_agent) with, at minimum, the
version number and usually the blog URL!

I understand security well enough to know that this won't suddenly give a
hacker the ability to hack my system. However, what it does to is give out
more information I give _anywhere else in my site_.

In addition, if I was a hacker and wanted to crack a large number of blogs,
then ping-o-matic or some other place that gets this information regularly
would be my first target. I'd then have a reliable list of blogs, with version
numbers, that I could launch attacks on. It's even better than using searches!

And there is no reason to give this data away, at all.

I have submitted a [bug](http://trac.wordpress.org/ticket/5065) asking for a
single function to generate the user-agent strings. In addition to improving
the code, this would allow for easy overriding in a plugin or something
similar.

Meanwhile, I'll probably hack these up in my copy of Wordpress.

I have to admit, I'm disappointed.

Ciao!

UPDATE 2007-09-25: A couple of articles:
[wank.wordpress.com](http://wank.wordpress.com/2007/09/24/wp-phone-home/) &
[Slashdot](http://yro.slashdot.org/article.pl?sid=07/09/25/1632246)

UPDATE 2007-09-27: I submitted bugs and patches
([\#5065](http://trac.wordpress.org/ticket/5065) and
[\#5085](http://trac.wordpress.org/ticket/5085)). There is also a bug about
adding an option to the privacy page
([\#5066](http://trac.wordpress.org/ticket/5066)). Isn't
[open source](http://en.wikipedia.org/wiki/Open_source) wonderful?
