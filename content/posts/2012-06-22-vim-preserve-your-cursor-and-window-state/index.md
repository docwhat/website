---
id: '1093'
title: 'vim - preserve your cursor and window state'
date: '2012-06-22'
template: post
slug: /vim-preserve-your-cursor-and-window-state/
image: /files/2012/04/356023245659.png
tags:
    - vim
---

In vim, you can re-indent a whole buffer by using `gg=G` in normal mode. I
like this command so much I have it mapped to `<leader>g</leader>`.

This is great except that you loose your cursor (and window)
position.<!-- more -->

I found the post
[_Preserve: A Vim function that keeps your state_](http://technotales.wordpress.com/2010/03/31/preserve-a-vim-function-that-keeps-your-state/)
that describes a function called `Preserve` that saves the search history and
cursor position. It doesn't save the window position, so the screen still
jumps around.

I have come up with a better `Preserve`:

`embed:gist-2973488/function.vim`

This is super useful, for example:

`embed:gist-2973488/example1.vim`

Ciao!
