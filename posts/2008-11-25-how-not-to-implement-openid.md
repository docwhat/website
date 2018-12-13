---
id: '224'
title: How not to implement OpenID
date: 2008-11-25T17:35:29+00:00
template: post
slug: /how-not-to-implement-openid/
title_tag:
    - 'SourceForge: How not to implement OpenID'
tags:
    - mybad
    - OpenID
---

**UPDATE**: I was wrong! See below...

~~I have a lovely case study in how not to implement OpenID:
[SourceForge](http://sourceforge.net/)~~

~~I'm unsure of how they're going about implementing OpenID but I bet it isn't
via one of the open source libraries out there that work.~~

~~In the past, it never worked because it's delegation support was broken.~~

~~Delegation is the handy feature that lets you use one host name (such as
docwhat.org) as your id, but the provider could be someplace else (like
myopenid.com). Or even multiple places!~~

~~I reported that
[bug](https://sourceforge.net/tracker2/?func=detail&aid=1955438&group_id=1&atid=200001)
but it was never fixed.  The original part of the problem was that it's HTML
parsing was broken.  I **know** that none of the open source libraries have
had this problem.~~

~~Now that I have the fancy new
[OpenID Plugin](http://wordpress.org/extend/plugins/openid/) that can be its
own provider, sourceforge is _still_ broken.~~

~~This isn't rocket science, folks. There are libraries that do almost
everything for you!~~

~~Sheesh.~~

**UPDATE**[2009-03-14]: It turns out I was wrong! The problem is that the
OpenID Plugin was
[broken](http://code.google.com/p/diso/issues/detail?id=101&colspec=ID%20Type%20Project%20Status%20Priority%20Milestone%20Owner%20Summary).
It's just that at the time of this post, only SourceForge was triggering the
bug.  Eventually, all OpenID sites were triggering the bug.

To SourceForge and their staff: I apologize; I was wrong. The only complaint I
can make is that the feedback wasn't sufficient to let me troubleshoot the
problem.

**UPDATE**[2009-03-19]: Wrong again! It turns out that broken apache rewrite
rules (which were hidden by **ErrorDocument** directives) were the cause. Man,
I should stop being wrong so much. ;-)
