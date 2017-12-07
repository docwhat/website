---
id: 33
title: Making JavaScript transparent
date: 2006-11-19T16:17:45+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2006/11/href-friendly-popups/
permalink: /href-friendly-popups/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - JavaScript
  - onclick
  - popup
  - tip
  - trick
---
A disclaimer:  I'm writing this just to share (and record for myself) this one stupid trick in JavaScript.  While I'm here, I thought I should [kvetch](http://en.wiktionary.org/wiki/kvetch) about most JavaScript usage.

First, the stupid trick.

Have you ever been on a page and you try to control-click or right-click on a link only to discover that the link is something stupid? Such as:

```
javascript:window.open(‘http://someurl/’);
```

<!--more-->The underlying HTML for this looks like so:

``` html
You should click on this:
<a href="javascript: window.open(’http://someurl/’); ">link</a>
```

What this is is a popup link. When you click on it and it'll pop up a
new window. It isn't a real URL. It can't be opened in a new tab. It
cannot be bookmarked. It cannot be saved. It doesn't work if JavaScript
is disabled or has a bug in it.

The solution is one of these things that should be obvious once it's
explained. Instead of making the `href` useless by filling it with the
`javascript:` junk, you use a real URL. And then use the `onclick`
attribute to fetch the `href` and open it in a new window.

Example:

``` html
You should click on this:
<a href="http://someurl/"
      onclick="try{window.open(this.href,’_blank’);
               event.returnValue = false;
               return false;}
               catch(e){event.returnValue = true; return true;}">link</a>
```

This will work even with JavaScript disabled. It'll work even if I made
a mistake in the JavaScript. The `event.returnValue = boolean` and
`return boolean` parts are important. If you return `false` then the
browser will assume that the `onclick` event isn't handled and won't
continue. If you return `true` or don't use return, then the browser
assumes that you didn't handle the `onclick` event and then do the
normal thing (open the link). And IE 7 needs the `event.returnValue` and
won't hurt any other browser.

Now, onto the kvetch.

Notice that this isn't much harder.  Notice how this is easier to validate.  Notice how it delivers to the user the expected behavior.

Why isn't this done more often.  I hate it when I visit some site, hover over the link to see the URL and get JavaScript junk instead.

This requires more work when you have a complicated URL to generate, but with the ability to change the DOM tree directly there is no excuse.

Keeping everything working the way your user expects it to work is an important principle in user interface design and engineering.  Ignore it at your peril.

### UPDATED 2006-1-12
Okay, for those keeping score, [IE 7](http://en.wikipedia.org/wiki/Internet_Explorer#Criticism) continues the tradition of [sucking](http://www.quirksmode.org/bugreports/archives/explorer_7/index.html).

I can add another bug to IE 7's growing list.  I tried to make a simple test case. But when I make it simple it starts working correctly.  Bah.  I don't have enough patience or desire to do this much work -- for free -- for a company with as many employees and dollars as Microsoft -- for a browser I don't own and only use to find and fix bugs like this.

Basically, under certain circumstances, onclick's return value is ignored. In this case, we had an `A` tag that used the trick mentioned above.  So that meant the popup url would appear in both the parent window and the popup window.

The work around?  Set `event.returnValue` right before returning. Bleh.  The code has been updated.

EDITED — Related links:

* This is apparently a [FAQ](http://jibbering.com/faq/#FAQ4_24) in comp.lang.javascript
*   [JustAddWater: Open New Window Still Has Usability Issues](http://justaddwater.dk/2007/06/13/open-new-window-still-has-usability-issues/)
