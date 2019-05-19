---
id: '1222'
title: More on Vim with ruby crashing
date: '2013-01-26'
author: docwhat
image: /files/2012/04/356023245659.png
categories:
    - docwhat
tags:
    - Ruby
    - vim
---

I finally figured out all the reasons why [Vim](https://www.vim.org/) keeps
crashing on me. I started collecting info in
[OS X Vim with Ruby crashes](/os-x-vim-with-ruby-crashes/) but there were
still crashes happening.

It's an interesting story. Grab a beer and pull up a chair...

<!-- more -->

So there turns out to be due to custom versions of
[Ruby](http://www.ruby-lang.org/) that I use a lot, usually via
[RVM](https://rvm.io/) (but not always).

There are two ways Vim can crash.

## Wrong ruby syndrome

The first is because when I compiled `vim` (using the `--enable-rubyinterp`
option) it grabbed whatever ruby is first in my `PATH`. Usually this is a ruby
compiled by RVM.

One of the things RVM can do (and usually does) is compile custom libraries
(such as `libyaml` or `libreadline`) to make the ruby work better. This is
great for using raw ruby, but within `vim` it causes it to crash because it
finds the non-RVM version of the library, loads it, and crashes.

In some cases `vim` and ruby are compiled with incompatible `CFLAGS` or even
with different compilers (`clang` vs. `gcc`).

The symptom for this is a crash the instance Vim tries to do _anything_ with
its built-in ruby interpreter.

This fix for this is when compiling `vim` to specify the ruby to use. For
example:

```bash
./configure ... --enable-rubyinterp --with-ruby-command=/usr/bin/ruby
```

## Wrong gem syndrome

This one may or may not causes crashes, depending on the gems you have. If you
only have pure-ruby gems then it may never cause a crash.

However, if you have `GEM_HOME` and `GEM_PATH` set (which RVM does for you)
then when you run Vim and try to load any gems it'll look in those paths.

If any of the gems to be loaded are compiled incompatibly (as above) then when
Vim's ruby interpreter loads them, `vim` will crash. `mysql2` and `nokogiri`
are two that cause `vim` to crash regularly for me in this case.

The solution is to unset `GEM_HOME` and `GEM_PATH` before running vim. I have
it aliased in my `~/.zshrc` file:

```bash
alias ex='env -u GEM_PATH -u GEM_HOME command ex'
alias gview='env -u GEM_PATH -u GEM_HOME command gview'
alias gvim='env -u GEM_PATH -u GEM_HOME command gvim'
alias gvimdiff='env -u GEM_PATH -u GEM_HOME command gvimdiff'
alias gvimex='env -u GEM_PATH -u GEM_HOME command gvimex'
alias mview='env -u GEM_PATH -u GEM_HOME command mview'
alias mvim='env -u GEM_PATH -u GEM_HOME command mvim'
alias mvimdiff='env -u GEM_PATH -u GEM_HOME command mvimdiff'
alias mvimex='env -u GEM_PATH -u GEM_HOME command mvimex'
alias rview='env -u GEM_PATH -u GEM_HOME command rview'
alias rvim='env -u GEM_PATH -u GEM_HOME command rvim'
alias view='env -u GEM_PATH -u GEM_HOME command view'
alias vim='env -u GEM_PATH -u GEM_HOME command vim'
alias vimdiff='env -u GEM_PATH -u GEM_HOME command vimdiff'
alias vimtutor='env -u GEM_PATH -u GEM_HOME command vimtutor'
alias xxd='env -u GEM_PATH -u GEM_HOME command xxd'
```

Rather gross but it works.

The downside of doing this is that things like omnicomplete will be looking at
the wrong list of Gemfiles. So either you get no completion for these gems, or
you need run `bundle install` with your system ruby, or you have to risk
crashing.

## Final thoughts

There has to be a better way to handle this. I'm unclear how `vim` is loading
the ruby interpreter, but I suspect that ruby just isn't designed right to
allow this work well.

I opened [bug 17313](https://github.com/Homebrew/legacy-homebrew/issues/17313)
with [Homebrew](http://brew.sh/), but the more I think about this the more I
think it is a Vim and Ruby problem.

Ciao!
