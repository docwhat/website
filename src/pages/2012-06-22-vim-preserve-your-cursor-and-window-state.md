---
id: 1093
title: 'vim - preserve your cursor and window state'
date: 2012-06-22T12:12:05-04:00
author: docwhat
layout: post
guid: http://docwhat.org/?p=1093
permalink: /vim-preserve-your-cursor-and-window-state/
image: /files/2012/04/356023245659.png
categories:
  - docwhat
tags:
  - vim
---
In vim, you can re-indent a whole buffer by using `gg=G` in normal mode.  I like this command so much I have it mapped to `<leader>g</leader>`.

This is great except that you loose your cursor (and window) position.<!--more-->

I found the post [_Preserve: A Vim function that keeps your state_](http://technotales.wordpress.com/2010/03/31/preserve-a-vim-function-that-keeps-your-state/) that describes a function called `Preserve` that saves the search history and cursor position.  It doesn't save the window position, so the screen still jumps around.

I have come up with a better `Preserve`:

``` viml
" A wrapper function to restore the cursor position, window position,
" and last search after running a command.
function! Preserve(command)
  " Save the last search
  let last_search=@/
  " Save the current cursor position
  let save_cursor = getpos(".")
  " Save the window position
  normal H
  let save_window = getpos(".")
  call setpos('.', save_cursor)

  " Do the business:
  execute a:command

  " Restore the last_search
  let @/=last_search
  " Restore the window position
  call setpos('.', save_window)
  normal zt
  " Restore the cursor position
  call setpos('.', save_cursor)
endfunction
```

This is super useful, for example:

``` viml
" Re-indents buffer.
nmap <silent> <Leader>g :call Preserve("normal gg=G")<CR>
" Removes all trailing whitespace in buffer.
nmap <silent> <Leader><space> :call Preserve("%s/\\s\\+$//e")<CR>
```

Ciao!
