---
id: '426'
title: 'Google Gears, FF 3.5, and OS-X'
date: '2009-08-04'
tags:
    - Firefox
    - Google Gears
    - OS X
archive: true
---

If you have OS-X and you installed Firefox 3.5 and discovered that Google
Gears isn't working for you, then this post is for you.

Apparently, Firefox 3.5 will suck in the Safari plugins and try to use them.
This includes the Gears for Safari plugin which breaks sites with gears
support. :confused:

You can tell if you have a problem by going to <http://gears.google.com/> and
seeing if there is a big blue box on the right-hand side. It should say
something like: "Download Gears" or "Gears is installed".

If you don't see anything on the right-hand side then you need this fix:

1.  In the menu bar, click on Tools
2.  Select Add-ons
3.  Click on the Plugins tab
4.  Disable the plugin called "Gears". It should have a subtitle of "Gears for
    Safari".

You should now be able to go to <http://gears.google.com/> and see the blue
box with an install link.

Ciao!
