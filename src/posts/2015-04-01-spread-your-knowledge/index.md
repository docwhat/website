---
id: 1603
title: Spread your knowledge
date: 2015-04-01T12:25:49-04:00
template: post
slug: /spread-your-knowledge/
image: /files/2015/04/share_knowledge-250x250.png
---

I found myself trying to figure out how to disable something called
[NeoComplete](https://github.com/Shougo/neocomplete.vim) (previously known as
[NeoComplCache](https://github.com/Shougo/neocomplcache.vim)) when editing
markdown in Vim.

It was colliding with my Markdown stuff pretty badly and had really bad
suggestions anyway (I mean, I'm writing text, not code... so no surprise) and I
was getting annoyed of turning it off by hand.

So I Googled for a solution and I found someones `.vimrc` and while it was
written for NeoComplCache, it was easy to just change all the `NeoComplCache`
strings to `NeoComplete`.

My `.vimrc` actually tries to use NeoComplete and if I can't run it (i.e. Vim
isn't new enough or doesn't have Lua compiled in) then I fall back to
NeoComplCache.

So I went to check if I had similar code for NeoComplCache... and I did. In
fact, it was the same code.

"Huh", I thought, "I must've _borrowed_ this from the same `.vimrc` earlier"

I double checked the URL of the `.vimrc` I was _borrowing_ code from... and it
was mine. On
[GitHub](https://raw.githubusercontent.com/docwhat/homedir-vim/master/vimrc/.vimrc).

---

Some co-workers were trying to reimplement our builds to use
[CMake](http://www.cmake.org/). They were having trouble using `xsltproc` to
"compile" files (e.g. convert them from `.xml` to something else).

Guess what they
[found](http://stackoverflow.com/questions/3417120/how-can-i-use-cmake-with-xsltproc-as-the-compiler).

---

I used to work with the talented [Carol](http://carol-nichols.com/). She left
the company and went to work elsewhere.

When I next saw her, she stomped up to me and complained:

> Whenever I Google for the answer to something, you're there! Question on
> StackOverflow? You answered it. I go to file a bug on GitHub, you've already
> filed it or commented on it. Why won't you go away?!?!

She was kidding... I think.

But the point is, I spend a lot of time contributing back to the community. Not
necessarily by writing code (I do that, too) but by filing bugs, answering
questions, adding helpful comments to issues, etc.

It isn't that hard to write a bug, answer a question, etc. and it can be really
helpful for others... or drive them mad.
