---
id: '441'
title: Nightly Chromium
date: '2009-08-18'
tags:
    - Chromium
    - Google Chrome
archive: true
---

Interested in running the nightly builds of Chromium 4 for OS-X?

Me too.

<!-- more -->

So I threw together a script to grab the latest nightly builds.

This is not the same as the
[Google Chrome Developer Release](http://www.google.com/chrome/intl/en/eula_dev.html?dl=mac).

This is the open source code that will make it's way into Google Chrome 4,
some day. It's very beta, you have been warned.

```bash
#!/bin/bash

set -eu

curl="/usr/bin/curl"
unzip="/usr/bin/unzip"
rsync="/usr/bin/rsync"
rm="/bin/rm"
mkdir="/bin/mkdir"

app=`basename $0`
tdir="${TMPDIR}/tmp.${app}.$$"

"${mkdir}" -p "${tdir}"
cd "${tdir}"

baseurl=http://build.chromium.org/buildbot/snapshots/chromium-rel-mac
echo "Fetching latest version..."
latest=`"${curl}" -q -s ${baseurl}/LATEST`

#echo "Fetching changelog..."
#"${curl}" -q "${baseurl}/${latest}/changelog.xml"

echo "Downloading to ${tdir}..."
"${curl}" -q -Ochrome-mac.zip "${baseurl}/${latest}/chrome-mac.zip"

echo "Extracting..."
"${unzip}" -q chrome-mac.zip

echo "Installing..."
"${rsync}" -a --delete-after "${tdir}"/chrome-mac/Chromium.app/ /Applications/Chromium.app/
echo "${latest}" > /Applications/Chromium.app/Contents/version

echo "Cleaning up..."
"${rm}" -rf "${tdir}"

# EOF
```
