---
id: '97'
title: 'OS X: Make an ISO'
date: '2008-06-18'
tags:
    - macOS
---

You can use `Disk Utility` to create ISO images in Mac OS X:

1.  Click "New Image+" on the tool bar
2.  For "Image Format" select "CD/DVD Master"
3.  For "Encryption" leave it at "none"
4.  Rename the resulting `.cdr` file to `.iso`

I found this handy hint on the Internet as well. To convert a `.dmg` file, you
can use `hdiutil` to convert it!

<!-- more -->

```bash
hdiutil convert original.dmg -format UDTO -o newisoimage.cdr
```

Like above, it insists on naming it `.cdr` instead of `.iso`.

Ciao!
