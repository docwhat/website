// @flow
// @format

// Various Constants
// This must not use ES6 magic!

exports.authorName = 'Christian Höltje'
exports.authorUrl = 'https://docwhat.org'

exports.authorSameAs = [
  'https://twitter.com/docwhat',
  'https://github.com/docwhat',
]

exports.siteTitle = "docwhat's blog"
exports.siteKeywords =
  'software engineering agile devops ruby golang javascript refactoring'
exports.siteDescription = 'Personal blog of Christian Höltje'

exports.siteUrl =
  typeof window === 'undefined' ? exports.authorUrl : window.location.origin

exports.sourceUrl = 'https://github.com/docwhat/docwhat'

exports.twitterUsername = '@docwhat'
exports.githubUsername = 'docwhat'
