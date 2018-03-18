---
id: 1449
title: Unindenting HEREDOCs in Ruby
date: 2014-07-29T13:47:22-04:00
author: docwhat
template: post
guid: https://docwhat.org/?p=1449
slug: /unindenting-heredocs-ruby/
image: /files/2011/08/ruby.png
categories:
  - docwhat
tags:
  - Ruby
---
This is a bit of code I wanted to save.

When using HEREDOCs in Ruby, the `<<-` operator is handy to keep
everything indented in the source. But it doesn't help with the content
of the HEREDOC.

Example:

``` ruby
def example
  puts <<-EOF
This is left.

  This is indented two.
  EOF
end
```

In rails, you can do this:

``` ruby
def example
  puts <<-EOF.strip_heredoc
    This is left.

      This is indented two.
  EOF
end
```

There's a helpful [Stack Overflow question](http://stackoverflow.com/questions/3772864/how-do-i-remove-leading-whitespace-chars-from-ruby-heredoc) on this, in fact.

Here's a simplish solution for plain 'ol Ruby:

``` ruby
def unindent(string)
  first = string[/As*/]
  string.gsub(/^#{Regexp.quote first}/, '')
end

def example
  puts unindent(<<-EOF)
    This is flush left.

      This is indented by two spaces
  EOF
end
```

Too bad you can't pull in some of these Rails monkey patches without pulling in lots of stuff you don't want.
