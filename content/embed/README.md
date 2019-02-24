# Embeddable Examples

You can embed these examples into a blog post using this syntax:

```md
`embed:<dirname>/<filename>`
```

## Maintenance

### Adding new embeds via git subtree

```sh
git subtree add --squash --prefix content/embed/gist-5889193 https://gist.github.com/5889193.git master
```

### Updating embeds via git subtree

```sh
git subtree pull --squash --prefix content/embed/gist-5889193 https://gist.github.com/5889193.git master
git subtree pull --squash --prefix content/embed/gist-2973488 https://gist.github.com/2973488.git master
git subtree pull --squash --prefix content/embed/life https://github.com/docwhat/life.git master
```
