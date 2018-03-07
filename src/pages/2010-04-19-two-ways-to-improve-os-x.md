---
author: docwhat
categories:
- docwhat
date: '2010-04-19T17:33:49+00:00'
guid: 'http://docwhat.org/?p=542'
id: 542
template: post
openid_comments:
- 'a:1:{i:0;s:4:"6986";}'
slug: '/two-ways-to-improve-os-x/'
tags:
- hints
- laptop
- OS X
- trick
title: 'Two ways to improve OS-X...'
---

I found this excellent article, [Mac OS X SSD
tweaks](http://blogs.nullvision.com/?p=275) by Ricardo Gameiro, and
have stolen two of the ideas for my non-SSD MacBook Pro laptop. I'll
cover all three, though, since I don't agree with his hibernation
trick.

Turn off "atime"
----------------

This is pretty simple. Setting `noatime` turns off recording of when
files are accessed. I've never found a usage for the recording of
file accesses. However, you may have a use for this behavior, so be
warned.

To turn off `atime` then just dump this XML into
`/Library/LaunchDaemons/com.nullvision.noatime.plist`.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.nullvision.noatime</string>
        <key>ProgramArguments</key>
        <array>
            <string>mount</string>
            <string>-vuwo</string>
            <string>noatime</string>
            <string>/</string>
        </array>
        <key>RunAtLoad</key>
        <true />
    </dict>
</plist>
```

Turn off hibernate
------------------

In the article, he suggests turning off hibernate altogether. I
don't like this. The hibernate is really handy if something goes
wrong and you loose all your power.

There are two ways OS-X goes to sleep: suspend and hibernate.

The first is suspend. Information on the system state is stored to
ram and the CPU is stopped. This is really fast to sleep and really
fast to restore. The downside is that if the system looses power, it
cannot restore; the ram is wiped clean.

The second is hibernate. Information on the system state is stored
to disk and the CPU is stopped. The system is powered off. On
restart, the state is read from disk and the system restarts as
normal. This is slow to sleep and restore, but if power is lost, the
system state is still safe.

OS-X, for laptops, does both. This means it is slow to shutdown, but
fast to restore.

Obviously, if you are using SSD or if you want shutdowns to be fast
(like I do, since I tend to shut my lid and carry around my laptop
immediately), then you really don't want hibernation to happen
unless you really need it.

So I use [SmartSleep](http://www.jinx.de/SmartSleep.html) by Patrick
Stein. The only time my laptop hibernates is when the power is low.
The best of both worlds.

Storing `/tmp/` in ram
----------------------

This recipe is nearly the same as Ricardo's suggestion. I just added
the code from [Patrick Gibson's
comment](http://blogs.nullvision.com/?p=275#comment-64).

This is two part; you need to create a shell script and a `.plist`
file.

The shell script goes in `/var/root/ramfs.sh`. You must do a
`chmod a+x /var/root/ramfs.sh` afterwards.

``` bash
#!/bin/bash

set -eu

ramfs_size_mb=256
mount_point="/private/tmp"

ramfs_size_sectors=$(( ${ramfs_size_mb} * 1024 * 1024 / 512 ))
ramdisk_dev=$(hdid -nomount ram://${ramfs_size_sectors} | cut -d ' ' -f 1)
newfs_hfs -v 'Volatile HD' "${ramdisk_dev}"
mkdir -p "${mount_point}"
mount -o noatime -t hfs "${ramdisk_dev}" "${mount_point}"

# hide the volume from the Finder
if [ -e /usr/bin/SetFile ]; then
 /usr/bin/SetFile -a V "${mount_point}"
fi

# fix permissions
chown root:wheel "${mount_point}"
chmod 1777 "${mount_point}"

# EOF
```

Next you need to drop a `.plist` file in
`/Library/LaunchDaemons/com.nullvision.ramfs.plist`.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.nullvision.ramfs</string>
        <key>ProgramArguments</key>
        <array>
            <string>/var/root/ramfs.sh</string>
        </array>
        <key>RunAtLoad</key>
        <true />
    </dict>
</plist>
```

I don't recommend moving any caches or anything, as he mentions at
the end of the article. Just having `/tmp/` (aka `/private/tmp/`)
will be an advantage. Well, except the X-Code thing. That's probably
useful.

Ciao!

Addendum: Reverting `/tmp`
--------------------------

I discovered that
[iDefrag2](http://www.coriolis-systems.com/iDefrag.php) needs to
have `/tmp` be a real file-system to do it's "No bootable CD/DVD
required!" trick. After hashing it out with a helpful developer
(Thanks, Chris!) we tracked it down to putting `/tmp` into ram.

To undo it, run these commands as root:

``` bash
rm /Library/LaunchDaemons/com.nullvision.ramfs.plist
rm /var/root/ramfs.sh
mkdir /private/tmp2
mv /private/tmp /private/tmp2 ; mv /private/tmp2 /private/tmp
chown root:wheel /private/tmp
chmod 1777 /private/tmp
```

You should reboot immediately after this change.

After reboot, verify that `/tmp` and `/private/tmp` are set up
correctly:

``` bash
$ ls -ald /tmp /private/tmp
drwxrwxrwt 18 root wheel 612 Jun 16 09:47 /private/tmp/
lrwxr-xr-x  1 root admin  11 Jun 16 09:23 /tmp -> private/tmp/
```

**Important:** Verify that the `/tmp` symlink points to
`private/tmp` not `/private/tmp`!
