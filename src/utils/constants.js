/* Various Constants */

export const authorName = "Christian Höltje"
export const authorUrl = "https://docwhat.org"
export const authorSameAs = [
  "https://twitter.com/docwhat",
  "https://github.com/docwhat"
]
export const authorJsonLd = {
  "@type": "Person",
  "name": authorName,
  "sameAs": authorSameAs,
}

export const siteTitle = "docwhat's blog"
export const siteUrl = (typeof window === 'undefined') ? authorUrl : window.location.origin
