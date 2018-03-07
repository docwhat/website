---
id: 1300
title: Tracebacks in bash
date: 2013-06-29T09:05:33-04:00
author: docwhat
template: post
guid: https://docwhat.org/?p=1300
slug: /tracebacks-in-bash/
openid_comments:
  - 'a:1:{i:0;i:9945;}'
image: /files/2013/06/argonaut_shell-250x187.jpg
categories:
  - docwhat
tags:
  - bash
  - programming
---
I don't like to write programs in
[`bash`](https://en.wikipedia.org/wiki/Bash_(Unix_shell)). It's not a
very pretty language. But it has one advantage over a lot of other
languages:

It's on your system. Every Unix-like system has `/bin/bash`; Redhat,
Ubuntu, and even OS X.

But bash is still a lousy language.

This is where bash tracebacks come in...

*"Whaaaaa? Bash has tracebacks?"* I can hear you ask.

Yup, it can.

Check out the gist below. It is both a demonstration of the traceback as
well as a template; grab the bits between the "cut here" and paste it
into your own program.

<Gist id=5889193></Gist>

The gist (pun intended) of it that it traps `ERR` and `EXIT` interrupts
in the shell. It then walks the `FUNCNAME`, `BASH_SOURCE`, and
`BASH_LINENO` arrays to show where the callers were.

There is a little extra bits to ensure the traceback function itself
doesn't appear in the output and to format it nicely.

Not only are the tracebacks useful, but they make using `set -eu` much
less painful. And you *are* using `set -eu` in your bash programs,
right? *Right?*

I hope it is useful. If you have suggestions or questions, just ask!

Ciao!
