---
id: 1093
title: 'vim - preserve your cursor and window state'
date: 2012-06-22T12:12:05-04:00
author: docwhat
template: post
guid: http://docwhat.org/?p=1093
slug: /vim-preserve-your-cursor-and-window-state/
image: /files/2012/04/356023245659.png
categories:
  - docwhat
tags:
  - vim
---
In vim, you can re-indent a whole buffer by using `gg=G` in normal mode.  I like this command so much I have it mapped to `<leader>g</leader>`.

This is great except that you loose your cursor (and window) position.<!-- more -->

I found the post [_Preserve: A Vim function that keeps your state_](http://technotales.wordpress.com/2010/03/31/preserve-a-vim-function-that-keeps-your-state/) that describes a function called `Preserve` that saves the search history and cursor position.  It doesn't save the window position, so the screen still jumps around.

I have come up with a better `Preserve`:

<Gist id=2973488 file=function.vim></Gist>

This is super useful, for example:

<Gist id=2973488 file=example1.vim></Gist>

Ciao!
