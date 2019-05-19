---
id: '740'
title: Aquamacs 2.3a and Marmalade
date: '2011-08-06'
author: docwhat

image: /files/2011/08/2190102002_e56bb311b9_o-192x250.jpg
categories:
    - docwhat
tags:
    - aquamacs
    - emacs
archived: true
---

**Warning**: _Marmalade_ has not been updated since 2014 and seems to be dead.

A quick and easy way to packages up-and-running in Aquamacs is to use
[Marmalade](http://marmalade-repo.org/). Marmalade is a package manager. It'll
fetch an elisp package for you, install it, and make sure it loads up again
when you restart emacs.

<!-- more -->

Marmalade is sort of the next-gen version of [ELPA](http://tromey.com/elpa/),
the Emacs Lisp Package Archive. Even better, it's the package manager (with
some tweaks) used in Emacs 24 (which will become Aquamacs 2.4).

I'm excited to see Emacs improving the user experience. It's about time it
started making life easier for people who want more than a bare-minimum emacs
experience.

## Getting setup

First download `package.el` and put it in
`~/Library/Preferences/Aquamacs Emacs/`:

```bash
$ cd ~/Library/Preferences/Aquamacs\ Emacs/
$ wget http://repo.or.cz/w/emacs.git/blob_plain/1a0a666f941c99882093d7bd08ced15033bc3f0c:/lisp/emacs-lisp/package.el
```

Next edit <code>~/Library/Preferences/Aquamacs Emacs/Preferences.el</code> and
add these lines:

```elisp
(require 'package)
;; Marmalade
(add-to-list 'package-archives
             '("marmalade" . "http://marmalade-repo.org/packages/"))
;; The original ELPA archive still has some useful
;; stuff.
;; (add-to-list 'package-archives
;;              '("elpa" . "http://tromey.com/elpa/"))
(package-initialize)
```

Now restart Aquamacs.

## Installing Packages

Once you have Aquamacs running, type `M-x list-packages`

Wait a few seconds and you'll see a list of packages. You move around the
buffer normally. To get help, press `h`. To mark something for install, press
`i`. To actually execute the install, use `x`.

After you install a package, you may need to add the appropriate
`(require 'foo)` to `Preferences.el`. For example, I needed it for
"textmate-mode", "yaml-mode", and "ecb_snap", but I didn't need it for
"scss-mode" or "sasl-mode". I'm not sure if that's a bug in Marmalade or a
"feature".

Either way, you can use this to install ECB (Use `ecb_snap` for Aquamacs 2.3a
and add `(require 'ecb)` to the end of your `Preferences.el`). This is easier
than [my previous article](/cedet-ecb-for-aquamacs/). Cool!

## Closing Notes

If you have any problems, check out the various ELPA resources. Even though
it's a different repository, it still uses the same mechanisms. The only
difference is that in the ELPA version of `package.el` the command to list the
packages is `package-list-packages`, but with the Marmalade version it's
`list-packages`.

Ciao!
