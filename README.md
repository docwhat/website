# Source for docwhat.org

> This is the static site source code for [docwhat.org](https://docwhat.org).
>
> It's powered by [Gatsby](https://gatsbyjs.org).

![CI](https://github.com/docwhat/docwhat/workflows/CI/badge.svg)
![Lint Code Base](https://github.com/docwhat/docwhat/workflows/Lint%20Code%20Base/badge.svg)
![Check Markdown links](https://github.com/docwhat/docwhat/workflows/Check%20Markdown%20links/badge.svg)

## Developing

```console
yarn install
gatsby develop
```

## HOWTO

### Fix DPI for an image

If an image has the wrong size in Markdown it's because the density/DPI is
wrong:

```sh
convert original.jpg -density 300 -units pixelsperinch new.jpg
```

## Notes

-   [_Made Mistakes_ gatsby-test issue #1](https://github.com/mmistakes/gatsby-test/issues/1)
-   Incorporate this into `yarn develop` some how:
    <https://css-tricks.com/findingfixing-unintended-body-overflow/>
