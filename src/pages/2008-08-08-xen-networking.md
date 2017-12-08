---
id: 142
title: Xen Networking
date: 2008-08-08T17:44:36+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/?p=142
slug: /xen-networking/
title_tag:
  - ""
openid_comments:
  - 'a:1:{i:0;s:4:"6250";}'
categories:
  - docwhat
tags:
  - computer
  - network
  - xen
---
Gerf.Org just switched to <a title="The Xen Homepage" href="http://www.xen.org/">Xen</a>. It's running in a <code>domU</code> on hardware that is massively more powerful than it used to be.  The original hardware (until about 3 years ago) was a 333Mhz box with 20gigs of disk-space. Since then it has been running on newer hardware.  However, the hardware was flakey and getting flakier.

So it became time to upgrade to some new hardware.  Xen was a natural choice because I can remotely power off a <code>domU</code> and it allows me to move my print server, firewall, etc. all into one box.  I only have to manage one <code>RAID1</code> array and it uses less power.  Plus it's cool.

One of the challenges for switching to Xen has been setting up the networking. Even though I read Bill <a title="Bill von Hagen's web site" href="http://www.vonhagen.org/">Von Hagen</a>'s excellent "<a name="evtst|a|0470138114" href="http://www.amazon.com/Professional-Xen-Virtualization-William-Hagen/dp/0470138114%3FSubscriptionId%3D02E5W5871AJF7PMMMS82%26tag%3Dws%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0470138114">Professional Xen Virtualization</a>".

<!--more-->Of course, it's not really his fault.  Xen 3.0 hit beta right before he published it;  The new networking stuff wasn't really in place yet and certainly wasn't ready for release yet.

Anyway, the <a href="http://wiki.xensource.com/xenwiki/XenNetworking">Xen Wiki</a> doesn't help much either; it doesn't give any examples and makes things that should be simple, complicated.

As you read this, remember that I'm using Xen 3.2.0 and <a href="http://www.xen-tools.org/software/xen-tools/">Xen Tools</a> 3.8.4 as ships with <a href="http://releases.ubuntu.com/releases/8.04/">Ubuntu Hardy Heron 8.04</a>. Xen is a rapidly changing project and this doesn't apply to older versions and I doubt it applies 100% to newer versions.
<h2>The Goal</h2>
The goal here is to create three bridges: LAN, WAN and DMZ.   The hardware in question has two NICs: one facing internal and one facing external.  The DMZ will be on a dummy NIC that is entirely virtual.  This was I can host external, internal and quarantined systems all as <code>domU</code>s in the Xen environment.
<h2>network-bridge</h2>
The network-bridge script is used to create bridges.  You can think of a bridge as a virtual network hub.  In Xen, the bridge appears as a device in <code>ifconfig</code>, like <code>eth0</code> or <code>lo</code> does.  This bridge can have multiple <code>domU</code>s hooked up to it, in addition to a real physical NIC.

This is implemented via the <code>network-bridge</code> script.  You can pass in various arguments to control how it creates the bridge.  You can also just do it all yourself, but I'm not interested in that.  Too much work.

The basic usage is something like this (from a <code>xend-setup.sxp</code>):
<pre>(network-script "network-bridge netdev=eth1 bridge=foo")</pre>
This would:
<ol>
	<li>Rename <code>eth1</code> to <code>peth1</code> (it prepends a 'p' to the name)</li>
	<li>Creates a device in <code>ifconfig</code> called <code>foo</code>.</li>
</ol>
You would then connect to it in your <code>domU</code>'s cfg file by adding lines like:
<pre>vif         = [
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:cc,bridge=foo'
              ]</pre>
So this new zen would be connected to this bridge.  Packets would be routed out foo and through <code>peth1</code> (formally known as <code>eth1</code>).
<h2>my-network-bridge</h2>
What you can do now, is replace <code>network-bridge</code> (which is in <code>/etc/xen/scripts</code>, btw) with a script of our own.  I'm calling it <code>my-network-bridge</code>:
<pre>#!/bin/bash
dir=$(dirname "$0")
"$dir/network-bridge" "$@" vifnum=0 netdev=eth0   bridge=lan
"$dir/network-bridge" "$@" vifnum=1 netdev=eth1   bridge=wan
"$dir/network-bridge" "$@" vifnum=2 netdev=dummy0 bridge=dmz
# EOF</pre>
I'm not sure the <code>vifnum</code> is needed, but I don't think it can hurt.  I'm using <code>dummy0</code> for the dmz because the dmz is entirely located inside the xen box.  None of that traffic should escape my xen box.

<code>xend-config.sxp</code> needs to be modified as well:
<pre>(network-script 'my-network-bridge')</pre>
Not very tough.

To use this in a <code>domU</code> .cfg file is just like above.

A simple externally facing domU:
<pre>vif         = [
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:cc,bridge=wan'
              ]</pre>
An internally facing <code>domU</code>:
<pre>vif         = [
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:dd,bridge=lan'
              ]</pre>
A firewall <code>domU</code>:
<pre>vif         = [
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:11,bridge=wan',
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:22,bridge=lan',
                  'ip=192.168.0.10,mac=00:16:3E:aa:bb:33,bridge=dmz',
              ]</pre>
I've left the ip addresses all the same because I'm too lazy to come up with example ones.  You can also specify <code>dhcp</code> as well.
<h2>Conclusion</h2>
I hope that helps.  At the very least, I've documented what I did so that when I forget all this in 6 months I can just look here. ;-)

Ciao!