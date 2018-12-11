---
id: "726"
title: New Look
date: 2011-06-19T16:15:12-04:00
template: post
slug: /new-look-2/
image: /files/2011/06/Screen-shot-2011-06-19-at-1.09.48-AM.png
tags:
  - css3
  - html5
  - Wordpress
---

Every so often, I get bored with my theme. I notice usability issues, things I
wished I did differently, etc. and I want to play with new technologies like
[HTML5](http://www.html5rocks.com/), [CSS3](http://www.css3.info/).

I had been using [Thematic](http://themeshaper.com/thematic/) which is very
nice. It has good semantic markup as well as other nice features. But it isn't
HTML5 and I wanted HTML5.

I tried several themes just to play around, and then found a theme that
combined [boilerplate](http://aarontgrogg.com/boilerplate/), HTML5,
[compass](http://compass-style.org/reference/compass/) and
[sass](http://sass-lang.com/). Unfortunately, it didn't really do everything I
wanted. I also lost the URL for the GitHub project. _sigh_. But I hadn't seen
compass nor sass before (or if I had, it was only in passing). This was really
cool stuff. I started playing with and deciding I really wanted to use it.

I like my green color and it is a pain to write the color in everyplace. But
compass lets me assign the color to a variable `$hero-color`, and to then
alter it by doing things like `darken($hero-color, 30%)`. It also has a saner
form of nesting so I can
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself) up my CSS.

In addition, compass has mixins so I don't have to repeat `border-radius`
multiple times to support different browsers. As well as grid support via
[blueprint](http://www.blueprintcss.org/) support.

I also took the opportunity to manage my wordpress site via
[Rake](http://rake.rubyforge.org/) and [Capistrano](http://capify.org/).
Normally, I'd blog about how I did it, but capifying my wordpress blog was
harder than I would have hoped. You can view my
[Capfile](http://git.gerf.org/?p=docwhat-web.git;a=blob;f=Capfile;h=ce036449d46a9f7ac6d4c28c12370d09496e43d3;hb=1e0d76b0983e784389a5ab23a89c06284246a46d)
if you want, but you may need a handful of aspirin.

I also made my theme compatible with mobile devices. Previously I used
[WPTouch](http://wordpress.org/extend/pl). I wasn't very fond of it because it
looked completely different from my site and I don't think it actually added
anything. But my previous theme looked horrible on mobile devices.

I'd love to hear any feedback. And of course, I'll answer any questions you
might have.

Ciao!
