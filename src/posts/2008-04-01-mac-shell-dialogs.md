---
id: 88
title: "Mac Tricks: Shell Script Dialogs"
date: "2008-04-01T23:21:32+00:00"
template: "post"
slug: "/mac-shell-dialogs/"
title-tag:
- "Mac Tricks: Using a dialog from a shell script"
tags:
- AppleScript
- shell
---

As you may know, I have had a MacBook Pro (15" - glossy) for a few months now.
I am starting to feel pretty comfortable in it and have started to learn more
of the advanced features that I don't need to get things done, but because I
like learning how stuff works.

In this case, I discovered how to create dialogs from the command line or a
shell script. In Linux, I'd use `gdialog` or something similar.

On the mac, I'm I discovered `osascript`. This is a way into the AppleScript
goodness inside OS X. You can get more documentation, like most things in the
command line world of OS X, using `man`.

An example creating a 'stop' dialog:

```bash
osascript -e 'tell app "System Events" to display dialog "A stop dialog with only one button." buttons "OK" default button 1 with title "and a title" with icon stop'
```

I would assume there are other values you could feed in for the icon, but I
haven't a clue and I can't find it in Script Editor Library. How annoying.
[Note: I did end up finding it in the Apple Script Language Guide, see below.]

Here's a version with multiple buttons:

```bash
osascript -e 'tell app "System Events" to display dialog "A dialog with no buttons and the exit code will tell the script which button was pressed."'
```

If the exit code is 0, then "OK" was pressed; otherwise it was canceled.
Errors go to `stderr`, so you can catch them and hide them.

Ah-ha! I found the missing
[`display dialog` documentation](http://developer.apple.com/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_cmds.html#//apple_ref/doc/uid/TP40000983-CH216-SW12).
It was in the
[Apple Script Language Guide](http://developer.apple.com/documentation/AppleScript/Conceptual/AppleScriptLangGuide).
Excellent.

Here are some tutorials aimed at AppleScript beginners (and I mean beginners;
I'd much prefer a "Dive into" style tutorial):

1.  [AppleScript Tutorial for Beginners I - Getting Started & Script Editor](http://macscripter.net/articles/415_0_10_0_C/)
2.  [AppleScript Tutorial for Beginners II - Variables and Dictionaries](http://macscripter.net/articles/428_0_10_0_C/)
3.  [AppleScript Tutorial for Beginners III - The Power of Lists](http://macscripter.net/articles/434_0_10_0_C/)
4.  [AppleScript Tutorial for Beginners IV - Records & Repeats](http://macscripter.net/articles/445_0_10_0_C/)
5.  [AppleScript Tutorial for Beginners V - Testing & Shorthand](http://macscripter.net/articles/452_0_10_0_C/)
6.  [AppleScript Tutorial for Beginners VI - User Interaction](http://macscripter.net/articles/458_0_10_0_C/)
7.  [AppleScript Tutorial for Beginners VII - Errors](http://macscripter.net/articles/463_0_10_0_C/)
8.  [AppleScript Tutorial for Beginners VIII - Getting the Drop on Droplets](http://macscripter.net/articles/467_0_1_0_C/)
9.  [AppleScript Tutorial for Beginners IX - Math](http://macscripter.net/articles/470_0_10_0_C/)
