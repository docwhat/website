---
id: '184'
title: "SPORE has DRM and Amazon users don't like it"
date: '2008-09-08'
slug: '/spore-drm/'
tags:
    - DRM
    - video games
archive: true
---

I'm waiting for my copy of [SPORE](http://www.spore.com/) to arrive from
Amazon and I noticed that the rating for
[Spore on Amazon](https://amzn.to/2ILbGCh) dropped to 1 star, out of 824
reviews (as of 2008-09-08 at 5:59pm EDT). I hadn't realized that the DRM on
this was the infamous [SecuROM](http://en.wikipedia.org/wiki/SecuROM).

This made me nervous. I switched to a Macbook Pro because I didn't want to
have to muck about with the kernel on the system that I use for everything; I
just want it to work. Having some sort of kernel module doing DRM breaking my
system would be a reason to be very upset.

<!-- more -->

So I did what any geek would do: I went looking for more information.

I wanted to find out what SecuROM on the Mac does. Searching only turned up
[one article](http://securom.mustbedestroyed.org/phorum/viewtopic.php?f=8&t=84&p=701)
that says you don't have to do anything special to remove Securom on the Mac;
everything is located in the .app bundle and the Preferences directory. This
matches the instructions that came with the readme:

-   Ensure you are logged in using an account which has Administrative
    privileges.
-   Delete the SPORE folder from your Applications folder.
-   Additional files can be found in
    /Users/&lt;Username&gt;/Library/Preferences/SPORE Creature Creator
    Preferences.

I also found that SPORE was released via
[Cider](http://www.transgaming.com/products/cider/) (essential a Mac port of
WINE from TransGaming). This is interesting because it means that things like
registry settings and windows driver APIs have to be emulated.

If you combine the above information the implication is that SecuROM is only
being used for account management and not to actively muck with my hardware.
At least on OS X.

So that's good news, if true.

Ciao!

Additional Information:

-   [Description of SecuROM](http://reclaimyourgame.com/index.php?option=com_content&view=article&id=52&Itemid=13)
    (Spore uses version 7, some of the problems are earlier PC versions)
-   [One case of harddrive failure being blamed on SecuROM](http://forums.ea.com/mboards/thread.jspa?threadID=378657&tstart=0&start=251)
    (This is the only case of this I've heard of)
