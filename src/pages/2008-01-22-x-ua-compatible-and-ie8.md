---
id: 85
title: X-UA-Compatible and IE8
date: 2008-01-22T13:18:02+00:00
author: docwhat
template: post
guid: http://docwhat.gerf.org/2008/01/x-ua-compatible-and-ie8/
slug: /x-ua-compatible-and-ie8/
title_tag:
  - 'X-UA-Compatible and IE8: Extending the MS monopoly'
categories:
  - docwhat
tags:
  - browsers
  - standards
  - WebDev
---
There is a new META header being proposed called <code>X-UA-Compatible</code>.  It was <a href="http://www.alistapart.com/articles/beyonddoctype">thought up</a> by Aaron Gustafson and has been <a href="http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx">added to</a> IE8.

This is a flag for browsers to change how they render the web page, not by standards that are being followed, but by the browser that it is known to work with.

The header looks like this:
<pre>&lt;meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4" /&gt;</pre>

If a browser is newer that the version shown to be compatible, then the browser should pretend to be the older version.<!-- more -->

This was thought up specifically to target the problem caused by all the web sites designed for IE6 which broke when IE7 came out.  These sites broke because they worked around the fact that IE6 didn't support standards and they didn't try to detect the version of IE but just assumed IE would be broken forever.  Not an unreasonable assumption since IE7 took over 5 years to come out which is pretty much forever in computer terms.

The idea is that, as a web developer, if you want the new IE8 behavior, you will <em>opt-in</em> by adding this header.

What this is really doing is pushing the problem around some but not actually fixing it.

The situation we have now has the following costs and benefits:
<ul>
  <li>Cross-browser web pages can be written in theory, but tweaks may need to be applied to force broken browser to degrade correctly (a small cost).</li>
  <li>Badly designed web pages will be broken in some newer browsers and will need to be fixed (a distributed cost among web-site designers).</li>
  <li>Users will see that some pages are broken in newer browsers and that may slow up adoption of newer browsers.</li>
  <li>Users can usually use any browser they want and switch without incurring too much cost.</li>
</ul>

The situation in this new world looks like:
<ul>
  <li>Cross-browser web pages can be written in theory, tweeks will need to be applied (similar cost as above).
  </li><li>Newer pages will probably be less concerned about making it work with all browsers, since it says which ones it is compatible with.</li>
  <li>Browser vendors will have to maintain large and more complicated code to make it "work like older versions" (increases costs for all browsers, but Microsoft can eat this cost with pocket change).</li>
  <li>Users will notice that web pages work better in one browser over another because websites are compatible.</li>
  <li>Switching browsers will be much more dramatic than now.</li>
</ul>

All in all, I think this is a huge step backwards.  It's going back to the days of "this website is designed for IE4". 

In addition, think of all the security aspects.  As the browsers get newer and better, they add security fixes.  Should the website marked compatible with IE5 cause IE to open all the security holes in IE5?

So what happens if you visit a web page marked compatible with IE8 but include JavaScript compatible with IE6?  Do you get all the features and bugs of JS in IE6?  Or IE8?

How about IE5 Mac vs. IE5 windows?  I don't see that specified on the compatible list. 

Who gets to come up with the abbreviation for the browsers?  If I design a browser named Intrawebs Examiner, do I get the IE name too?

What is this fixing?  IE7 is out the door.  If a browser company waits 5 years before fixing the problems in their browser, then they get what the deserve.

The only sites that should be broken are ones using browser sniffing techniques.  That should be fixed by simply making the IE8 version something more standards like <code>MSExplorer/8.0</code> (instead of the current <code>Mozilla/5.0</code> tag used).

Of course, the other fun bit is that this pushing fixing the problem onto the user of the browser.  "Oh? It's not compatible with FF3?  I gotta switch to IE8..."

Here are some links:
 <ul>
  <li><a href="http://www.alistapart.com/articles/beyonddoctype">Beyond DOCTYPE</a>: The "A List Apart" article that started this.</li>
  <li><a href="http://www.alistapart.com/articles/fromswitchestotargets">From Switches to Targets</a>: Eric Meyer's reply to "Beyond DOCTYPE".</li>
  <li><a href="http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx">IEBlog; Compatibility and IE8</a>: The IE's side.</li>
  <li><a href="http://lists.w3.org/Archives/Public/public-html/2007Apr/0279.html">Version Information</a>: a description how requiring version information making the cost to entering the browser market higher.</li>
  <li><a href="http://weblogs.mozillazine.org/roc/archives/2008/01/post_2.html">&lt;META HTTP-EQUIV="X-BALL-CHAIN"></a>:  A less ranty description of some of the problems with this idea.</li>
  <li><a href="http://www.quirksmode.org/blog/archives/2008/01/the_versioning.html">The versioning switch is not a browser detect</a></li>
  <li><a href="http://adactio.com/journal/1402/">Broken</a>: Jeremy Keith explains "Unless you explicitly declare that you want IE8 to behave as IE8, it will behave as IE7."</li>
  <li><a href="http://my.opera.com/hallvors/blog/2008/01/23/suggestions-for-chris-wilson">Suggestions for Chris Wilson</a></li><li>
  </li><li><a href="http://ejohn.org/blog/meta-madness/">Meta Maddess</a></li>
</ul>

Ciao!