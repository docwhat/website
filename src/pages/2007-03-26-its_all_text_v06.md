---
id: 40
title: "It's All Text! v0.6+"
date: 2007-03-26T18:36:10+00:00
author: docwhat
template: post
guid: http://docwhat.org/2007/03/its_all_text_v06/
slug: /its_all_text_v06/
title_tag:
  - ""
categories:
  - docwhat
tags:
  - cool
  - extension
  - features
  - Firefox
  - "It's All Text!"
  - JavaScript
---
![\[screenshot\]](/files/2007/03/preview.png)

[Get _It's All
Text!_](https://addons.mozilla.org/en-US/firefox/addon/4125)

I wrote [_It's All
Text!_](https://addons.mozilla.org/en-US/firefox/addon/4125) for myself.
When [Firefox](http://mozilla.com/) 2.0 was released it broke
[MozEx](http://mozex.mozdev.org/) so I went looking for a replacement.
The others weren't very good. So I set about fixing MozEx. It was then
that I realized that MozEx had way more stuff in it than I needed and
some parts were just a pain to maintain.

The author of MozEx got it working with FireFox 2.0 eventually. But I
had this itch because I saw things I can improve.

Now it's three months later and I've released version 0.6.1 now that
[Addons](http://addons.mozilla.org/) is back. This will be my release
candidate for 1.0 because I have fixed the four most annoying problems:

-   The edit button is in the right place. If it isn't perfect, it's
    really close. Even for [GMail](http://gmail.com/) and
    [Wikipedia](http://wikipedia.org).
-   Right clicking on the edit button lets you pick a file extension.
-   When the user first starts or the editor isn't in the right place,
    it explains to the user what happened and what to do about it.
-   The rules for when and what to refresh finally seem right. At least
    for me… ;-)

The last big bug I want to do something for, even if I can't fix it, is
the "Mac OS X select an editor that actually is a .app directory"
problem. It's hard for me to work on because I have to borrow my wifes
Mac to work on it.

The versions up to now, as flawed as they have been, have actually
gotten some really good feedback both in
~comments~ on
this site and on [addons](http://addons.mozilla.org/) and even from
blogs in
[Switzerland](http://www.libellules.ch/dotclear/index.php?2007/03/05/1738-it-s-all-text)
and [Japan](http://d.hatena.ne.jp/nyama/)! Note: I have been told that
the addons comments are still in the process of being moved from the old
site to the new one.

[Jason Barnabe](http://blog.userstyles.org/), the author of the
excellent [Stylish](https://addons.mozilla.org/firefox/2108/) extension
for Firefox has helped design an
[API](http://blog.userstyles.org/2007/03/13/extension-integration-its-all-text/)
for It's All Text! so that you can use an external editor in Stylish or
in any other extension that decides it wants to support It's All Text!

Finally, if you design a website, you can add the attribute
`itsalltext-extension` to any textarea and it'll be the default
extension used for that textarea (don't forget the leading dot, `.`).
You can see it below in the "Leave a comment" box.

I want to thank everyone who has given me all this great feedback. Even
people telling me it doesn't work is helpful. Every comment spurred me
on to make it better so I really owe it's current level of usability to
all of you. Please, give yourselves a hand.

I can't wait to see what feedback I get next.  Yay!

Ciao!

Previously: [It's All Text!](../its-all-text/)

EDIT (2007/04/04): I'm so stupid. Thankfully, [Robert
Daeley](http://www.oreillynet.com/pub/au/2387) explained [exactly what I
didn't
understand](http://www.oreillynet.com/mac/blog/2007/02/firefox_plugin_its_all_text.html)
about Mac OS X. I need to use `/usr/bin/open` on Mac OS X. Now that I
understand what `open` is and why it should be used, I will finally have
that part of Mac OS X fixed in short order. Now I just need to figure
out make the close button not be `display: none` in preferences. Grrrr.

Mentions (till [Addons gets
trackbacks](https://bugzilla.mozilla.org/show_bug.cgi?id=376477)):

-   [Circle Six Design: Textmate and
    Firefox](http://blog.circlesixdesign.com/2007/02/23/textmate-firefox/)
-   [Lifehacker: Download of the
    Day](http://lifehacker.com/software/web-publishing/download-of-the-day-its-all-text-firefox-239063.php)
-   [Benkruger.com](http://www.benkruger.com/2007/03/its-all-text.html)
-   [ClearBlogging: Save your self grief with
    …](http://safarisoftware.typepad.com/clearblogging/2007/03/save_yourself_g.html)
-   [\[TxMt\] Edit in TM: any alternatives to "it's all
    text"?](http://comox.textdrive.com/pipermail/textmate/2007-March/018183.html)
-   [Anil's
    Weblog](http://anildigital.blogspot.com/2007/02/created-tumblelog.html)
-   [India, Ink.: Integrate Firefox with your text
    editor](http://indiamos.wordpress.com/2007/02/24/itsalltext/) with
    nice pictures!
