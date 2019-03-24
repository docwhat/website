---
id: '1300'
title: Tracebacks in bash
date: '2013-06-29'
author: docwhat

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
[`bash`](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>). It's not a very
pretty language. But it has one advantage over a lot of other languages:

It's on your system. Every Unix-like system has `/bin/bash`; Redhat, Ubuntu,
and even OS X.

But bash is still a lousy language.

This is where bash tracebacks come in...

_"Whaaaaa? Bash has tracebacks?"_ I can hear you ask.

Yup, it can.

<!-- more -->

Check out the gist below. It is both a demonstration of the traceback as well
as a template; grab the bits between the "cut here" and paste it into your own
program.

`embed:gist-5889193/traceback_example.bash`

The gist (pun intended) of it that it traps `ERR` and `EXIT` interrupts in the
shell. It then walks the `FUNCNAME`, `BASH_SOURCE`, and `BASH_LINENO` arrays
to show where the callers were.

There is a little extra bits to ensure the traceback function itself doesn't
appear in the output and to format it nicely.

Not only are the tracebacks useful, but they make using `set -eu` much less
painful. And you _are_ using `set -eu` in your bash programs, right? _Right?_

I hope it is useful. If you have suggestions or questions, just ask!

Ciao!
