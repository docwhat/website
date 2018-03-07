---
id: 68
title: Mashups and JavaScript Security
date: 2007-09-28T15:28:03+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2007/09/mashups-and-javascript-security/
slug: /mashups-and-javascript-security/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - Douglas Crockford
  - JavaScript
  - json
  - lecture
  - security
  - vat
---
I found this <a href="http://video.google.com/videoplay?docid=452089494323007214&q=user%3A%22Google+engEDU%22&total=333&start=0&num=10&so=1&type=search&plindex=5">excellent video</a> of <a href="http://crockford.com/">Douglas Crockford</a> (discoverer of <a href="http://json.org/" rel="tag">JSON</a>) talking about the security problems inherent in <a href="http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29" rel="tag">Mashups</a> and of JavaScript as a whole.

He proposes a solution involving what he calls <em>vats</em>; a self contained JavaScript interpreter with limited communication to the page.  The JavaScript in the page would be the only trusted code running and the code in the various vats would not be trusted.

He mentioned there should be an interface such that the user would be prompted with intelligent (and decidable) questions, such as "Do you want to give web site X $5.00 from your pay-pal account?" or "Select the contacts you want to give FaceBook from your GMail account."

He specifically mentions that <a href="http://gears.google.com/">Google Gears</a> has a vat in it already and that they should expand on it to give this extra abilities.  Which I'm sure is true, even if the lecture was at Google's campus.

The other thing he mentions is using <a href="http://json.org/JSONRequest.html">JSONRequest</a> as the channel to talk to the vats and the servers.  I think JSONRequest would be a vast improvement over <a href="http://en.wikipedia.org/wiki/Xmlhttprequest" rel="tag">XMLHttpRequest</a>, myself.

<p style="text-align: center"><embed style="width:400px; height:326px;" id="VideoPlayback" type="application/x-shockwave-flash" src="http://video.google.com/googleplayer.swf?docId=452089494323007214&hl=en" flashvars=""> </embed></p>

<p class="attributed">via: <a href="http://ajaxian.com/archives/gears-and-the-mashup-problem">Ajaxian</a></p>

Ciao!
