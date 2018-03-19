---
date: '2014-04-28T09:51:50-04:00'
id: 1435
image: '/files/2014/04/knife-250x250.png'
template: post
slug: '/rename-chef-node/'
tags:
- chef
- knife
title: How to rename a Chef node
---

In [Chef](http://getchef.com) the `node_name` is for human usage. By
default it is set to the `fqdn`. Which is annoying for typing.

In my network, all hosts have the same domain name. However, we
`knife bootstrap`ed this one system without setting the node name
with the `-N` flag.

Therefore I wanted to rename the nodes. With some experimentation, I
figured it out.

## Example

Let's say I have a node called `george.example.com` but I want to
change the node name to just `george`.

1.  `knife node edit george.example.com`
    * Change the `node_name` to `george` (deleting the
      ".example.com")
    * When you're done, `knife` will say it is making a copy.
2.  `knife node delete george.example.com`
3.  `knife client delete george.example.com`
4.  `knife client create -d george`
    * Copy the newly created private key.
5.  Connect to `george.example.com` as root/Administrator.
6.  Paste the new private key into `/etc/chef/client.pem`.
7.  Edit `/etc/chef/client.rb`
    * Either add or edit the `node_name` line exists, changing it to
      `node_name "george"`
    * Alternatively, if you use the
      [chef-client cookbook](https://github.com/opscode-cookbooks/chef-client)
      (recommended!) run `chef-client -N george` and it'll update
      `client.rb` for you.
8.  If you use the chef-client daemon, restart it:
    `/etc/init.d/chef-client restart`

That's it!

It's important to understand that nodes and clients are tied
together only via their names. The node contains the status, etc.
The client only contains the public key that is needed for
communicating.

You can't rename or copy clients. So you have to delete it and
recreate it with a new name. `knife client create` command generates
a new private and public key. You have to save private key and put
it on the client server because the chef-server doesn't store it.

If you ever lose the private key for a client, you can use
`knife client reregister` to regenerate the private key again.

Ciao!
