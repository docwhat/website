// @flow
// @format

// Various Constants
// This must not use ES6 magic!

exports.authorName = `Christian Höltje`
exports.authorUrl = `https://docwhat.org`

exports.authorSameAs = [
  `https://twitter.com/docwhat`,
  `https://github.com/docwhat`,
]

exports.authorJsonLd = {
  '@type': `Person`,
  name: exports.authorName,
  sameAs: exports.authorSameAs,
}

exports.siteTitle = `docwhat's blog`

exports.siteUrl =
  typeof window === `undefined` ? exports.authorUrl : window.location.origin
