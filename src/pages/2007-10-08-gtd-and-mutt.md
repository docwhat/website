---
id: 75
title: GTD and Mutt
date: 2007-10-08T00:30:13+00:00
author: docwhat
layout: post
guid: http://docwhat.gerf.org/2007/10/gtd-and-mutt/
permalink: /gtd-and-mutt/
title_tag:
  - ""
openid_comments:
  - 'a:1:{i:0;s:4:"7625";}'
categories:
  - docwhat
tags:
  - email
  - Getting Things Done
  - mutt
---
I found this article about [Getting things done with mutt](http://blogs.techrepublic.com.com/opensource/?p=106&tag=nl.e011). It talks about using the techniques from David Allen's productivity book "[Getting Things Done: The Art of Stress-Free Productivity](http://amzn.com/0142000280?tag=thedocwha-20). I've been reading GTD for a week now (taking my time, you know) and think it's pretty interesting.

Since [Mutt](http://mutt.org/) is my favorite email client, I spent a little playing with it and making changes. I'm using a different [editlabel](http://docwhat.gerf.org/files/2007/10/editlabel) script and my way doesn't require patching and recompiling mutt.

Here are my `muttrc` changes:

{% raw %}
```
### GETTING THINGS DONE ###
# http://blogs.techrepublic.com.com/opensource/?p=106&atag=nl.e011
# http://auriga.wearlab.de/~alb/other/mutt-labels/
set editor='emacs'
set move=yes
set mbox='=archive'

unignore X-Label:  # make sure to display X-Label on each message
color header red default '^X-Label:'
mailboxes =ACTION
mailboxes =RESPOND
mailboxes =WAITFOR
mbox-hook =ACTION  =archive
mbox-hook =RESPOND =archive
macro pager \Ct  "<exit><tag -entry></tag><tag -prefix><mark -as-new><tag -prefix><save -message>=ACTION<enter>"  "Mark message as ACTION"
macro pager \Cr  "<exit><tag -entry></tag><tag -prefix><mark -as-new><tag -prefix><save -message>=RESPOND<enter>" "Mark message as RESPOND"
macro pager \Cw  "<exit><tag -entry></tag><tag -prefix><mark -as-new><tag -prefix><save -message>=WAITFOR<enter>" "Mark message as WAITFOR"
macro index y "</enter><enter -command>set editor=\"~/comp/editlabel\"\n\
<edit><enter -command>set editor=\"emacs -nw\"\n\
<sync -mailbox><next -undeleted>" "Edit Label"
macro pager y "<enter -command>set editor=\"~/.mutt/editlabel\"\n\
<edit><sync -mailbox><next -undeleted>\
<enter -command>set editor=emacs\n" "Edit Label"
macro index \Cy "<limit>~y " "Limit view to label"

set index_format="%4C %Z %{%b %d} %-15.15L %?M?(#%03M)&(%4l)? %?y?{%.20Y} ?%s"
#### END GTD ###
```
{% endraw %}

`editlabel` also has full [readline](http://en.wikipedia.org/wiki/Readline) editing and history, which is nice. I haven't added tab-completion from the history; I'm not sure if I will or not.

My `editlabel` also has the advantage that you can delete a label just by deleting the line; `^a ^k` if you use emacs.

Note that if you use the above, you'll have to replace the occurrences of "emacs" with whatever editor you use.

I just found a similar post: [GTD with Mutt](http://footils.org/cms/show/59)

I like my `editlabel` better, even if I'm using [Python](http://python.org/)'s evil `os.system()`. But that narrow-wide trick is neat.

Ciao!

1.  UPDATE 2007-10-08: Added mark-as-new when saving, so that they will attract my notice via the mailbox changing.
2.  UPDATE 2007-10-09: Fixed the mark-as-new stuff...had to use tagging to make it work.
3.  UPDATE 2010-03-01: Updated 'y' macro based on feedback from Mark Fardal.
4.  UPDATE 2014-08-11: Fixed broken formatting due to age. Fixed some minor typos.
</limit></enter></next></sync></edit></enter></next></sync></enter></edit></enter></save></tag></mark></tag></exit></enter></save></tag></mark></tag></exit></enter></save></tag></mark></tag></exit>
