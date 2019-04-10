[![](https://images.microbadger.com/badges/version/docwhat/docwhat:stable.svg)](https://microbadger.com/images/docwhat/docwhat:stable)
[![](https://images.microbadger.com/badges/image/docwhat/docwhat:stable.svg)](https://microbadger.com/images/docwhat/docwhat:stable)
[![](https://images.microbadger.com/badges/commit/docwhat/docwhat:stable.svg)](https://microbadger.com/images/docwhat/docwhat:stable)
[![](https://travis-ci.org/docwhat/docwhat.svg?branch=stable)](https://travis-ci.org/docwhat/docwhat)

[![](https://images.microbadger.com/badges/version/docwhat/docwhat:master.svg)](https://microbadger.com/images/docwhat/docwhat:master)
[![](https://images.microbadger.com/badges/image/docwhat/docwhat:master.svg)](https://microbadger.com/images/docwhat/docwhat:master)
[![](https://images.microbadger.com/badges/commit/docwhat/docwhat:master.svg)](https://microbadger.com/images/docwhat/docwhat:master)
[![](https://travis-ci.org/docwhat/docwhat.svg?branch=master)](https://travis-ci.org/docwhat/docwhat)

# Source for docwhat.org

This is the static site source code for [docwhat.org](https://docwhat.org).

It's powered by [Gatsby](https://gatsbyjs.org).

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
