---
id: '473'
title: Smoking craters are good
date: 2009-10-28T17:01:43+00:00
author: docwhat
template: post
guid: http://docwhat.org/?p=473
slug: /smoking-craters-are-good/
openid_comments:
    - 'a:2:{i:0;s:4:"6450";i:1;s:4:"6451";}'
categories:
    - docwhat
---

Every wondered how to make bulletproof software? What tricks do the guys who
build bank machines use to be sure their software doesn't ever crash?

Look no further!

<h3>History</h3>

Tandem Computers used to make Non-Stop fault tolerant hardware and software.
Their premier system was a million dollar Mainframe system. It could have up
to 16 CPUS and 16 IO cabinets, each with 60 IO cards. Everything was in pairs.
Each CPU was actually two cpus, if one disagreed with the other, they
shutdown. All processes were doubled. All IO was doubled; two scsi cards, to
two different scsi drives (mirrored) in two different cabinets, each with two
power supplies.

Jimmy, the CEO and founder used to give demos where he would take the bank
manager, or other high-muckety muck and show him one of Tandem's live
data-centers. He'd point at the screens and say, "You see those messages?
That's a bunch of transactions happening on these systems right here. We're
using them for our day-to-day work, right here."

"Let me show you how reliable these systems are...", he'd then pull a Colt .45
from his jacket and blow a hole in the side of one of the IO cabinets. The
boom would usually cause the unsuspecting bank manager to leap for the nearest
exit.

Jimmy would continue, "...and as you can see, while the system noticed that
little hole, it isn't actually stopping. Everything is re-routing around the
damage I just did."

<h3>Every mistake should leave a crater</h3>

So, how did Tandem make software and hardware that ended up in most of the
newpapers and banks in the world? They used a simple secret; if something goes
wrong, it should leave a huge smoking crater.

Basically, it works like this. Let's say Dan the Developer makes a mistake;
when the right situation happens then something divides by zero. When the
divide by zero happens, if the software tries to recover without understanding
why it happened, then it the software can actually make the problems worse. In
addition, it may be the case that nobody will notice the problem.

However, let's say that instead of hiding the problem, the divide by zero
causes the whole software package to stop. The user will notice this. They
will complain. The developer will be notified. It will get fixed.

This is one of the easiest ways to make sure your software is bullet proof.
Make it all go boom! when something unexpected happens.
