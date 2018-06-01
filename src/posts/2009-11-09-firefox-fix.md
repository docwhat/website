---
id: 475
title: Firefox Fix
date: 2009-11-09T12:29:02+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=475
slug: /firefox-fix/
openid_comments:
  - 'a:2:{i:0;s:4:"6388";i:1;s:4:"6392";}'
categories:
  - docwhat
tags:
  - Firefox
---

I have a tendency to switch my default browser every so often. I like playing
with new toys.

I just switched from Safari to Firefox 3.5.5 and discovered I couldn't stand the
way external links open in new tabs though I wanted new-window links such as
target="\_blank" to open in a new tab.

This used to work via
<a href="http://kb.mozillazine.org/Browser.link.open_external">browser.link.open_external.</a>

But <a href="http://kb.mozillazine.org/Browser.link.open_external">no
longer</a>. They nuked this via
<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=324164">bug 324164</a>. I
can sort of understand it. Most people want a new tab or a new window on each
new link. However, if you use spaces in OS-X or desktops in Linux, then setting
this unified option to "new tab" sucks -- you have to play "hunt the window"
every time you click a link in a program.

Bleh.

Fortunately, someone came to our rescue with a handy addon:
<a href="https://addons.mozilla.org/en-US/firefox/addon/13626">Tabs Open
Relative (Modified)</a> by mojo-chan.

It also has the side-effect of opening new tabs just right to the current tab,
like chrome does. I've become used to that behavior and definitely prefer it.

Ciao!
