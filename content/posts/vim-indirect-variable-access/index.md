---
title: 'Vim: indirect variable access'
date: '2018-07-26'
id: 'cd4295aa-fb12-4f7c-9536-ce9a6e642880'
banner:
    credits: 'Photo by Tuesday Temptation'
    image: 'tuesday-temptation-550409-unsplash.jpg'
    sourceUrl: 'https://unsplash.com/photos/ffB7ct610dw'
---

In Vim you can use a variable as a variable name.

Instead of using the variable name directly, wrap it in curly braces (`{}`).
This will use the contents of the variable as the variable name.

```vim{numberLines: true}
let l:variable_name = 'b:infosec_username'
let {l:variable_name} = 'George'

echo exists(l:variable_name) " => 1
echo {l:variable_name} " => George
```

<!-- more -->

You can see how I used it my ftplugin files, such as `markdown.vim` on lines
[line 2](https://github.com/docwhat/dotfiles/blob/1b255b2f92bcf70ba8a8737f79200cd77188d9a9/tag-neovim/config/nvim/ftplugin/markdown.vim#L2)
and
[line 34](https://github.com/docwhat/dotfiles/blob/1b255b2f92bcf70ba8a8737f79200cd77188d9a9/tag-neovim/config/nvim/ftplugin/markdown.vim#L34).

```vim{2,8}
" Prevents multiple invocations
let s:guard = 'b:did_ftplugin_markdown' | if exists(s:guard) | finish | endif

" ...
" Important ftplugin code.
" ...

let {s:guard} = 1 " EOF
```

This makes cutting and pasting this between ftplugins much easier and less
error prone.
