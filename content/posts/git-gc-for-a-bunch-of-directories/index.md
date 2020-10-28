---
date: '2012-03-06'

id: '837'
image: '/files/2012/03/view\_git-logo-250x250.png'
tags:
    - git
    - maintenance
title: git maintenance run for a bunch of directories
---

Every so often, you might want to run
[`git maintenance run --auto`](https://book.git-scm.com/docs/git-maintenance)
to keep your [`git`](http://git-scm.com/) repositories running fast. Here's an
easy way to do that.

Using `xargs`:

```sh
find ~/ -name '.git' -type d -print0 |
    xargs -0 -I'{}' git --git-dir='{}' maintenance run --auto
```

Using GNU [`parallel`](https://savannah.gnu.org/projects/parallel/):

```sh
find ~/ -name '.git' -type d -print0 |
    parallel -0 --halt soon,fail=1 "git --git-dir={} maintenance run --auto"
```
