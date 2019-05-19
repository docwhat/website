---
id: '68'
title: 'Mashups and JavaScript Security'
date: '2007-09-28'
template: 'post'
tags:
    - 'JavaScript'
    - 'security'
---

I found this excellent video
[_Gears and the Mashup Problem_](https://www.youtube.com/watch?v=V13wmj88Zx8)
of [Douglas Crockford](http://crockford.com/) (discoverer of
[JSON](http://json.org/)) talking about the security problems inherent in
[Mashups](http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29)
and of JavaScript as a whole.

He proposes a solution involving what he calls _vats_; a self contained
JavaScript interpreter with limited communication to the page. The JavaScript
in the page would be the only trusted code running and the code in the various
vats would not be trusted.<!-- more -->

He mentioned there should be an interface such that the user would be prompted
with intelligent (and decidable) questions, such as "Do you want to give web
site X \$5.00 from your pay-pal account?" or "Select the contacts you want to
give FaceBook from your GMail account."

He specifically mentions that [Google Gears](http://gears.google.com/) has a
vat in it already and that they should expand on it to give this extra
abilities. Which I'm sure is true, even if the lecture was at Google's campus.

The other thing he mentions is using
[JSONRequest](http://json.org/JSONRequest.html) as the channel to talk to the
vats and the servers. I think `JSONRequest` would be a vast improvement over
[XMLHttpRequest](http://en.wikipedia.org/wiki/Xmlhttprequest), myself.

`youtube:https://www.youtube.com/embed/V13wmj88Zx8`

via: [Ajaxian](http://ajaxian.com/archives/gears-and-the-mashup-problem)

Ciao!
