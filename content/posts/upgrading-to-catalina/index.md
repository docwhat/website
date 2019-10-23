---
title: For those upgrading to macOS Catalina
date: '2019-10-23'
slug: upgrading-to-catalina
id: abac4191-831e-402d-9f71-f21fdb9435f5
draft: true
banner:
    credits: 'Photo by Tania Miron'
    image: 'tania-miron-nOl7TYYFnkU-unsplash.jpg'
    sourceUrl: 'tania-miron-nOl7TYYFnkU-unsplash.jpg'
---

Catalina (macOS 1.15) comes with tighter security.

Tighter security can cause headaches for developers.

I'm here to help out by providing you with some handy fixes.

To allow running any program from your command line terminal:

1. Open the "Security & Privacy" system preference.
1. Click the "Privacy" tab.
1. Scroll down to "Developer Tools". If "Developer Tools" is missing, you need
   to upgrade _X-Code_ first; see below.
1. Add and enable (check the box) for all the terminal programs you use.

    Some examples:

    - `Terminal.app`
    - `iTerm.app`
    - `kitty.app`

The "Developer Tools" access permission allows the terminals to _ignore_ the
quarantine flag and most "Security Assessment" rejections.

## The quarantine flag

This is the biggest cause of issues and has been since Apple started
tightening security down.

Removing the quarantine flag will fix most problems.

To see the quarantine flag:

```console
$ xattr -p com.apple.quarantine <name-of-executable>
0082;5db07289;Safari;
```

To remove the quarantine flag:

```console
$ xattr -d com.apple.quarantine <name-of-executable>
# OR for .app bundles
$ xattr -d -r com.apple.quarantine <name-of-app>.app
```

## Security Assessment

It's unlikely that a security assessment rejection can cause.

Just in case though...

To see an assessment:

```console
$ spctl --assess <name-of-executable-or-app>
<name-of-executable-or-app>: rejected
```

To approve the executable

```console
$ spctl --add --label 'Approved' <name-of-executable-or-.app>
```

## Upgrading X-Code

If the App Store said something about failing to update _X-Code_ then you have
to delete _X-Code_ and then re-install it.

Apparently this triggers when upgrading from 11 to 11.1 after upgrading to
Catalina.

Once deleted, the App Store will take about 30 seconds to remove it from the
**Updates** page.

When _X-Code_ disappears, you can re-install it and all should be well again.

If _X-Code_ doesn’t disappear from the Updates page then you may have to use
something like [AppCleaner](http://freemacsoft.net/appcleaner/) to remove the
bits left over.
