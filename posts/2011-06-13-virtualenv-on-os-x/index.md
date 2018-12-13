---
date: '2011-06-13T17:19:06-04:00'
id: '716'
image: '/files/2011/06/xcode.png'
slug: '/virtualenv-on-os-x/'
tags:
    - OS X
    - Python
template: post
title: Virtualenv on OS X
---

So I decided to try to install
[virtualenvwrapper](http://www.doughellmann.com/projects/virtualenvwrapper/)
(and virtualenv) on my Mac Book Pro. Virtualenv was explained to me as being
python's version of Wayne E. Seguin's RVM (Ruby Version Manager).

I've tried installing virtualenv/wrapper twice before and failed miserably.
But this time I decided to actually do it.<!-- more -->

Some quick background: I've been a very active python programmer up to and
including 2.5 series. I've implemented large python-based systems at several
of the companies I've worked for; including two very successful web
applications. I've implemented two ORMs in python and even grokked
meta-programming in python.

But that was several years ago. I've not really done much programming in
python since 2007 or so. Except for some smaller utilities. I've since started
working with Ruby, heavily in the last year, and am really liking it. It took
me a while to understand what the underlying philosophy was about but I get it
now. Other than some ugly warts (threading in 1.9 acts differently on
different OSes and a lot of base classes/types are privileged and don't deal
well with being overridden) Ruby is pretty spiffy.

Since I've last done serious programming in python, it has gotten
`easy_install` (it existed, but was beta), `pip`, and the `.egg` package
format. All big improvements.

Anyway, back to virtualenv/wrapper.

The biggest hurdle the first times I tried installing (and this time too) was
that I didn't understand what virtualenv and virtualenvwrapper are.

For those who don't know:

Virtualenv does _not_ install new python versions. You need the versions
installed some other way (such as a package manager or compiling them
yourself). It is a way to manage python packages and libraries. If you're
familiar with RVM, then it's basically a way to do `rvm gemset` for python.

However, virtualenv is clunky to use... allegedly, I've not played with it.

Fortunately, we have virtualenvwrapper to make life easier! This is similar to
RVM in the way it is designed -- it's a bunch of shell functions you source
into your shell. You then get commands like:

`mkvirtualenv` Creates a new virtual environment (a python gemset, if you
will).

`rmvirtualenv` Three guesses and the first two don't count.

`workon <env>` Sets which environment to work on. If you don't specify one,
then it'll list them all. Sort of like `rvm use`.

`deactivate` Deactivate your python environments. Sort of the equivalent of
`rvm use system`.

## The instructions

So here's how I installed virtualenv/wrapper on OS-X:

### Install X Code

[X Code](http://itunes.apple.com/us/app/xcode/id422352214) is the developer
tools for Mac OS X. It includes the classic tools like `gcc`, `make`, etc. as
well as some spiffy Apple designed tools. It's only \$4.99 and worth the price
if you're going to do any development on your Mac.

Warning: The download is huge.

### Install homebrew

I installed [homebrew](https://github.com/mxcl/homebrew). Actually, I've had
it for while, but if you're following this on a new Mac, you might want to
know that I had installed it. The instructions are straightforward so I won't
repeat them here.

### Install python 2.7

This is optional, I suspect. I didn't play with installing virtualenv/wrapper
on the system's python. I try to leave the system stuff alone, if possible. It
saves me headaches later. Especially if I mess something and need to try
again.

```bash
brew install readline sqlite gdbm
brew install python --universal
```

I do this in two steps because:

1.  I wanted to ensure the dependencies for python are installed before
    python. Homebrew is getting better with dependencies but it isn't perfect.
    If they aren't installed before, then you would have to uninstall and
    re-install python to get python notice them.
2.  I want to make python --universal so I can build 32bit and 64bit versions.

### Install pip

So this was something that confused me greatly, but I eventually figured it
out.

You need to run `easy_install`, but I couldn't figure out where `easy_install`
was in Homebrew. I looked all over and didn't find it.

Fortunately, I got frustrated and tried uninstalling and re-installing python
and sow this message at the end of the python install:

```text
A "distutils.cfg" has been written, specifing the install-scripts folder as:
  /usr/local/share/python

If you install Python packages via "python setup.py install", easy_install, pip,
any provided scripts will go into the install-scripts folder above, so you may
want to add it to your PATH.

Distribute has been installed, so easy_install is available.
To update distribute itself outside of Homebrew:
    /usr/local/share/python/easy_install pip
    /usr/local/share/python/pip install --upgrade distribute
```

Yay! Now I know where `easy_install`...and hey, those are the instructions for
installing `pip`!

```bash
/usr/local/share/python/easy_install pip
```

Install virtualenvwrapper

This also installs virtualenv as well.

```bash
/usr/local/share/python/pip install virtualenvwrapper
mkdir ~/.virtualenvs
```

I'm not sure the `mkdir` is needed, but I kept seeing it in various
instructions.

### Configure your shell

I use excellent [zsh](http://zsh.sourceforge.net/) as my command line shell.
Even though I write shell scripts in
[borne again shell](http://www.gnu.org/software/bash/bash.html) (because it's
more common).

I added this to my zsh startup scripts:

```bash
# Setting up the VirtualEnv
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python2.7
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS='--no-site-packages'
export PIP_VIRTUALENV_BASE=$WORKON_HOME
export PIP_RESPECT_VIRTUALENV=true

if [[ -r /usr/local/share/python/virtualenvwrapper.sh ]]; then
    source /usr/local/share/python/virtualenvwrapper.sh
else
    echo "WARNING: Can't find virtualenvwrapper.sh"
fi
```

This does a couple of things:

1.  It sets the home for virtual envs.
2.  Uses python2.7 by default.
3.  Tells it not to install site-packages. I don't plan on installing any into
    homebrew's python, but just in case.
4.  Tells pip to honor the virtualenv stuff.

The last bit was the part I banged my head on the most, even though I didn't
know it. I was following some instructions on installing virtualenvwrappers
and they left that part out. Commands like `mkvirtualenv` are shell functions.
`virtualenvwrapper.sh` contains those functions. I kept looking for shell
scripts or programs or something.

I put a conditional and a warning around it incase I change homebrew or
uninstall something.

## Conclusion

So hopefully someone finds this useful. If not, I'll refer back to it at some
point in the future when I need to redo all this for some reason. I'll have
forgotten it all by then.

Ciao!
