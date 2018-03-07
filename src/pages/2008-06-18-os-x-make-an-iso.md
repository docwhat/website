---
id: 97
title: 'OS X: Make an ISO'
date: 2008-06-18T17:26:53+00:00
author: docwhat
template: post
guid: http://docwhat.gerf.org/?p=97
slug: /os-x-make-an-iso/
title_tag:
  - ""
openid_comments:
  - 'a:1:{i:0;s:4:"8180";}'
categories:
  - docwhat
tags:
  - howto
  - OS X
---
You can use <code>Disk Utility</code> to create ISO images in Mac OS X:
<ol>
	<li>Click "New Image+" on the tool bar</li>
	<li>For "Image Format" select "CD/DVD Master"</li>
	<li>For "Encryption" leave it at "none"</li>
	<li>Rename the resulting <code>.cdr</code> file to <code>.iso</code></li>
</ol>
I found this handy hint on the internets as well. To convert a <code>.dmg</code> file, you can use hdiutil to convert it!



<code>hdiutil convert original.dmg -format UDTO -o newisoimage.cdr</code>

Like above, it insists on naming it <code>.cdr</code> instead of <code>.iso</code>.

Ciao!