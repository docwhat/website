import { css } from 'glamor'
import { heroColor } from './colors.js'
import Color from 'color'

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

const baseColor = heroColor.saturationl(5).lightness(22)
// const baseColor = Color('#393a34')

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
    backgroundColor: `#b3d4fc`,
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
  color: heroColor.saturationl(20).darken(0.2),
  fontStyle: `italic`,
})

css.global(`.token.namespace`, {
  opacity: `0.7`,
})

css.global(`.token.string, .token.attr-value`, {
  color: `#e3116c`,
})

css.global(`.token.punctuation, .token.operator`, {
  color: baseColor /* no highlight */,
})

css.global(
  `.token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted`,
  {
    color: `hsl(228, 95%, 40%)`,
  }
)

css.global(
  `.token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector`,
  {
    color: heroColor.darken(0.5),
  }
)

css.global(
  `.token.function, .token.deleted, .language-autohotkey .token.tag`,
  {
    color: `#9a050f`,
  }
)

css.global(
  `.token.tag, .token.selector, .language-autohotkey .token.keyword`,
  {
    color: `#00009f`,
  }
)

css.global(`.token.important, .token.function, .token.bold`, {
  fontWeight: `bold`,
})

css.global(`.token.italic`, {
  fontStyle: `italic`,
})
