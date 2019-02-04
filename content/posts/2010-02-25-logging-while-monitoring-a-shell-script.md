---
id: '511'
title: Logging while monitoring a shell script
date: 2010-02-25T11:45:43+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=511
slug: /logging-while-monitoring-a-shell-script/
categories:
    - docwhat
tags:
    - bash
    - programming
    - shell
---

You may be familiar with redirecting the output of your shell script to a file
using `exec`

However, what do you do if you want monitor the output while logging at the
same time? I just figured this out (probably again, since I tend to forget
things... which is why I'm blogging this).

WARNING: This is bash-specific. While I prefer [ZSH](http://zsh.org/) for my
personal shell, I generally code in bash because it is everywhere.

```bash
# Logs only stdout
exec > >(tee "somefile.log")

# Logs stderr and stdout to separate files.
exec 2> >(tee "somefile.err")
exec > >(tee "somefile.log")

# Logs stderr and stdout to the same file.
exec > >(tee "somefile.log")
exec 2>&1
```

I got it from Naked Ape's
[Shell Hacks](http://nakedape.cc/wiki/ShellHacks#head-de8dfd2d082bafe4d128663f71cff0e298084e30).

This is apparently called
[process substitution](http://tldp.org/LDP/abs/html/process-sub.html).

Ciao!
