---
id: 1559
title: Setting your environment in test-kitchen
date: 2014-10-15T16:36:48-04:00
author: docwhat
layout: post
guid: https://docwhat.org/?p=1559
permalink: /setting-environment-test-kitchen/
openid_comments:
  - 'a:2:{i:0;i:17980;i:1;i:20103;}'
image: /files/2014/10/Chef_Software_Inc._company_logo-228x250.png
categories:
  - docwhat
tags:
  - chef
---
When using [test-kitchen](http://kitchen.ci/) it may be necessary to set the
environment of your nodes.

You can do with by changing your `.kitchen.yml` file. In my example, I'll show
it at the root, but they can be set on a per-suite level as well, which is
handy to test different environments.

For chef-solo:

``` yaml
driver:
  name: vagrant

provisioner:
  name: chef_solo
  environments_path: test/environments
  solo_rb:
    environment: kitchen

# etc...
```

For chef-zero:

``` yaml
driver:
  name: vagrant

provisioner:
  name: chef_zero
  environments_path: test/environments
  client_rb:
    environment: kitchen

# etc...
```

Notes:

-   You must use `.json` files for the environment files with chef-zero. It
    doesn't understand `.rb` environment files.
-   chef-zero uses `client_rb` whereas chef-solo uses `solo_rb`. Why? Because
    chef-solo isn't a full chef server.

Example environment `.json` file:

``` json
{
  "name": "myenvironment",
  "description": "My Chef environment",
  "cookbook_versions": {

  },
  "json_class": "Chef::Environment",
  "chef_type": "environment",
  "default_attributes": {

  },
  "override_attributes": {

  }
}
```
