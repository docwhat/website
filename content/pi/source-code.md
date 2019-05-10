---
date: '2019-02-23'
title: Source Code and Inline
---

## Fence blocks

```js
var fish = 123
var cat = 'meow'
```

```bash{1,7}
#!/bin/sh

set -eux

# do something

echo "Done"
```

```terminal
$ pwd
/Users/docwhat/bin
# ls -l --color=always | aha -b -n | pbcopy
$ ls -l
total 65356
lrwxr-xr-x 1 docwhat staff       44 Feb 26 19:01 24-bit-color.sh -> /Users/docwhat/.dotfiles/bin/24-bit-color.sh*
-rwxr-xr-x 1 docwhat staff     1574 Oct 31  2013 256-xterm-colors*
lrwxr-xr-x 1 docwhat staff       59 Mar  1 23:22 add-nodejs-cli-tool -> /Users/docwhat/.dotfiles/tag-nodejs/bin/add-nodejs-cli-tool*
lrwxr-xr-x 1 docwhat staff       44 Mar  2 00:45 alex -> /Users/docwhat/.dotfiles/tag-nodejs/bin/alex*
-rwxr-xr-x 1 docwhat staff    13570 Jul 13  2013 asciiio*
lrwxr-xr-x 1 docwhat staff       43 Feb 26 19:01 check-http-304 -> /Users/docwhat/.dotfiles/bin/check-http-304*
lrwxr-xr-x 1 docwhat staff       40 Feb 26 19:01 check-terms -> /Users/docwhat/.dotfiles/bin/check-terms*
-rwxr-xr-x 1 docwhat staff      427 Nov  2  2016 check-well-known.sh*
-rwxr-xr-x 1 docwhat staff     1330 Mar 24  2016 chronic-*
-rw-r--r-- 1 docwhat staff      254 Apr 21  2017 codeclimate
lrwxr-xr-x 1 docwhat staff       33 Feb 26 19:01 codi -> /Users/docwhat/.dotfiles/bin/codi*
```

```git{numberLines: 993}
$ git log -3
commit 16f940dcc0fecec62e8f0e0b8527f0068c6436cb
Author: Christian Holtje <docwhat@gerf.org>
Date:   Thu Mar 15 14:12:12 2018 -0400

    add wordcount to microdata

commit b20894634d77257728e07c9bdfa4afa8e238a077
Author: Christian Holtje <docwhat@gerf.org>
Date:   Thu Mar 15 13:56:21 2018 -0400

    add 404 page

commit 53e8a2e9be4a0b55b624cd44cf79baad6f40602f
Author: Christian Holtje <docwhat@gerf.org>
Date:   Thu Mar 15 13:45:09 2018 -0400

    dates are not required for PageHeader

$ git show 102b7d0
commit 102b7d0cb0003316593042012f30cfc82e90f3e7
Author: Christian Höltje <docwhat@gerf.org>
Date:   Mon Feb 18 02:45:59 2019 -0500

    testing date format

diff --git a/content/posts/2018-07-26-vim-indirect-variable-access/index.md b/content/posts/2018-07-26-vim-indirect-variable-access/index.md
index 8b53e78..140aea6 100644
--- a/content/posts/2018-07-26-vim-indirect-variable-access/index.md
+++ b/content/posts/2018-07-26-vim-indirect-variable-access/index.md
@@ -1,6 +1,6 @@
 ---
 title: 'Vim: indirect variable access'
-date: 2018-07-27T01:54:39.334Z
+date: 2018-07-27
 slug: vim-indirect-variable-access
 id: cd4295aa-fb12-4f7c-9536-ce9a6e642880
 template: post
```

```
=========1=========2=========3=========4=========5=========6=========7=========8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
```

### Inline

This is how you find all `css` files: `find . -name '*.css' -type f -print`,
indeed.

And you can use `css›.some-class { background-color: #def }` to set colors.

### Example files

`embed:gist-2973488/function.vim`
