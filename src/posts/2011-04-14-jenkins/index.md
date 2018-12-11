---
date: '2011-04-14T18:32:28-04:00'
id: "678"
image: '/files/2011/04/Screen-shot-2011-04-14-at-1.08.16-PM-214x250.png'
template: post
slug: '/jenkins/'
tags:
- Gerrit
- Jenkins
- testing
title: Jenkins
---

We have recently started using [Jenkins](http://jenkins-ci.org/) at work and
it is awesome.

Jenkins describes itself as a continuous integration software, but it really
is more. You can use Jenkins to build, test, and do
[`cron`](http://en.wikipedia.org/wiki/Cron) jobs, etc. It's very powerful and
really useful.

Not only is very useful, it is being developed and improved quickly. Bugs get
fixed rapidly by a very motivated team of developers. Combined with its
extensive list of plugins, Jenkins becomes amazingly useful in a variety of
situations.

Jenkins' main unit of work is a 'job'. While it obviously has a preference for
[Maven](http://maven.apache.org/) jobs, it works very well with so-called
"free-style" jobs; jobs that use arbitrary commands.

Jobs can be triggered on
[SCM](http://en.wikipedia.org/wiki/Source_Code_Management) changes, `cron`
specifications, the creation of a file, a URL changing, or anything a plugin
might add. For example, we trigger builds for some jobs based on
[Gerrit changes](https://wiki.jenkins-ci.org/display/JENKINS/Gerrit+Trigger)
allowing us to test changes before they enter git's master branch.

The support for kinds of activities that can be performed is amazing: Unix
shell, Windows cmd, jPython, JRuby... just to name a few.

I'm contemplating replacing my `cron` jobs with Jenkins on
[Gerf.Org](http://gerf.org) just because it is so much handier to be able to
look at logs, re-trigger a `cron` job, etc. Not to mention that I can use it
for continuous integration of [IATed](https://github.com/docwhat/iated) and
any other projects I want.

Jenkins has great support for slave nodes. Out of the box it supports Unix
slave nodes via SSH; it will automatically connect to the slave and setup the
correct JDKs, etc. all on its own. Even setting up a windows slave is
relatively easy: Install a JVM, go to the Jenkins page for that slave node and
web-launch the slave software; it does the rest. To make the slave permanent
across re-boot, use the menu option in the slave program to install it as a
service. Not as easy as with Unix, but still very easy.

If you want to try it out, you can get it running really quickly by running
`java -jar jenkins.war`... it has a built in servlet container server. Or you
can try the [docker container](https://hub.docker.com/_/jenkins/).

Overall, I give Jenkins two thumbs up.

Ciao!
