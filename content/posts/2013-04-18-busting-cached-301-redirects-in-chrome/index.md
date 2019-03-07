---
author: docwhat
date: '2013-04-18T17:31:50-04:00'
id: '1274'
image: '/files/2013/04/geeklatte-chrome-yukop-250x250.png'
slug: '/busting-cached-301-redirects-in-chrome/'
tags:
    - '301'
    - 'Google Chrome'
template: post
title: 'Busting cached 301 redirects in Chrome.'
---

The [Chrome browser](http://www.google.com/chrome/) caches
[HTTP 301](http://en.wikipedia.org/wiki/HTTP_301) permanent redirects very
aggressively. This is normally a good thing, unless you're the one setting up
the 301 and you make a mistake...

There is no obvious place in chrome to refresh that cache, but there is a
nifty trick.

Go to the URL:

    view-source:http://cached-url/

This causes Chrome to recheck the page and will update any cached 301 rules.

Ciao!

Additional Links:

-   [Stack Overflow: How can I make Chrome stop caching redirects?](http://superuser.com/questions/304589/how-can-i-make-chrome-stop-caching-redirects)
