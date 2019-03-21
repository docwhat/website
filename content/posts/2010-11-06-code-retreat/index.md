---
id: '631'
title: Code Retreat
date: '2010-11-06'
template: post
slug: /code-retreat/
image: /files/2010/11/foo.png
tags:
    - bash
    - programming
    - Ruby
---

I had a wonderful time today doing a
[Code Retreat](http://coderetreat.com/how-it-works.html) at my
[work](http://vivisimo.com/).

The principle is simple. You spend 45 minutes pair programming with someone
writing code for
[Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life).
When the 45 minutes are up, you delete all your code, take a break, and do it
again with a different partner.

<!-- more -->

I was skeptical but it was fun and interesting. We threw in the additional
curve that we could use whatever language the pair wanted to do. Some examples
included Ruby, Java (aka COBOL part 2), JavaScript (the coolest unloved
language), and Bash.

Yup, I did the Game of Life in Bash. And I saved it. Don't tell anyone, I
sneaked it out under my shirt when no one was looking, just for you to read. I
cleaned it up a little, fixed a bug with playing fields that didn't have the
same height and width, added more patterns, and added some help.

Check it out. It's slow, but it works.

`embed:life/life.sh`

The important bits are the `while` loop at the end and the function
`neighbor_count`. The rest is pretty straightforward.

Since bash doesn't have multi-dimensional arrays, we made do with
one-dimensional arrays. This wasn't that bad, other than the fact that I
figure out math problems experimentally.

I'll have a latest version of this at
[GitHub](https://github.com/docwhat/life), in case I figure out a way to make
it faster.

Ciao!</rows></columns></rows>
