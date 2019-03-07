---
date: '2012-03-06T10:28:53-05:00'
guid: 'http://docwhat.org/?p=837'
id: '837'
image: '/files/2012/03/view\_git-logo-250x250.png'
slug: '/git-gc-for-a-bunch-of-directories/'
tags:
    - git
    - maintenance
template: post
title: git gc for a bunch of directories
---

Every so often, you might want to run
[`git gc`](http://stackoverflow.com/questions/55729/how-often-should-you-use-git-gc)
to keep your [`git`](http://git-scm.com/) repositories running fast. Here's an
easy way to do that.

<!-- more -->

Assuming you have your git repositories in `~/projects`:

```bash
find ~/projects -name '.git' -type d -print0 | xargs -0 -Iq env GIT_DIR=q git gc
```

This works for [`git fsck`](http://book.git-scm.com/4_maintaining_git.html) as
well.

Ciao!
