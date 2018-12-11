---
id: "142"
title: Xen Networking
date: 2008-08-08T17:44:36+00:00
template: post
slug: /xen-networking/
tags:
  - technology
---

Gerf.Org just switched to [Xen](http://www.xen.org/ 'The Xen Homepage'). It's
running in a `domU` on hardware that is massively more powerful than it used
to be.  The original hardware (until about 3 years ago) was a 333Mhz box with
20gigs of disk-space. Since then it has been running on newer hardware.
However, the hardware was flakey and getting flakier.

So it became time to upgrade to some new hardware. Xen was a natural choice
because I can remotely power off a `domU` and it allows me to move my print
server, firewall, etc. all into one box. I only have to manage one `RAID1`
array and it uses less power. Plus it's cool.

One of the challenges for switching to Xen has been setting up the networking.
Even though I read Bill
[Von Hagen](http://www.vonhagen.org/ "Bill von Hagen's web site")'s excellent
[_Professional Xen Virtualization_](https://amzn.to/2pC2xnx).

<!-- more -->

Of course, it's not really his fault.  Xen 3.0 hit beta right before he
published it;  The new networking stuff wasn't really in place yet and
certainly wasn't ready for release yet.

Anyway, the [Xen Wiki](http://wiki.xensource.com/xenwiki/XenNetworking)
doesn't help much either; it doesn't give any examples and makes things that
should be simple, complicated.

As you read this, remember that I'm using Xen 3.2.0 and
[Xen Tools](http://www.xen-tools.org/software/xen-tools/) 3.8.4 as ships with
[Ubuntu Hardy Heron 8.04](http://releases.ubuntu.com/releases/8.04/). Xen is a
rapidly changing project and this doesn't apply to older versions and I doubt
it applies 100% to newer versions.

## The Goal

The goal here is to create three bridges: LAN, WAN and DMZ.   The hardware in
question has two NICs: one facing internal and one facing external.  The DMZ
will be on a dummy NIC that is entirely virtual.  This was I can host
external, internal and quarantined systems all as `domU`s in the Xen
environment.

## network-bridge

The network-bridge script is used to create bridges.  You can think of a
bridge as a virtual network hub.  In Xen, the bridge appears as a device in
`ifconfig`, like `eth0` or `lo` does.  This bridge can have multiple `domU`s
hooked up to it, in addition to a real physical NIC.

This is implemented via the `network-bridge` script.  You can pass in various
arguments to control how it creates the bridge.  You can also just do it all
yourself, but I'm not interested in that.  Too much work.

The basic usage is something like this (from a `xend-setup.sxp`):

    (network-script "network-bridge netdev=eth1 bridge=foo")

This would:

1.  Rename `eth1` to `peth1` (it prepends a 'p' to the name)
2.  Creates a device in `ifconfig` called `foo`.

You would then connect to it in your <code>domU</code>'s cfg file by adding
lines like:

```bash
vif = [
  'ip=192.168.0.10,mac=00:16:3E:aa:bb:cc,bridge=foo'
]
```

So this new zen would be connected to this bridge.  Packets would be routed
out foo and through `peth1` (formally known as `eth1`).

## my-network-bridge

What you can do now, is replace `network-bridge` (which is in
`/etc/xen/scripts`, btw) with a script of our own.  I'm calling it
`my-network-bridge`:

```bash
#!/bin/bash
dir=$(dirname "$0")
"$dir/network-bridge" "$@" vifnum=0 netdev=eth0   bridge=lan
"$dir/network-bridge" "$@" vifnum=1 netdev=eth1   bridge=wan
"$dir/network-bridge" "$@" vifnum=2 netdev=dummy0 bridge=dmz
# EOF
```

I'm not sure the `vifnum` is needed, but I don't think it can hurt. I'm using
`dummy0` for the dmz because the dmz is entirely located inside the xen box.
None of that traffic should escape my xen box.

`xend-config.sxp` needs to be modified as well:

    (network-script 'my-network-bridge')

Not very tough.

To use this in a `domU` `.cfg` file is just like above.

A simple externally facing domU:

```bash
vif = [
          'ip=192.168.0.10,mac=00:16:3E:aa:bb:cc,bridge=wan'
      ]
```

An internally facing `domU`:

```bash
vif = [
          'ip=192.168.0.10,mac=00:16:3E:aa:bb:dd,bridge=lan'
      ]
```

A firewall `domU`:

```bash
vif = [
          'ip=192.168.0.10,mac=00:16:3E:aa:bb:11,bridge=wan',
          'ip=192.168.0.10,mac=00:16:3E:aa:bb:22,bridge=lan',
          'ip=192.168.0.10,mac=00:16:3E:aa:bb:33,bridge=dmz',
      ]
```

I've left the ip addresses all the same because I'm too lazy to come up with
example ones. You can also specify `dhcp` as well.

## Conclusion

I hope that helps. At the very least, I've documented what I did so that when
I forget all this in 6 months I can just look here. ;-)

Ciao!
