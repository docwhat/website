---
id: '171'
title: 'Switched from YUI to jQuery'
date: '2008-08-28T23:22:20+00:00'
template: 'post'
slug: '/yui-jquery/'
tags:
    - JavaScript
---

I just switched my (rather limited) JavaScript from
[YUI](http://developer.yahoo.com/yui) to [jQuery](http://jquery.com/).

jQuery took a little (a couple hours) to learn how to write something close to
idiomatic code. My new code is much much smaller and easier to read.

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
