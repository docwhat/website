---
title: 'Vim: indirect variable access'
date: 2018-07-27T01:54:39.334Z
slug: vim-indirect-variable-access
id: cd4295aa-fb12-4f7c-9536-ce9a6e642880
template: post
banner:
    url: 'tuesday-temptation-550409-unsplash.jpg'
    author:
        name: 'Tuesday Temptation'
        url: 'https://unsplash.com/photos/ffB7ct610dw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
---

![](tuesday-temptation-550409-unsplash.jpg)

In Vim you can use a variable as a variable name.

Instead of using the variable name directly, wrap it in curly braces (`{}`).
This will use the contents of the variable as the variable name.

```vim
let l:variable_name = 'b:infosec_username'
let {l:variable_name} = 'George'

echo exists(l:variable_name) " => 1
echo {l:variable_name} " => George
```

You can see how I used it my ftplugin files, such as `markdown.vim` on lines
[line 2](https://github.com/docwhat/dotfiles/blob/1b255b2f92bcf70ba8a8737f79200cd77188d9a9/tag-neovim/config/nvim/ftplugin/markdown.vim#L2)
and
[line 34](https://github.com/docwhat/dotfiles/blob/1b255b2f92bcf70ba8a8737f79200cd77188d9a9/tag-neovim/config/nvim/ftplugin/markdown.vim#L34).

```vim
" Prevents multiple invocations
let s:guard = 'b:did_ftplugin_markdown' | if exists(s:guard) | finish | endif

" ...
" Important ftplugin code.
" ...

let {s:guard} = 1 " EOF
```

This makes cutting and pasting this between ftplugins much easier and less
error prone.
