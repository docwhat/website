---
date: '2009-12-03T17:23:29+00:00'
id: 478
template: post
slug: '/macbook-pro-dual-graphics/'
tags:
- hardware
- macbook pro
title: 'MacBook Pro - Dual Graphics'
---

[![graphics](graphics2.png 'From the official mac specs.')](http://www.apple.com/macbookpro/graphics.html)

I'm annoyed. I've had my lovely late-2009 MacBook Pro with the incredible
[dual graphics processors](http://www.nvidia.com/object/product_geforce_9400m_g_us.html)
for a couple months and I had the slower GPU enabled the whole time.

Apparently, you need to go into "System Preferences" -> "Energy Saver" and turn
on "Graphics" -> "Higher Performance"[^1].

I am annoyed, because I thought the problems with
[Sims 3](http://www.thesims3.com/game/thesims3) was because it was having
trouble, not because I was using the slow GPU.

Even more annoying, I was (apparently falsely) under the impression that this
switch was either obvious, easy or happened automagically when plugging or
unplugging the power.

The [spec sheet](http://www.nvidia.com/object/product_geforce_9400m_g_us.html)
for the GPU says that it is capable of switching on the fly and even using
_both_ GPUs for even more power. I found this out via an
[EveryMac article](http://www.everymac.com/systems/apple/macbook_pro/macbook-pro-unibody-faq/macbook-pro-unibody-switching-between-graphics-processors.html).

Well, hopefully some day this will be enabled. Meanwhile, I'm going to check to
see if the [GCD](http://en.wikipedia.org/wiki/Grand_Central_Dispatch) needs
enabling too.

Ciao.

**UPDATE**: I found [gfxCardStatus](http://codykrieger.com/gfxCardStatus/) which
allows you to see which video card is enabled. Unfortunately, the icons are
weird for my laptop; I have two nVidia GPUs, but it was designed for ones that
have an Intel and nVidia. But it works fine.

[^1]: [apple kb article](http://support.apple.com/kb/HT3207)
