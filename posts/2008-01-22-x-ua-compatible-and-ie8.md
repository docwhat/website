---
id: '85'
title: 'X-UA-Compatible and IE8'
date: '2008-01-22T13:18:02+00:00'
template: post
slug: '/x-ua-compatible-and-ie8/'
title_tag:
    - 'X-UA-Compatible and IE8: Extending the MS monopoly'
tags:
    - browsers
    - standards
    - WebDev
---

There is a new META header being proposed called `X-UA-Compatible`. It was
[thought up](http://www.alistapart.com/articles/beyonddoctype) by Aaron
Gustafson and has been
[added to](http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx)
IE8.

This is a flag for browsers to change how they render the web page, not by
standards that are being followed, but by the browser that it is known to work
with.

The header looks like this:

```html
<meta http-equiv="X-UA-Compatible" content="IE=8;FF=3;OtherUA=4" />
```

If a browser is newer that the version shown to be compatible, then the
browser should pretend to be the older version.

This was thought up specifically to target the problem caused by all the web
sites designed for IE6 which broke when IE7 came out. These sites broke
because they worked around the fact that IE6 didn't support standards and they
didn't try to detect the version of IE but just assumed IE would be broken
forever. Not an unreasonable assumption since IE7 took over 5 years to come
out which is pretty much forever in computer terms.

The idea is that, as a web developer, if you want the new IE8 behavior, you
will _opt-in_ by adding this header.

What this is really doing is pushing the problem around some but not actually
fixing it.

The situation we have now has the following costs and benefits:

-   Cross-browser web pages can be written in theory, but tweaks may need to
    be applied to force broken browser to degrade correctly (a small cost).
-   Badly designed web pages will be broken in some newer browsers and will
    need to be fixed (a distributed cost among web-site designers).
-   Users will see that some pages are broken in newer browsers and that may
    slow up adoption of newer browsers.
-   Users can usually use any browser they want and switch without incurring
    too much cost.

The situation in this new world looks like:

-   Cross-browser web pages can be written in theory, tweaks will need to be
    applied (similar cost as above).
-   Newer pages will probably be less concerned about making it work with all
    browsers, since it says which ones it is compatible with.
-   Browser vendors will have to maintain large and more complicated code to
    make it "work like older versions" (increases costs for all browsers, but
    Microsoft can eat this cost with pocket change).
-   Users will notice that web pages work better in one browser over another
    because websites are compatible.
-   Switching browsers will be much more dramatic than now.

All in all, I think this is a huge step backwards.

It's going back to the days of "this website is designed for IE4".

In addition, think of all the security aspects. As the browsers get newer and
better, they add security fixes. Should the website marked compatible with IE5
cause IE to open all the security holes in IE5?

So what happens if you visit a web page marked compatible with IE8 but include
JavaScript compatible with IE6? Do you get all the features and bugs of JS in
IE6? Or IE8?

How about IE5 Mac vs. IE5 windows? I don't see that specified on the
compatible list.

Who gets to come up with the abbreviation for the browsers? If I design a
browser named Intrawebs Examiner, do I get the IE name too?

What is this fixing? IE7 is out the door. If a browser company waits 5 years
before fixing the problems in their browser, then they get what the deserve.

The only sites that should be broken are ones using browser sniffing
techniques. That should be fixed by simply making the IE8 version something
more standards like `MSExplorer/8.0` (instead of the current `Mozilla/5.0` tag
used).

Of course, the other fun bit is that this pushing fixing the problem onto the
user of the browser. "Oh? It's not compatible with FF3? I gotta switch to
IE8..."

Here are some links:

-   [Beyond DOCTYPE](http://www.alistapart.com/articles/beyonddoctype): The "A
    List Apart" article that started this.
-   [From Switches to Targets](http://www.alistapart.com/articles/fromswitchestotargets):
    Eric Meyer's reply to "Beyond DOCTYPE".
-   [IEBlog; Compatibility and IE8](http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx):
    The IE's side.
-   [Version Information](http://lists.w3.org/Archives/Public/public-html/2007Apr/0279.html):
    a description how requiring version information making the cost to
    entering the browser market higher.
-   [&lt;META HTTP-EQUIV="X-BALL-CHAIN"&gt;](http://weblogs.mozillazine.org/roc/archives/2008/01/post_2.html):
    A less ranty description of some of the problems with this idea.
-   [The versioning switch is not a browser detect](http://www.quirksmode.org/blog/archives/2008/01/the_versioning.html)
-   [Broken](http://adactio.com/journal/1402/): Jeremy Keith explains "Unless
    you explicitly declare that you want IE8 to behave as IE8, it will behave
    as IE7."
-   [Suggestions for Chris Wilson](http://my.opera.com/hallvors/blog/2008/01/23/suggestions-for-chris-wilson)
-   -   [Meta Maddess](http://ejohn.org/blog/meta-madness/)

Ciao!
