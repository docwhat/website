---
id: 1202
title: OS X Vim with Ruby crashes
date: 2012-12-08T17:48:42-05:00
author: docwhat
layout: post
guid: http://docwhat.org/?p=1202
slug: /os-x-vim-with-ruby-crashes/
image: /files/2012/04/356023245659.png
categories:
  - docwhat
tags:
  - Ruby
  - RVM
  - vim
---
On my OS X systems, [Vim](http://www.vim.org) and
[MacVim](https://code.google.com/p/macvim/) has been crashing a lot. The
main symptom is that anything using [Omni
completion](http://vim.wikia.com/wiki/Omni_completion), such as
[NeoComplCache](https://github.com/Shougo/neocomplcache), would try to
use the built in Ruby and cause vim to die with
`Vim: Caught deadly signal SEGV`.

It turns out that this is due to vim loading ruby modules/libraries not
compatible with the system Ruby.

I have [RVM](http://rvm.io) installed on my system and what was
happening is that:

-   RVM sets the `GEM_PATH` and `GEM_HOME`.
-   I had a version of Ruby 1.8.7 in RVM. This is the same version as
    (Mac)Vim and OS X has installed in `/usr/`.
-   I had binary (compiled) gems installed for the RVM 1.8.7 Ruby. These
    are files that end in `.so`.
-   So (Mac)Vim tries to do completion, tries loading a binary gem from
    the `GEM_PATH`, finds the RVM 1.8.7 version of the `.so` gem module,
    loads it, and crashes.

This isn't surprising. My RVM doesn't compile Ruby the same way Apple
does. This is deliberate, because I want certain performance behaviors,
etc.

Anyway, the solution is simple enough.

If you got your Vim and MacVim through
[HomeBrew](http://mxcl.github.com/homebrew/) (and really, you should),
then just add this to your `~/.zshrc`:

``` zsh
for i in /usr/local/opt/vim/bin/*(N) /usr/local/opt/macvim/bin/*(N); do
  i=$(basename $i)
  alias "${i}"="env -u GEM_PATH -u GEM_HOME command ${i}"
done
```

Homebrew installs a symlink for most kegs into
`/usr/local/opt/*package-name*`, which makes it simple to find the list
of all binaries in a keg. The `(N)` is a ZSH-ism that says it is okay
for the `*` to return nothing. If you're using bash, just remove the
`(N)`

The upshot is that this unsets the `GEM_PATH` and `GEM_HOME`.

You may also want your `EDITOR` environment variable to include the
`env -u GEM_PATH -u GEM_HOME` part as well:

``` zsh
export GIT_EDITOR="env -u GEM_PATH -u GEM_HOME vim +1"
export EDITOR="env -u GEM_PATH -u GEM_HOME vim"
```

Ciao!
