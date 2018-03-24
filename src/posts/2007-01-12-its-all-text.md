---
id: 35
title: "It's All Text!"
date: 2007-01-12T01:02:35+00:00
template: post
guid: http://docwhat.org/2007/01/its-all-text/
slug: /its-all-text/
tags:
  - "It's All Text!"
  - JavaScript
---

Have you ever had to fill in a form on a web page and wished you could open it
in an editor? If you use lots of blogs, post lots of comments or file many
bugs then you probably get annoyed at the lack of true editor commands.

I've seen some solutions that embed a JavaScript editor into a textarea on
demand. Generally, I don't like them. They are re-inventing a wheel.
Especially since I like my particular flavor of wheel,
[Emacs](http://emacswiki.org/), though I have no problem with
[other](http://vim.org/) flavors.

So when I discovered the [Firefox](http://mozilla.com/) extension
[MozEx](http://mozex.mozdev.org/) I was a very happy hacker indeed. But as
time went on I didn't like the way the extension was going. It was trying to
solve a problem I didn't have; it wanted to add handlers for things like
ssh://, etc. and I didn't need that. I needed an external editor!

<!-- more -->

When [Firefox](http://mozilla.com/) 2.0 came out, MozEx didn't work. I waited
for an update and it didn't come out. Since my new job used a lot of editing
stuff via web forms, I really really needed an editor. So I reached for
External Editor. It seems to have gone since then, replaced with
[Editus Externus](http://addons.mozilla.org/firefox/1195/) which seems to be
an improved version by someone else.

External Editor had a huge problem. When you edited a file it would freeze up
all of Firefox till the editor quit. Yikes! However, it let me do things that
I needed to do, so I use it.

I started poking around in MozEx to figure out why it wasn't working in
Firefox 2.0 and discovered that in an effort to support pre-1.5 versions of
Firefox, it did a lot of work in JavaScript that could now be done in Firefox
(md5sums) and it did these sums way too many times for my liking.

It also had some potential security flaws where the browser could be tricked
into fetching the contents of a file from one site into their site. Even more
annoying, if a second user used MozEx and edited the same site, the files
would collide.

So I started thinking... How hard could it be to write an extension?

So I did. :-)

It's called [It's All Text!](http://addons.mozilla.org/firefox/4125) and is
available for download today.

If you have any suggestions, feel free to post here. I'll keep this open until
I get to version 1, at which point I start a new post someplace...

My current todo list:

* [idea] dropdown list for charsets (utf-8, western-iso, default)?
* [low] `getDocumentIdentifier` should sort arguments and append the post
  data.
* [security] Detect collisions using the raw key.
* [idea] Pass in the line number to the editor, arbitrary command?
* [high] On edit, let user pick the file extension.
* [idea] allow the user to pick an alternative editor?
* [med] Profiling and optimization.
* [med] If the textarea is focused, we should refresh it.
* [low] When the editor quits, we should refresh the textarea.
* [idea] support for input elements as well?
* [high] Confirm that we find textareas inside iframes and frames.
* [med] Have gumdrop fade in and out on mouseover

Things marked as ideas, may or may not happen. Everything else will either
happen or the issue will be addressed in some other way.

And yes, I edited this blog post with it. :-)

Ciao!

Download: [It's All Text!](http://addons.mozilla.org/firefox/4125)
