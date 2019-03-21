---
date: '2010-08-30'
id: '574'
image: '/files/2010/08/Emacs-ECB-250x232.png'
slug: '/cedet-ecb-for-aquamacs/'
tags:
    - aquamacs
    - emacs
    - OS X
title: 'Setting up CEDET/ECB for Aquamacs'
---

[Aquamacs 2.1](http://aquamacs.org/) is now out.

**UPDATE \[2011/08/04\]**:

> Aquamacs 2.3a (the latest at this time) has CEDET already in it; skip the
> part about installing CEDET. I still recommend creating the `site-start.el`
> file for CEDET but beware the differences between CEDET shipped with Emacs
> and the stand-alone version. When you get ECB, you need a version newer than
> 2.40, which at this time means getting the CVS version.

<!-- more -->

The new 2.x series no longer requires the
[Dvorak hack](/aquamacs-vs-dvorak-qwerty-layout) I posted about earlier (yay!)

2.1 has a nice new mechanism for plugins, so here are instructions for making
CEDET and ECB work with Aquamacs.

**Note before continuing:** I'm using the version numbers I got installing
these packages. If there are newer ones, use them. I also am assuming you
installed `Aquamacs.app` into `/Applications/`

### CEDET

[CEDET](http://cedet.sourceforge.net/) is a collection of emacs tools to make
your life easier. I don't fully grok them all, but some are nice. Semantic is
in-language completion, for example.

A full install of CEDET is required for ECB and Aquamacs doesn't come with
that (yet?!) so you need to install it yourself.

1.  Download the latest
    [CEDET from sourceforge](https://sourceforge.net/projects/cedet/files/)
2.  Untar the file in `~/Library/Application Support/Aquamacs Emacs`:

    ```bash
    cd ~/Library/Application Support/Aquamacs Emacs
    tar xf ~/Downloads/cedet-1.0.tar.gz
    ```

3.  Run `make`:

    ```bash
    make EMACS=/Applications/Aquamacs.app/Contents/MacOS/Aquamacs
    ```

4.  Create a `site-start.el` file. This will be loaded automagically by
    Aquamacs. It should look like this. You should replace `YOUR USERNAME`
    with your OS X username.

    ```elisp
    (load-file "/Users/YOUR USERNAME/Library/Application Support/Aquamacs Emacs/cedet-1.0/common/cedet.el")
    (global-ede-mode 1)                      ; Enable the Project management system
    ;; These two options below are only for the stand-alone CEDET. Not the one
    ;; now included with newer Aquamacs/Emacs.
    (semantic-load-enable-code-helpers)      ; Enable prototype help and smart completion
    (global-srecode-minor-mode 1)            ; Enable template insertion menu
    ```

5.  Now you need to pull all the .info files into a directory called `info`
    with a `dir` file. Aquamacs is smart enough to figure out this is plugin
    specific info files, and will use it.

    ```bash
    mkdir info
    cd info
    find .. -type f -name '*.info' \
      | while read i; do \
        j="$(basename $i)"; \
        ln -s "$i" "$j"; \
        install-info --info-dir="$(pwd)" "$j"; \
        done
    ```

6.  Restart Aquamacs and you should have the full CEDET available, including
    docs.

### Emacs Code Browser (ECB)

[ECB](http://ecb.sourceforge.net/) is the Emacs Code Browser. It basically
turns Emacs into a full IDE like XCode.

1.  Download the latest
    [ECB from sourceforge](https://sourceforge.net/projects/ecb/files/).
    **WARNING:** _If you're using Aquamacs 2.3, then you'll need the latest
    version via CVS:_

    ```bash
    cvs -z3 \
      -d:pserver:anonymous@ecb.cvs.sourceforge.net:/cvsroot/ecb \
      co -P ecb
    ```

2.  Untar the file in `~/Library/Application Support/Aquamacs Emacs`:

    ```bash
    cd ~/Library/Application Support/Aquamacs Emacs
    tar xf ~/Downloads/ecb-2.40.tar.gz
    ```

3.  Create a `site-start.el` file to load up ECB on startup:

    ```elisp
    (add-to-list 'load-path
          "/Users/YOUR USERNAME/Library/Application Support/Aquamacs Emacs/ecb-2.40")

    ;; Choose one of the following...

    ;; If you want to load the complete ECB at (X)Emacs-loadtime
    ;; (Advantage: All ECB-options available after loading
    ;; ECB. Disadvantage: Increasing loadtime2):

    (require 'ecb)

    ;; If you want to load the ECB first after starting it by ecb-activate
    ;; (Advantage: Fast loading3. Disadvantage: ECB- and semantic-options
    ;; first available after starting ECB):
    ;; WARNING: This doesn't work with the CVS version of ECB unless edit Makefile
    ;; and run make.

    ;(require 'ecb-autoloads)
    ```

4.  Symlink the `info-help` directory to `info` and create a `dir` file.
5.  Restart aquamacs and you should have ECB available, including docs.

### You're done

I suggest you sit down and read some of the docs for ECB and CEDET. Especially
[A Gentle Introduction to Cedet](http://alexott.net/en/writings/emacs-devenv/EmacsCedet.html)
and reading the info docs for ECB by using `M-x info` or the HTML version in
the ECB directory we created.

Ciao!
