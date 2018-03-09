---
date: '2012-04-13T09:03:12-04:00'
guid: 'http://docwhat.org/?p=841'
id: 841
image: '/files/2012/04/356023245659.png'
slug: '/updating-vim-on-os-x/'
tags:
- editors
- OS X
- Python
- Ruby
- vim
template: post
title: Updating VIM on OS X
---

The version of [Vim](http://www.vim.org/) that comes with OS X is a
little old, but more importantly, it doesn't have all the bells and
whistles enabled.

Specifically, it doesn't come with ruby and python support compiled
in. Which is a shame, because some plugins for Vim need it.

I've been playing with Vim since a couple months ago when I was pair
programming with a co-worker, Shawn. Shawn prefers Vim and he is
very good at it.

To make pair programming easier, I decided to improve my very basic
Vim skills. As part of that, I created a new `.vimrc` based on
Shawn's. I then went further and included
[Vundle](https://github.com/gmarik/vundle) and started looking at
various packages.

We used this `.vimrc` during our pair programming and pushed it up
as a [Homedir](http://github.com/docwhat/homedir) package at
<http://github.com/docwhat/homedir-vim>. I've successfully used this
`.vimrc` on Windows (via Cygwin) and Centos version 5.6 and 6.2, as
well as on the Mac. You can bypass
[Homedir](http://github.com/docwhat/homedir) entirely and just
download the
[`.vimrc`](https://raw.github.com/docwhat/homedir-vim/master/vimrc/.vimrc)
directly.

However, to use some of the spiffy bits of my `.vimrc` on my Mac, I
needed a Vim with all the extras. Here's how you do it easily:

1.  Install [Homebrew](http://mxcl.github.com/homebrew/).
2.  Add the [duplicates
    "tap"](https://github.com/Homebrew/homebrew-dupes). This adds
    formulas for apps that duplicate the build-in OS X
    functionality: `brew tap homebrew/dupes`
3.  Install Vim: `brew install homebrew/dupes/vim`

That's it. Easy-peasy!

Ciao!

**UPDATE 2016/02/29**: My `.vimrc` has been moved into my
[dotfiles](https://github.com/docwhat/dotfiles) repository.
