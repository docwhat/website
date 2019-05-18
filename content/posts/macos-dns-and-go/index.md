---
title: DNS not working with Go binaries and VPNs
date: '2019-04-10'
banner:
    image: 'closeup.jpg'
---

If you are having DNS problems (i.e., `Host not found`) while using a Go
binary while connected via a VPN... then I have a solution for you.

The solution is [dns-heaven](https://github.com/greenboxal/dns-heaven). Just
use this command if you trust shell scripts running as root from random people
on the Internet:

```sh
sudo -v \
  && curl -L https://git.io/fix-my-dns-plz \
   | sudo bash
```

### What's going on?

On macOS, if a Go program is compiled with `CGO_ENABLED=0` then Go uses its
own internal network name resolver. This resolver only knows about
`/etc/resolv.conf` and doesn't know about the `libSystem` (macOS `libc`)
library and its name resolution functions.

macOS (like most modern OSes) has smarter DNS lookups than just using an
`/etc/resolv.conf` which allow it to smoothly handle switching networks.

When a VPN is being used then DNS lookups will be split between the VPN's DNS
servers and your ISP's DNS servers, depending on the hostname.

You can setup custom name servers for certain domains by creating
`resolv.conf` style files in `/etc/resolver/<domain>`. This is what your VPN
software is doing behind the covers.

This problem is VPN agnostic. In my case, I'm using "Cisco AnyConnect" but the
same problem will exist with _any_ VPN software.

It looks like this will be fixed in Go version 1.13,
[commit `f20b42a`](https://github.com/golang/go/commit/f6b42a53e5ac1f1c3f3b1c9ed2407e68e0b637a0)
landed in `master` branch early April, 2018.

See also:

-   [`terraform` #3536](https://github.com/hashicorp/terraform/issues/3536)
-   [`kubernetes` #469](https://github.com/kubernetes/release/issues/469)
-   [GoLang #12524](https://github.com/golang/go/issues/12524)
    -   [Go commit `f6b42a`](https://github.com/golang/go/commit/f6b42a53e5ac1f1c3f3b1c9ed2407e68e0b637a0)
