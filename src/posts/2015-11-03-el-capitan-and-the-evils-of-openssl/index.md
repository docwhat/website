---
id: 1709
title: El Capitan and the evils of OpenSSL
date: 2015-11-03T10:48:52-05:00
author: docwhat
template: post
slug: /el-capitan-and-the-evils-of-openssl/
image: /files/2011/09/derp.png
categories:
  - docwhat
tags:
  - OS X
---

Are you having trouble with SSL on El Capitan (OS X 10.11)?

Me too.

<br style="clear:both"/>Here are the things I know about it right
now:

1.  OS X's OpenSSL is ancient (0.9.8-ish).
1.  <ins datetime="2016-08-23T14:57:34+00:00">OS X's preferred SSL
    library is SecureTransport which is modern and secure.</ins>
1.  <ins datetime="2016-08-23T14:57:34+00:00">Some programs compiled
    with OpenSSL seem to use SecureTransport unless an
    OpenSSL-specific feature is requested (e.g. `SSL_CERT_FILE` or
    `SSL_CERT_DIR` is set).</ins>
1.  <del datetime="2016-08-23T14:57:34+00:00">SecureTransport (OS
    X's replacement for OpenSSL) may fall back to using OpenSSL if
    the environment variable `SSL_CERT_FILE` is set.</del>
1.  Lots of places are "cross-signing" their intermediate certs to
    upgrade from SHA-1 to SHA-2 for security reasons.
1.  OS X's OpenSSL cannot handle the intermediate cross-signing and
    report that it cannot verify certificates. SecureTransport
    handles this just fine.
1.  [HomeBrew](http://brew.sh/) applications usually don't support
    SecureTransport and instead use HomeBrew's OpenSSL.
1.  `/usr/bin/curl` uses SecureTransport directly, unless you set
    `SSL_CERT_FILE` (see above).

Normally, the above is just fine assuming you don't set the
`SSL_CERT_FILE` environment variable.

However, if you work for a company that uses internal certificates
then life begins to suck.

Usually <ins datetime="2016-08-23T14:57:34+00:00">you </ins>want to
set `SSL_CERT_FILE` so you can tell OpenSSL about the custom
certificates but this will break `curl` and anything else that uses
SecureTransport. Like `curl`.

I _think_ the work-around is to not use `SSL_CERT_FILE` to update
all the `cert.pem` files the various OpenSSL versions use:

* `/usr/local/etc/libressl/cert.pem` -- HomeBrew'd
  [LibreSSL](http://www.libressl.org/)
* `/usr/local/etc/openssl/cert.pem` -- HomeBrew'd OpenSSL
* `/opt/chefdk/embedded/ssl/cert.pem` -- ChefDK's OpenSSL (installed
  via [BrewCask](https://github.com/caskroom/homebrew-cask))
* `/opt/vagrant/embedded/cacert.pem` -- Vagrant's OpenSSL (installed
  via [BrewCask](https://github.com/caskroom/homebrew-cask))

This is frustrating.
