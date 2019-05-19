---
id: '791'
title: Fix git-gui’s “Spell checking is unavailable” dialog
date: '2011-12-02'
image: /files/2011/12/missing-aspell-300x139-250x115.png
tags:
    - git
    - homebrew
    - OS X
---

<i>Unashamedly stolen from a
[Hints and Kinks blog post](http://matthew.mceachen.us/blog/howto-fix-git-guis-spell-checking-is-unavailable-dialog-1153.html);
I added information about the Homebrew solution</i>

If you use 'git gui' on the Mac, you may find that it repeatedly pops up a
message about spell checking being unavailable. This happens when using the
[MacPorts](http://www.macports.org/) or [Homebrew](http://brew.sh) versions of
git.

<!-- more -->

The error message will say something like (the language that's missing might
be different):

> Spell checking is unavailable: No word lists can be found for the language
> "en_US"

You can easily fix this in MacPorts with:

```bash
sudo port install aspell aspell-dict-en
```

Or in Homebrew with:

```bash
brew install aspell --lang=en
```

Ciao!
