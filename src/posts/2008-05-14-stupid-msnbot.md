---
id: 91
title: "msnbot: the stupid bot"
date: "2008-05-14T17:12:29+00:00"
template: "post"
slug: "/stupid-msnbot/"
tags:
  - Technology
---

Generally, most people with websites want to have their sites indexed so that
people can find them.

However, if the bot is really really stupid, then maybe it isn't in your best
interest.

My experiences with msnbot have been pretty much negative.

This site has 15% of the searches supplied by Microsoft Live Search. Not an
insignificant amount.

However, at this moment, msnbot and it's entire class C networks are being
blocked from my server because otherwise they're going to DOS my poor box into
oblivion.

In case you want this rule for yourself, here you go:

```bash
iptables -A INPUT -s 65.55.208.0/24 -j DROP
```

I checked on gerf.org and discovered that it was having trouble. A crew of at
least 20 bots (ip addresses 65.55.208.180 through 199 inclusive) were
requesting urls at about 1 a second.

Not a lot of traffic unless you notice that the URLs they were requesting were
all TRAC source and changeset URLs. These are cpu, disk and io intensive URLs
and I have them in my [`robots.txt`](http://trac.gerf.org/robots.txt) as URLs
that no bot should crawl.

I immediately went to the
[webmaster forums](http://forums.microsoft.com/webmaster/) to see if others
have had this problem (they have) and to complain.

Apparently, bots aren't all they have trouble with:

> "We apologize, but an unknown error has occurred in the forums. This error
> has been logged."

Reading through the forums, it looks like msnbot has a really hard time
reading the `robots.txt`files and honoring them. Really odd because I wrote
a`robots.txt` parser just for fun way back in 1990-something and it's really
easy.

Anyway, if you use Microsoft Live Search, I'd suggest using something else.
Maybe something like ~~[clusty.com](http://clusty.com/)~~[^1]
[DuckDuckGo](https://duckduckgo.com/)[^2].

Ciao!

[^1]:

  ~~Yup. I work for them.~~ I worked for the company which owned clusty.com
  before clusty was sold off.

[^2]: I don't work for DuckDuckGo.
