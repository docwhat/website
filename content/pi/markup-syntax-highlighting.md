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

### Javascript

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

### Ruby

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

### JSON

```json
{
    "name": "John Doe"
}
```

```json5
{
    // comment
    name: 'John Doe',
}
```

### TypeScript

```typescript
// Type Guarding is the term where you influence the code
// flow analysis via code. TypeScript uses existing JavaScript
// behavior which validates your objects at runtime to influence
// the code flow. This example assumes you've read example:code-flow

// To run through these examples, we'll create some classes,
// here's a system for handling internet or telephone orders.

interface Order {
    address: string
}
interface TelephoneOrder extends Order {
    callerNumber: string
}
interface InternetOrder extends Order {
    email: string
}

// Then a type which could be one of the two Order subtypes or undefined
type PossibleOrders = TelephoneOrder | InternetOrder | undefined

// And a function which returns a PossibleOrder
declare function getOrder(): PossibleOrders
const possibleOrder = getOrder()
```

```ts
// This is also typescript.
const isTS = true
```

### YAML

```yaml
version: 1.0
stringy: 'now is the time for all good men to come to'
items:
    apples: 23
    oranges: 34
numbers:
    - 10
    - 100
    - 23
```

```yml
also_yaml: true
```

### Shell & prompts

A fancy prompt on anything with shell or bash:

```sh{promptUser: alice}{promptHost: dev.localhost}{outputLines: 2-14}
cat -v /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
# Added by Docker Desktop
# To allow the same kube context to work on the host and the container:
127.0.0.1 kubernetes.docker.internal
# End of section
```

```bash{promptUser: root}{promptHost: 'localhost'}{outputLines: 2-10}
gh pr list --label ":robot: bot" --jq '.[] \
    | select(.mergeStateStatus == "CLEAN")' --json number,mergeStateStatus \
    | jq -r '"gh pr comment --body \"@dependabot merge\" \(.number)"'
```

```zsh
$ echo $SHELL
zsh
```

```sh
$ whoami
docwhat
```

```shell-session
$ id
uid=501(docwhat) gid=20(staff) groups=20(staff),12(everyone),61(localaccounts),79(_appserverusr),80(admin),81(_appserveradm),98(_lpadmin),701(com.apple.sharepoint.group.1),33(_appstore),100(_lpoperator),204(_developer),250(_analyticsusers),395(com.apple.access_ftp),398(com.apple.access_screensharing),399(com.apple.access_ssh),400(com.apple.access_remote_ae)
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

### Diff with language syntax highlighting

```diff-javascript
diff --git a/gatsby-config.js b/gatsby-config.js
index 67570ba6..eed27646 100644
--- a/gatsby-config.js
+++ b/gatsby-config.js
@@ -120,6 +120,11 @@ module.exports = {
                 viml: `vim`,
                 zsh: `bash`,
               },
+              prompt: {
+                user: 'docwhat',
+                host: 'tardis',
+                global: false,
+              },
             },
           },
         ],
```

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

The above should be some vim code.
