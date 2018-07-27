---
id: "526"
title: Ruby Debugging
date: 2010-03-29T17:29:39+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=526
slug: /ruby-debug/
enclosure:
  - |
    http://cardero.textdrive.com/~eventualbuddha/ruby-debug-1-basics.mov
    2901355
    video/quicktime
    
categories:
  - docwhat
tags:
  - debugging
  - Ruby
---

There is a ruby-debugger gem which is very handy for trouble shooting problems
in a ruby script. The built in debugging is quite powerful and worth learning to
use.

First off, install ruby-debug:

```bash
# If using ruby1.8
$ gem install ruby-debug

# If using ruby 1.9.1
$ gem install ruby-debug19
```

Next: Watch this video....

- [Link to blog post](http://brian.maybeyoureinsane.net/blog/2007/05/07/ruby-debug-basics-screencast/)
- [Link to video: Basics of Ruby Debug](http://cardero.textdrive.com/~eventualbuddha/ruby-debug-1-basics.mov)

The big thing to remember is `help` is your friend.

Finally: A handy `~/.rdebugrc` file:

```bash
# rdebugrc
set autolist   on
set autoeval   on
set autoreload on
# EOF
```

Ciao!
