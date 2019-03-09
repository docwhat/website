---
id: '475'
title: Firefox Fix
date: 2009-11-09
slug: /firefox-fix/
tags:
    - Firefox
---

I have a tendency to switch my default browser every so often. I like playing
with new toys.

I just switched from Safari to Firefox 3.5.5 and discovered I couldn't stand
the way external links open in new tabs though I wanted new-window links such
as `target="_blank"` to open in a new tab.

<!-- more -->

This used to work via
[browser.link.open_external.](http://kb.mozillazine.org/Browser.link.open_external)

But [no longer](http://kb.mozillazine.org/Browser.link.open_external). They
nuked this via
[bug 324164](https://bugzilla.mozilla.org/show_bug.cgi?id=324164). I can sort
of understand it. Most people want a new tab or a new window on each new link.
However, if you use spaces in OS-X or desktops in Linux, then setting this
unified option to "new tab" sucks \-- you have to play "hunt the window" every
time you click a link in a program.

Bleh.

Fortunately, someone came to our rescue with a handy addon:
[Tabs Open Relative (Modified)](https://addons.mozilla.org/en-US/firefox/addon/13626)
by mojo-chan.

It also has the side-effect of opening new tabs just right to the current tab,
like chrome does. I've become used to that behavior and definitely prefer it.

Ciao!
