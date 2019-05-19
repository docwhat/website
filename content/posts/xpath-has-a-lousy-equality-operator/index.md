---
date: '2008-07-23'
id: '121'
slug: '/xpath-has-a-lousy-equality-operator/'
tags:
    - programming
    - xpath
    - xslt
title: 'XPath has a lousy equality operator'
archive: true
---

I just (re-)discovered this bit of stupidity in XPath/XSL. The equal operator
will demote node-sets, result-trees, etc. into to strings when compared with a
string.

Check out this example:

<!-- more -->

XML File:

```xml
<?xml version="1.0" encoding="utf-8"?>
<nodes>
  <node>one fish</node>
  <node>two fish</node>
  <node>red fish</node>
  <node>blue fish</node>
</nodes>
```

XSL File:

```xml
<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    version   = "1.0"
    xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes"/>
  </xsl><xsl :template match="/">
    <red -fish>
      <xsl:value-of select="//node = 'red fish'"/>
    </red>
  </xsl>
```

The output:

```xml
<?xml version="1.0"?>
<red-fish>true</red>
```

This is ridiculous. How can you be sure that the equal operator is returning
what you want if it silently promotes or demotes things? Reading through
[the section on booleans](http://www.w3.org/TR/xpath#booleans) in the XPath
documentation explains how equality works:

> If one object to be compared is a node-set and the other is a string, then
> the comparison will be true if and only if there is a node in the node-set
> such that the result of performing the comparison on the
> [`string-value`](http://www.w3.org/TR/xpath#dt-string-value) of the node and
> the other string is true.

It's almost like it was designed by people who don't program... or maybe a
committee.

This is bad because equality tests will return true in unexpected places. It
also means that the designers of XPath could ignore things like set
operations. A `map()`, `reduce()`, etc. would all be very handy. As would some
way to write functions. [EXSLT](http://www.exslt.org/) helps with this
somewhat, but not much.

Ciao!
