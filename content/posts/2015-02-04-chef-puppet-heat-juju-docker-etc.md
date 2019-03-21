---
id: '1576'
title: Chef, Puppet, Heat, Juju, Docker, etc.
date: '2015-02-04'
author: docwhat
template: post
guid: https://docwhat.org/?p=1576
slug: /chef-puppet-heat-juju-docker-etc/
openid_comments:
    - 'a:3:{i:0;i:17072;i:1;i:17073;i:2;i:17077;}'
image: /files/2015/02/8466596628_d41523b3fe_k-e1423075090864-250x250.jpg
categories:
    - docwhat
tags:
    - chef
    - devops
    - puppet
---

Someone emailed me with this question:

> I am interested in learning different orchestration mechanisms and would
> like to understand how they differ.
>
> What are the differences between Chef, Puppet, Heat/HOT, Juju, and Docker?
>
> When would I use a specific one?
>
> There seems to be a lot of similarity between these.

Since I get these kind of questions a lot, I thought I would write up what I
know of these (in some cases, little).

## System

These are tools for configuring your server. Some run once and are never seen
again, others run continuously and update the state as requirements change,
most can be run in either mode.

All these tools can work with other things listed here. For example, I use
Chef to deploy applications in Docker containers.

### CFEngine

[CFEngine](http://cfengine.com/) was created in 1993 as an Open Source
project. There is a company around it (named CFEngine) that does paid support,
but you don't have to pay anything unless you want to.

I haven't used it but it has its own syntax that made it seem less attractive
to me. It's also a first-gen provisioning system. It's written in C, and is
fast. But I haven't met anyone who uses CFEngine who configures as much as
I've seen with an average Puppet or Chef user.

### Puppet

[Puppet](http://puppetlabs.com/puppet/what-is-puppet) was created in 2005.
It's open source and built mostly on top of Ruby.

Puppet was obviously an answer to problems seen in CFEngine combined with a
desire to use Ruby.

It requires a central server (this may have changed recently) to coordinate
secrets, configurations and recipes.

It uses its own language for describing states and adding new functionality
can be difficult. A puppet process runs on the system to maintain the state of
the server, or make changes overtime (as you push changes to the central
server.

It is also very flexible, and until recently, didn't offer much assistance in
how to organize your configuration files, etc.

In the past, when you wanted to work on a recipe, you had to try it out on a
live system. This was problematic in my group, where developers wanted to be
able to modify and assist with writing rules.

There was a like to about Puppet but ultimately, we switched to Chef.

The Puppet language is annoying. Writing a good language/syntax from scratch
is hard and I never felt that the Puppet group was paying enough attention to
it.

Puppet (at the time, I think this is changing) had no way to write tests or to
test a recipe without trying it out on a live server. This made things really
scary when we were making big change.

We also couldn't give developers access to our recipes without giving away our
secrets (passwords, etc.) That hindered our ability to move quickly.

Puppet uses a pull model. A process runs all the time and applies the rules
every so often by asking the server what rules to run.

### Chef

[Chef](http://chef.io) was created in 2008. It is Open Source and is written
in ruby (and parts of the server are in Erlang).

Chef was created when some of the developers for Puppet split away and wrote a
whole new system, creating Chef.

Chef can be run with a central server (a chef-server) which can hold secrets,
recipes, etc. and coordinate all the server.

Chef could also be run in a stand-alone mode using chef-zero, chef-solo, or
chef-apply.

Chef has several well designed testing tools, including tools to bring up a VM
on your workstation running the recipes under test.

Chef is spending a lot of effort to improve the experience for people writing
new recipes, including a [ChefDK](https://downloads.chef.io/chef-dk/) that
installs everything you need to get started writing recipes.

Chef also does a really good job separating secrets from non-secrets, which
means our developers can actually talk to our chef-server without us worrying
about them getting access to passwords, etc.

A lot of cloud companies that use Chef use chef-zero to pre-create VMs, then
delete chef, and then make the system live. They then dispose of the VM when
they need configuration changes.

Where I work, we manage lots of resources for developers and our systems are
more permanent. So we use chef-server to monitor all the systems.

In addition, we use Chef to not only configure our systems to be in line with
our security policies, but we use it to actually _audit_ our systems as well!

Chef is normally a pull-model (it has a process that runs continuously that
polls the chef-server) but with the Enterprise license you get a push ability
too.

### Ansible

[Ansible](http://www.ansible.com) was created in 2012 is also Open Source.

I don't know much about it, but it actually sounds pretty good. It is new and
I believe it has taken away a lot of the lessons learned in Puppet and Chef.

It ships with Fedora, I don't know what RedHat's plans are for it.

### JuJu (Ubuntu)

I haven't used JuJu but my impression is that is like a "meta" package manager
with some configuration built-in.

I don't think it is as complete as the other systems above, but I think the
other systems could make use of JuJu... as well as JuJu could be used to set
up the above systems.

It only runs on Ubuntu as far as I know.

## Application

Isolating your application setup, deployment and configuration can make your
life much easier. It can help to reliably reproduce working applications
across your network as well as find bugs and do high quality QA.

### Docker

You create a container image with your application all ready setup except for
certain values which you configure via environment variables.

A Docker container should only contain the processes needed for the
application, and nothing more. Docker containers can only be run on linux
servers.

Docker containers can "stack" and communicate among them selves to allow
building stacks of intercommunicating applications.

I like Docker a lot and it makes a really good way to pass around applications
because you know that it'll run the same in QA, Production, and for developers
when debugging problems.

You can manage docker via any of the system provisioning systems above.

## Infrastructure

There are more infrastructure provisioning systems out there, but our setup
hasn't become so complicated (yet) that we have needed them.

### Heat

[Heat](https://wiki.openstack.org/wiki/Heat) is a part of OpenStack and is
used to provision infrastructure: networks, VMs, routes, etc. Heat can use
some kind of system provisioning tools like Chef and Puppet to setup the VMs,
or you can use pre-built VM images.

You could, for example, write a template describing a load-balancing setup
with several apps and a private network connecting them. You could then either
scale one setup using the template (e.g. increasing load-balancers, replicated
dbs, etc.) or quickly create a new setup of server (e.g. a staging or
development setup). Chef has something similar called chef-metal, though it
isn't version 1.0.0 yet (but it works).

### Chef Provisioning (was Chef Metal)

[Chef Provisioning](https://github.com/chef/chef-provisioning) is a system
that mainly works with VMs. It can work with the surrounding infrastructure,
depending on your setup.

It can work with OpenStack, AWS, Azure, and several other cloud providers.

As the name implies it integrates well with Chef, but could be used with any
of the other systems above.

My understanding is that while it works, it isn't mature yet.

## References

-   [CFEngine vs. Puppet vs. Chef vs. Ansible vs. Salt](http://blog.normation.com/en/2013/12/12/cfengine-vs-puppet-vs-chef-vs-ansible-vs-salt/)
    _2013-12-12_
-   [Review: Puppet vs. Chef vs. Ansible vs.
    Salt](http://www.infoworld.com/article/2609482/data-center/review--puppet-vs--chef-vs--ansible-vs--salt
    .html) _2013-11-21_
