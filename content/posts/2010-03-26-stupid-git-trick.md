---
id: '523'
title: Stupid Git Trick
date: 2010-03-26T22:29:08+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=523
slug: /stupid-git-trick/
categories:
    - docwhat
tags:
    - emacs
    - git
---

This was one of those dumb things that I should have figured out earlier.

If you use emacs for editing then you probably have a customized `.emacs`
file. Even if you don't, your system is probably loading a boatload of
features for emacs.

I certainly have a ton of elisp that I use to make development easier.

So it just occurred to me that I don't need any of that stuff just to edit a
change commit.

So I added this to my shell rc file:

```bash
export GIT_EDITOR="emacs -q"
```

Now emacs pops up instantly and I don't have to wait for all the elisp to load
and initialize.

This probably works with other editors too.

Ciao!
