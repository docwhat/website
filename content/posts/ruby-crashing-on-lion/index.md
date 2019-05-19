---
id: '752'
title: Ruby crashing on Lion
date: '2011-08-16'
image: /files/2011/08/ruby.png
tags:
    - OS X
    - Ruby
---

Apparently Ruby doesn't work well (or barely at all) with Lion and X Code 4.1

In fact, it crashes with gusto when compiled with X Code 4.1... **UNLESS** you
know the magic words!

<!-- more -->

I'm unclear how ruby 1.8.7 crashes and burns, but `1.9.2-p290` crashes with
annoying (yet seemingly random) regularity. It looks like, at the minimum,
threading is definitely having a problem with LLVM. You can test it out
yourself, if you have had the misfortune of installing ruby on Lion before
reading this...

```ruby
# This will make  LLVM compiled OS-X Ruby
# fall down and go boom.
Fiber.new {}.resume
```

Fortunately, the fix is simple. Put this in your `~/.bashrc` or
equivalent-shell-startup file:

```bash
export CC=/usr/bin/gcc-4.2
```

That line forces any project to compile using GNU `gcc` instead of LLVM's
`gcc`. Not ideal, but at least Ruby works.

If you've already installed a ruby or two or compiled any native extensions
using the `llvm-gcc` then you'll have to remove them (replace the ruby version
with version you're working with):

```bash
$ rvm remove ruby-1.9.2-p290
$ rvm install ruby-1.9.2-p290
$ gem pristine --all          # Rebuilds all natively built gems
                              # ...repeat for all gemsets. *sigh*
```

I went for the nuclear option since I wasn't sure what was broken and what
okay. **Warning:** this command will destroy everything in `~/.rvm`, including
any customizations you've set therein.

```bash
rvm implode
bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)
```

Then I had to reinstall all the rubies I use and reset up any gemsets.

I hope this helps someone.
