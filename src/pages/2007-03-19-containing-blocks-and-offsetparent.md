---
id: 39
title: 'Containing blocks and offsetParent: the secret of position absolute'
date: 2007-03-19T08:00:40+00:00
author: docwhat
template: post
guid: http://docwhat.org/2007/03/containing-blocks-and-offsetparent/
slug: /containing-blocks-and-offsetparent/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - CSS
  - JavaScript
  - tips
---
Ever used `position: absolute` in CSS or JavaScript? You probably got it to work reliably. I have in the past. These were pages that I controlled in their entirety and it worked fine.

But when I tried to use it with [It's All Text!](https://addons.mozilla.org/firefox/4125) for the gumdrop edit button which in injected into any web page that has a textarea, I kept having problems. It was driving me batty. I found something that worked on my simplistic test cases, but it wouldn't work on gmail. I got it to work on [gmail](http://gmail.com/), but it stopped working on [trac](http://trac.edgewall.org/) installations, or [Wikipedia](http://wikipedia.com). Or if I got it to work on one of those, it'd fail to work on my simplistic test cases.

<!-- more -->

So I did what any sane developer would do after the umpteenth attempt to fix the same problem.

> Yes, yes, I'm a master of comedy, now tell me this plan! — Invader Zim

I read the documentation.

Okay, you can stop laughing now.

Yes, yes, I'm a master of comedy...

I went to the [obvious place](http://www.w3.org/) and read [section 9.3.1](http://www.w3.org/TR/CSS21/visuren.html#positioning-scheme) of the [CSS 2.1](http://www.w3.org/TR/CSS21/) spec where it explains `position: absolute`. There it references [9.1.2 Containing blocks](http://www.w3.org/TR/CSS21/visuren.html#containing-block) which bounces us over to [10.1 Definition of "containing block"](http://www.w3.org/TR/CSS21/visudet.html#containing-block-details)... Good thing this isn't a book, I'd have worn out all the pages with the flipping back and forth.

So, [section 10.1](http://www.w3.org/TR/CSS21/visudet.html#containing-block-details) was what I wanted. True, this was written in the techie-slash-committee speak that the [W3](http://www.w3.org/) loves so much, but here was the answer. Mostly.

Except how do I find this out programmatically. What's the DOM way of doing this? I mean, this totally explains the problem I had; the containing block was different depending on how the page was created. When the initial containing block happened to be the current containing block, all was well. However, when the edit button's containing block wasn't the same as the textarea's containing block nor the initial containing block then things didn't work so well.

So I searched around for containing block and JavaScript and I discovered that `offsetParent` was the magic. Pulling out [Firebug](http://www.getfirebug.com/) I checked around and lo-and-behold, it seemed that when I injected my gumdrop on most pages, it had an `offsetParent` of the page body! What do you know.

A couple small changes, a little tweaking and life became good.

Yay!

Now I just need [Addons](http://addons.mozilla.org/) to finish their [Upgrade](http://blog.mozilla.com/webdev/category/amo/).

I did discover some bad news though. Apparently the `offsetParent` is what is called DOM 0. It is *not* in the official DOM spec. So it does something similar, yet different in IE. Auuugh! At least [It's All Text!](htt://addons.mozilla.org/firefox/4125) works now.

Ciao!
