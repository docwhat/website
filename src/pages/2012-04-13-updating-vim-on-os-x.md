---
id: 841
title: Updating VIM on OS X
date: 2012-04-13T09:03:12-04:00
author: docwhat
layout: post
guid: http://docwhat.org/?p=841
permalink: /updating-vim-on-os-x/
openid_comments:
  - 'a:3:{i:0;s:4:"9121";i:1;i:9934;i:2;i:9936;}'
image: /files/2012/04/356023245659.png
categories:
  - docwhat
tags:
  - editors
  - OS X
  - Python
  - Ruby
  - vim
---
<p>The version of <a href="http://www.vim.org/">Vim</a> that comes with OS X is a little old, but more importantly, it doesn't have all the bells and whistles enabled.</p>

<p>Specifically, it doesn't come with ruby and python support compiled in. Which is a shame, because some plugins for Vim need it.
<!--more--></p>

<p>I've been playing with vim since a couple months ago when I was pair programming with a co-worker, Shawn. Shawn prefers Vim and he is very good at it.</p>

<p>To make pair programming easier, I decided to improve my very basic Vim skills.  As part of that, I created a new <code>.vimrc</code> based on Shawn's.  I then went further and included <a href="https://github.com/gmarik/vundle">Vundle</a> and started looking at various packages.</p>

<p>We used this <code>.vimrc</code> during our pair programming and pushed it up as a <a href="http://github.com/docwhat/homedir">Homedir</a> package at <a href="http://github.com/docwhat/homedir-vim">http://github.com/docwhat/homedir-vim</a>.  I've successfully used this .vimrc on Windows (via Cygwin) and Centos version 5.6 and 6.2, as well as on the Mac.  You can bypass <a href="http://github.com/docwhat/homedir">Homedir</a> entirely and just download the <a href="https://raw.github.com/docwhat/homedir-vim/master/vimrc/.vimrc"><code>.vimrc</code></a> directly.</p>

<p>However, to use some of the spiffy bits of my <code>.vimrc</code> on my Mac, I needed a vim with all the extras.  Here's how you do it easily:</p>

<ol>
<li>Install <a href="http://mxcl.github.com/homebrew/">Homebrew</a>.</li>
<li>Add the <a href="https://github.com/Homebrew/homebrew-dupes">duplicates "tap"</a>. This adds formulas for apps that duplicate the build-in OS X functionality: <code>brew tap homebrew/dupes</code></li>
<li>Install vim: <code>brew install homebrew/dupes/vim</code></li>
</ol>

<p>That's it. Easy-peasy!</p>

<p>Ciao!</p>
