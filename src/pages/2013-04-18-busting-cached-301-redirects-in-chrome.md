---
id: 1274
title: Busting cached 301 redirects in Chrome.
date: 2013-04-18T17:31:50-04:00
author: docwhat
template: post
guid: https://docwhat.org/?p=1274
slug: /busting-cached-301-redirects-in-chrome/
openid_comments:
  - 'a:1:{i:0;i:13763;}'
image: /files/2013/04/geeklatte-chrome-yukop-250x250.png
categories:
  - docwhat
tags:
  - "301"
  - Google Chrome
---
<p>The <a href="http://www.google.com/chrome/">Chrome browser</a> caches <a href="http://en.wikipedia.org/wiki/HTTP_301">HTTP 301</a> permanent redirects very aggressively.  This is normally a good thing, unless you're the one setting up the 301 and you make a mistake...</p>

<p>There is no obvious place in chrome to refresh that cache, but there is a nifty trick.</p>

<p>Go to the URL:</p>

<pre><code>view-source:http://cached-url/
</code></pre>

<p>This causes Chrome to recheck the page and will update any cached 301 rules.</p>

<p>Ciao!</p>

<p>Additional Links:</p>

<ul>
<li><a href="http://superuser.com/questions/304589/how-can-i-make-chrome-stop-caching-redirects">Stack Overflow: How can I make Chrome stop caching redirects?</a></li>
</ul>
