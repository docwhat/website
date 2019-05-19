---
id: '88'
title: 'Mac Tricks: Shell Script Dialogs'
date: '2008-04-01'
template: 'post'
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
\[Note: I did end up finding it in the Apple Script Language Guide, see
below.\]

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

~~Here are some tutorials aimed at AppleScript beginners (and I mean
beginners; I'd much prefer a "Dive into" style tutorial):~~
