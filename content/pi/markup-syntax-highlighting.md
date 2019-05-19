---
id: '93ec299a-af93-4e67-871a-28ed775bbe6e'
test: true
date: 2019-01-13
title: 'Markup: Syntax Highlighting'
excerpt: 'Post displaying the various ways of highlighting code in Markdown.'
last_modified_at: 2018-01-03T09:45:06-05:00
header:
    teaser: 'assets/images/markup-syntax-highlighting-teaser.jpg'
tags:
    - code
    - syntax highlighting
toc: true
---

Syntax highlighting is a feature that displays source code, in different
colors and fonts according to the category of terms. This feature facilitates
writing in a structured language such as a programming language or a markup
language as both structures and syntax errors are visually distinct.
Highlighting doesn't affect the meaning of the text itself; it's intended only
for human readers.[^1]

[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

### GFM Code Blocks

GitHub Flavored Markdown
[fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/)
are supported. To modify styling and highlight colors edit
`/_sass/syntax.scss`.

```css
#container {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%;
}
```

```javascript{1,4-6}
// Highlighting lines 1 and 4-6
plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [`gatsby-remark-prismjs`],
        },
    },
]
```

```html
{% raw %}
<nav class="pagination" role="navigation">
    {% if page.previous %}
    <a
        href="{{ site.url }}{{ page.previous.url }}"
        class="btn"
        title="{{ page.previous.title }}"
        >Previous article</a
    >
    {% endif %} {% if page.next %}
    <a
        href="{{ site.url }}{{ page.next.url }}"
        class="btn"
        title="{{ page.next.title }}"
        >Next article</a
    >
    {% endif %}
</nav>
<!-- /.pagination -->{% endraw %}
```

```ruby
module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
      tag_title_prefix = site.config['tag_title_prefix'] || 'Tagged: '
      tag_title_suffix = site.config['tag_title_suffix'] || '&#8211;'
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['description'] = "An archive of posts tagged #{tag}."
    end
  end
end
```

### Code Blocks in Lists

Indentation matters. Be sure the indent of the code block aligns with the
first non-space character after the list item marker (e.g., `1.`). Usually
this will mean indenting 3 spaces instead of 4.

1.  Do step 1.
2.  Now do this:

    ```ruby
    def print_hi(name)
      puts "Hi, #{name}"
    end
    print_hi('Tom')
    #=> prints 'Hi, Tom' to STDOUT.
    ```

3)  Now you can do this.

### inlineCode highligthing

A plain `inline text`.

Some ruby `ruby›{ a: true, b: 3, c: "cat" }` code inline.

### Ensure code is escaped

The button should be inside the `pre`/`code` block when you inspect the
elements:

Inline version `<button />` is here.

```
Block version <button /> is here.
```

See [bug #4597](https://github.com/gatsbyjs/gatsby/issues/4597)

### Long inline code

This is a really
`javascript›const reallyLongNameThatIsAnnoyinglyLong = { apples: 1, cats: 3, dogs: 20, deer: 2, rodents: 5 };`
and the sentence continues afterwards.

### Code Embed

An example of a code file embed below.

`embed:gist-2973488/function.vim`

### GitHub Gist Embed

An example of a Gist embed below.

<script src="https://gist.github.com/mmistakes/77c68fbb07731a456805a7b473f47841.js"></script>
