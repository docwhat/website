---
id: '1250'
title: "40days - Simple isn't easy"
date: '2013-02-28'
template: post
slug: /40days-simple-isnt-easy/
wasimage: /files/2013/02/40days-250x250.png
categories:
    - docwhat
---

![40days](40days.png 'Screenshot of 40days web app')

I wrote a simple one-page web application called
[40days](http://docwhat.github.com/40days/). It shows you what the date is for
40 days in the future. I say "simple" but simple isn't easy. It never is.

<!-- more -->

I wrote 40days because my orthodontist would schedule my appointments 40 days
apart and it was a hassle for me and secretary to figure out what date that
was.

It's written with [coffeescript](http://coffeescript.org/) and
[scss](http://sass-lang.com/) and is licensed under the
[MIT LICENSE](http://opensource.org/licenses/MIT).

This actually was harder than I thought. I quickly created a crappy-but-works
version. But I always forget that polishing code is hard.

My audience was non-technical people who just wanted to enter a number and get
it to work. But at the same time, I didn't want it to do confusing things like
let them enter non-numbers. I also wanted features like pressing the up and
down arrows to change the number of days.

Plus it needed to look good.

And work reliably.

As always, fighting with the lack of standards in standardized browsers was
fun. The JavaScript `Event` object still sucks in the year 2013. And it still
behaves differently for `keydown` and `keypress`. I kept trying to put
everything in `keypress` or `keydown` but that didn't work because I couldn't
detect arrow keys in `keypress` events and detecting numeric keys doesn't work
well in `keydown` events.

Bit by bit JS and event callbacks all came back to me. It has been a while,
hasn't it.

Looking pretty wasn't too hard. A CSS reset and some simple CSS made it look
pretty good.

I wanted things to not bounce around as the number change (it'd be confusing).
Originally I thought to try to fit it all on one line holding everything still
except the date and wrap if the display couldn't handle it. But that didn't
work well and reliably, so I wrap it all the time. (If you have an idea on how
to do that, tell me!)

Making sure I had a link to my site and GitHub was icing on the cake.

Finally, I cleaned it up, added the README and licenses and uploaded it to
[Github](http://github.com/docwhat) as a GitHub Page (aka `gh-pages`).

Anyway, feel free to use it or pick it apart or whatever.

Ciao!
