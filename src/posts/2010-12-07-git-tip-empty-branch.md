---
id: 646
title: 'Git Tip: empty branch'
date: 2010-12-07T17:18:21-05:00
author: docwhat
template: post
guid: http://docwhat.org/?p=646
slug: /git-tip-empty-branch/
openid_comments:
  - 'a:1:{i:0;s:4:"9432";}'
image: /files/2010/12/got_git_tshirt-250x250.jpg
categories:
  - docwhat
tags:
  - git
  - tip
---

Ever wanted to make an empty branch (with no history in it) in git? It's not
hard...

Why would you want to do this? Well, for example, I have a new project in
github. I'm trying to implement it in several ways, jRuby, Java, Qt, etc. Having
separate branches is really handy.

Another reason you might want to do this is for upstream tracking. I used this
to cold-start a branch where I commit all the changes of an upstream project and
then merge them into my customized branch. Git makes tracking an upstream
project much easier.

Anyway, enough of that. Here's how to do it:

```bash
# WARNING: Make sure you've committed all your work...
#
# Point git at a new branch:
git symbolic-ref HEAD refs/heads/yournewbranch

# Remove the index file so it doesn't know about the files
# that are already checked out:
rm .git/index

# Clean up all the files that were checked out before:
git clean -xfd

# Done!
```
