---
id: '769'
title: Undoing a rails generate
date: '2011-09-08'
slug: /undoing-a-rails-generate/
image: /files/2011/09/rails.png
tags:
    - ruby
---

I just learned this today, while taking a
[Ruby on Rails](http://rubyonrails.org/) class from
[Jumpstart Lab](http://jumpstartlab.com/).

I have, many times, messed up a `rails generate` command. For example, using
singular where plural is needed or the reverse.

Today, I learned that you can undo a generate by using `rails destroy` with
the same arguments you used for the generate command.

Example:

```bash
rails generate controller article
# Oops!
rails destroy controller article
rails generate controller articles
```

Apparently only a few of us in class knew about this during this class.

I'd worked around not knowing this by using `git` to commit everything and
then reverting everything if I messed up.

Why doesn't a generate command show a message explaining that it can be undone
with destroy? It'd be really really helpful.

Ciao!

<ins datetime="2011-09-09T18:44:05+00:00">PS:</ins> I also discovered you can
"redo" the last migration as well, which is really handy as well for repairing
mistakes:

```bash
rake db:migrate:redo
```
