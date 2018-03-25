// @flow
// @format
import { css } from 'glamor'
import {
  heroColor,
  mellowColor,
  deemphasisColor,
  emphasisColor,
} from './colors'

/**
 * Based on:
 * GHColors theme by Avi Aryan (http://aviaryan.in)
 * Inspired by Github syntax coloring
 */

const monoSpaceFontFamily = [
  `SFMono-Regular`,
  `Consolas`,
  `Liberation Mono`,
  `Menlo`,
  `Courier`,
  `monospace`,
]

const codeBox = {
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderColor: `#dddddd`,
  backgroundColor: `#f8f8f8`,
  borderRadius: `1px`,
}

const baseColor = deemphasisColor.saturationl(5.5).lightness(21.6)

css.global(`code[class*='language-'], pre[class*='language-']`, {
  color: baseColor,
  fontFamily: monoSpaceFontFamily.map(s => `"${s}"`).join(`, `),
  direction: `ltr`,
  textAlign: `left`,
  fontSize: `0.95em`,
  lineHeight: `1.2em`,
  tabSize: 4,
  hyphens: `none`,
})

css.global(
  `pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection`,
  {
    backgroundColor: heroColor,
  }
)
/* Code blocks */
css.global(`pre[class*='language-']`, {
  padding: `1em`,
  margin: `0.5em 0`,
  overflow: `auto`,
  whiteSpace: `pre`,
  wordSpacing: `normal`,
  wordBreak: `normal`,
  ...codeBox,
})

/* Inline code */
css.global(`:not(pre) > code[class*='language-']`, {
  display: `inline-block`,
  paddingRight: `0.2em`,
  paddingLeft: `0.2em`,
  paddingTop: `1px`,
  paddingBottom: `1px`,
  whiteSpace: `pre-wrap`,
  wordBreak: `word-break`,
  ...codeBox,
})

css.global(`.token.comment, .token.prolog, .token.doctype, .token.cdata`, {
  color: deemphasisColor.saturationl(20).lightness(10),
  fontStyle: `italic`,
})

css.global(`.token.namespace`, {
  opacity: `0.7`,
})

css.global(`.token.string, .token.attr-value`, {
  color: deemphasisColor.saturationl(86).lightness(48),
})

css.global(`.token.punctuation, .token.operator`, {
  color: baseColor /* no highlight */,
})

css.global(
  `.token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted`,
  {
    color: emphasisColor.saturationl(95).lightness(40),
  }
)

css.global(
  `.token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector`,
  {
    color: mellowColor.saturationl(100).lightness(43),
  }
)

css.global(
  `.token.function, .token.deleted, .language-autohotkey .token.tag`,
  {
    color: heroColor.saturationl(94).lightness(31),
  }
)

css.global(
  `.token.tag, .token.selector, .language-autohotkey .token.keyword`,
  {
    color: mellowColor.saturationl(100).lightness(31),
  }
)

css.global(`.gatsby-highlight-code-line`, {
  backgroundColor: heroColor.saturationl(100).lightness(93),
  display: `block`,
  marginRight: `-1em`,
  marginLeft: `-1em`,
  paddingRight: `1em`,
  paddingLeft: `0.75em`,
})

css.global(`.gatsby-highlight pre.language-terminal`, {
  background: `#222`,
})

css.global(`.gatsby-highlight pre.language-terminal code`, {
  color: `#eee`,
  textShadow: `0 1.0px #888`,
})

css.global(`.token.important, .token.function, .token.bold`, {
  fontWeight: `bold`,
})

css.global(`.token.italic`, {
  fontStyle: `italic`,
})
