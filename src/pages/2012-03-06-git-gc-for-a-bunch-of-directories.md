---
id: 837
title: git gc for a bunch of directories
date: 2012-03-06T10:28:53-05:00
author: docwhat
template: post
guid: http://docwhat.org/?p=837
slug: /git-gc-for-a-bunch-of-directories/
image: /files/2012/03/view_git-logo-250x250.png
categories:
  - docwhat
tags:
  - git
  - maintenance
---
<p>Every so often, you might want to run <a href="http://stackoverflow.com/questions/55729/how-often-should-you-use-git-gc"><code>git gc</code></a> to keep your <a href="http://git-scm.com/"><code>git</code></a> repositories running fast.  Here's an easy way to do that...</p>

<p>Assuming you have your git repositories in <code>~/projects</code>:</p>

<pre><code>find ~/projects -name '.git' -type d -print0 | xargs -0 -Iq env GIT_DIR=q git gc
</code></pre>

<p>This works for <a href="http://book.git-scm.com/4_maintaining_git.html"><code>git fsck</code></a> as well.</p>

<p>Ciao!</p>
