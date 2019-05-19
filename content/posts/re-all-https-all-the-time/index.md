---
id: '1239'
title: 'Re: All https, all the time'
date: '2013-02-26'
author: docwhat

categories:
    - docwhat
tags:
    - Apache
    - https
---

[Will Norris](https://willnorris.com/) posted a blog post titled
[_All https, all the time_](https://willnorris.com/2012/12/all-https-all-the-time).

It's a good article and I recommend you read it. `docwhat.org` is now only
using https.

I did want to add one note about his apache configuration at the end.

He should be using `[L,R=301]` instead of just `[L,R]`

By default, the `R` is a [`302 Found`](http://en.wikipedia.org/wiki/HTTP_302)
redirect. It was originally a "moved temporarily" but over time became an
redirect for unknown reasons.

A [`301 Moved Permanently`](http://en.wikipedia.org/wiki/HTTP_301) says
instead that the old URL isn't coming back. This helps search engines and
other software that tracks pages. Bookmarks can also benefit from this as
well.

So the complete rule would be:

```apacheconf
UseCanonicalName on
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{SERVER_NAME}%{REQUEST_URI} [L,R=301]
```

Ciao!

**Edited**: I replaced `%{HTTP_HOST}` with `%{SERVER_NAME}` because SSL
certificates have specific host names associated with them. `%{HTTP_HOST}`
just returns the host name that was in the request, which may not be the
correct FQDN for the SSL certificate. To make it use the canonical name, you
must turn on `UseCanonicalName`, which really should be used on SSL encrypted
hosts anyway.
