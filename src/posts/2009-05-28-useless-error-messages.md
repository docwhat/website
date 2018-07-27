---
id: "367"
title: Useless Error Messages
date: 2009-05-28T15:53:14+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=367
slug: /useless-error-messages/
openid_comments:
  - 'a:1:{i:0;s:4:"6244";}'
categories:
  - docwhat
tags:
  - programming
  - rants
  - Windows
---

I've had the misfortune of having to work on getting a product to work as an
ASPX script instead of the CGI it was originally.

This is a misfortune in two ways:

<ol>
	<li>I'm not an experienced Windows developer.  The last time I used Visual Studio was when it was version 1 while welding a copy of the first edition of Charles Petzold's "Programming Windows".</li>
	<li>Windows is horrible to do anything out of the ordinary in.</li>
</ol>
In this case the ASPX script needed to use a wrapper around a C DLL that required other DLLs.  This isn't something that Windows wanted to do; it wanted all DLLs to be installed into C:\Windows\System (or the modern equivalents).  Not something that was possible for various reasons.

So what kind of errors have I gotten?

<h3>The Specified module could not be found. (Exception from HRESULT: 0x8007007e)</h3>
The error message didn't include any more information than this.  The event log was empty and I couldn't use the debugger to break into the process early enough to see what it was trying to load.

It turned out to be due to a DLL requiring a DLL requiring a DLL that was
missing.  I still, to this day, don't know which DLL it was actually missing.

If you want to see how useless this message is try searching for that message;
there are millions of people asking for help and only a few posts with a
solution other than install all the DLLs into your system folder.

To solve it, I had to read and re-read tons of documentation on how "Assemblies"
work.  Assemblies and shadow caching are worthy of a whole 'nother rant.  Trust
me on that.

<h3>Server Application Unavailable</h3>
This message included a note to the Administrator:
<blockquote>An error message detailing the cause of this specific request failure can be found in the application event log of the web server. Please review this log entry to discover what caused this error to occur.</blockquote>
Of course, there are two different logs you might look in: System Events and the IIS logs.

System Events had no log messages in it.  The IIS logs only told me that it was
an HTTP 500 error. There was nothing else.

Yay!

<h3>Could not load file or assembly 'VivisimoNET' or one of its dependencies. An attempt was made to load a program with an incorrect format.</h3>

There was an System Event entry for this, at least, but it didn't say much more.

Fortunately, I was prepared for this; I knew it would complain because my DLLs
were 32bit (as needed for debugging in Visual Studio) but IIS needed 64bit DLLs.

<hr />

I'd argue that error messages and debugging output are very important. I'm
amazed at how horrible the logs, debug messages, and other feedback is in
Windows.

Obviously there is enough debugging messages to let people get their work done.
Or maybe there are just enough people to talk to each other and solve it that
way. Who knows.

Ciao!
