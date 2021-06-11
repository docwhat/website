---
title: 'Markup: HTML Tags and Formatting'
date: 2017-01-11
---

A variety of common markup showing how the theme styles them.

# Header one

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

## Header two

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

### Header three

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

#### Header four

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

##### Header five

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

###### Header six

Lorem ipsum dolor sit amet, sed lorem iisque cu, salutatus conclusionemque vis
cu. Ea per magna partiendo, at ridens minimum vivendum mei, te vix iudico
labore omnesque. Autem porro usu at, per aeque cetero in. Te indoctum
maluisset gubergren eos. Sed probatus scripserit ea, pri in lorem ocurreret.

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you've got to focus on. But
> that's not what it means at all. It means saying no to the hundred other
> good ideas that there are. You have to pick carefully. I'm actually as proud
> of the things we haven't done as the things I have done. Innovation is
> saying no to 1,000 things.
>
> <cite>Steve Jobs - Apple Worldwide Developers' Conference, 1997</cite>

## Footnotes

I first encountered footnotes at Daring Fireball[^daring-fireball] and have
since seen them on [Shawn Blanc's site](http://shawnblanc.net/), and a few
others. At first it was a novelty I would never need. Then I started really
writing.

[^daring-fireball]:
    Here is John Gruber's post
    [About the Footnotes](http://daringfireball.net/2005/07/footnotes).
    Besides, what would a post about creating footnotes in HTML be without
    actually having at least one footnote to demonstrate?

Footnotes are also not a core feature of markdown, but they're a common
extension feature. The footnote syntax looks like this:

```markdown
This line has a footnote [^footnote-1]. Scroll down or click the link to see
it.
```

That renders like this:

This line has a footnote [^footnote-1]. Scroll down or click the link to see
it.

[^footnote-1]: Here there be footnotes.

## Tables

<!--lint disable no-empty-links -->

| Employee         | Salary |                                                              |
| ---------------- | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | \$1    | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | \$100K | For all the blogging she does.                               |
| [Fred Bloggs](#) | \$100M | Pictures are worth a thousand words, right? So Jane × 1,000. |
| [Jane Bloggs](#) | \$100B | With hair like that?! Enough said.                           |

| Header1 | Header2 | Header3 |
| :------ | :-----: | ------: |
| cell1   |  cell2  |   cell3 |
| cell4   |  cell5  |   cell6 |

## Unordered Lists (Nested)

-   List item one
    -   List item one
        -   List item one
        -   List item two
        -   List item three
        -   List item four
    -   List item two
    -   List item three
    -   List item four
-   List item two
-   List item three
-   List item four

## Ordered List (Nested)

1.  List item one
    1.  List item one
        1.  List item one
        2.  List item two
        3.  List item three
        4.  List item four
    2.  List item two
    3.  List item three
    4.  List item four
2.  List item two
3.  List item three
4.  List item four

## Forms

<form>
  <fieldset>
    <legend>Personalia:</legend>
    Name: <input type="text" size="30"><br>
    Email: <input type="text" size="30"><br>
    Date of birth: <input type="text" size="10"><br>
    Duck:
        <input type="radio" id="huey" name="drone" value="huey" checked><label for="huey">Huey</label>
        <input type="radio" id="dewey" name="drone" value="dewey"><label for="dewey">Dewey</label>
        <input type="radio" id="louie" name="drone" value="louie"><label for="louie">Louie</label>
    <br>
    Comment: <textarea></textarea>
  </fieldset>
</form>

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://apple.com 'Apple').

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

\*[CSS]: Cascading Style Sheets

This plugin works on MDAST, a Markdown AST implemented by
[remark](https://github.com/wooorm/remark)

\*[MDAST]: Markdown Abstract Syntax Tree. \_[AST]: Abstract syntax tree

The HTML specification is maintained by the W3C. It sometimes uses CSS.

\*[HTML]: Hyper Text Markup Language \_[W3C]: World Wide Web Consortium

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be
your best friend.

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Corrections

#### Deleted Tag

<del datetime="2016-08-23T14:57:34+00:00">SecureTransport may fall back to
using OpenSSL if the environment variable `SSL_CERT_FILE` is set.</del>

#### Insert Tag

This tag should denote <ins>inserted</ins> text.

#### Both

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum The best things in life
are <del>mostly free</del><ins>actually really expensive</ins>. A little
<ins>learning</ins><del>knowledge</del> is a dangerous thing. lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>. Useful for things
like <kbd>⌘</kbd> + <kbd>s</kbd>

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Q Tag

<q>Developers, developers, developers&hellip;</q> &#8211;Steve Ballmer

### Mark Tag

It is a dark time for the Rebellion. Although the Death Star has been
destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
forces from their hidden base and pursued them across the galaxy.

Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
freedom fighters led by Luke Skywalker has established a new secret base on
the remote ice world of Hoth.

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2"
down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which
should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.
