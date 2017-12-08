---
author: docwhat
categories:
- docwhat
date: '2008-09-12T12:23:54+00:00'
guid: 'http://docwhat.gerf.org/?p=190'
id: 190
layout: post
slug: '/spore-drm-part-2/'
tags:
- DRM
- macbook pro
- video games
title: SPORE DRM part 2
title_tag:
- SPORE DRM on the Mac
---

Following up on my [previous article](/spore-drm), I did a little
experiment as I installed
[SPORE](http://www.amazon.com/Electronic-Arts-15352-Spore/dp/B000FKBCX4%3FSubscriptionId%3D02E5W5871AJF7PMMMS82%26tag%3Dws%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB000FKBCX4){\#evtst|a|B000FKBCX4}
on my Macbook Pro. I created a script to md5 sum all the files that I
thought might be used to install a kernel module or a startup item.

I then did the following:

1.  Ran the checksum script
2.  Installed SPORE.
3.  Ran the checksum script again.
4.  Ran SPORE and authorized my account.
5.  Ran the checksum script again.
6.  Compared the results of the different checksum scripts.

What I discovered is that it did not touch any of these files or files
in these subdirectories:

-   `/Library/Extensions/`
-   `/Library/LaunchAgents/`
-   `/Library/LaunchDaemons/`
-   `/Library/Preferences/`
-   `/Library/Security/`
-   `/Library/StartupItems/`
-   `/Library/Updates/`
-   `/System/Library/Extensions/`
-   `/System/Library/LaunchAgents/`
-   `/System/Library/LaunchDaemons/`
-   `/System/Library/Security/`
-   `/System/Library/StartupItems/`
-   `/mach_kernel`
-   `/mach_kernel.ctfsys`
-   `/private/etc/`

It didn't change any timestamps, filesizes or md5sums.  Even if
something was already installed via the [Creature
Creator](http://www.amazon.com/Electronic-Arts-15864-Creature-Creator/dp/B0017KWJ56%3FSubscriptionId%3D02E5W5871AJF7PMMMS82%26tag%3Dws%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0017KWJ56){\#evtst|a|B0017KWJ56}
I would expect it to at least update that code or something.

I can say with some confidence that [SecuROM 7 under
Cider](http://www.transgaming.com/news/?id=108) does not install a
kernel module or a system startup item; changes needed to hide
directories, detect if debuggers have ever been run, or hide processes.

The thing I wondered about is why it needs root access (it asks for your
password) during install.  So I'm not 100% confident.

That's a big improvement over all the horrible problems that Windows
users have reported.  And it means it can be uninstalled and in the way Mac users are accustom to.

On the downside, it looks like the authorization is actually causing
both Windows and Mac users problems.  There is a thread on the forums
about how [you can't have multiple accounts with one
install](http://forum.spore.com/jforum/posts/list/103.page). Despite
expectations and the instruction manual saying otherwise.

I saw reports of that problem on the Amazon reviews and thought it was a
very legit complaint along with the windows people who tried to install
it and it failed or caused various problems.

I had only heard one report about hard drive failure and I suspect it
was unrelated or a fabrication.  I would expect more Mac users to have
complained by now.

Ciao!
