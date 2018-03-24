---
id: 171
title: "Switched from YUI to jQuery"
date: "2008-08-28T23:22:20+00:00"
template: "post"
slug: "/yui-jquery/"
tags:
  - JavaScript
---

I just switched my (rather limited) JavaScript from
[YUI](http://developer.yahoo.com/yui) to [jQuery](http://jquery.com/).

jQuery took a little (a couple hours) to learn how to write something close to
idiomatic code. My
[new code](http://git.gerf.org/?p=docwhat-web.git;a=blob;f=theme/src/js/script.js;h=87ac59f52f0790c531b10dc4860044978d40b86e;hb=bc23da7e2f25c95d41101ff9e811dea81d69b116)
is much much smaller and easier to read.<!-- more -->

Why did I switch away from YUI you might ask?

A couple reasons:

1.  jQuery has a bunch of idiomatic constructs to make what I'm doing here
    much easier: Example:

```javascript
$('table tbody tr:even').each(function() {
  $(this).addClass('alt')
})
```

2.  jQuery is smaller.
3.  I use YUI at work.
4.  I just wanted to try something new.

Ciao!
