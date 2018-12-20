// @flow
// @format
import verticalRhythm from 'compass-vertical-rhythm'
import { css } from 'glamor'
import gray from 'gray-percentage'
import Typography from 'typography'
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

import { heroColor, mellowColor } from '../utils/colors'

// Details:
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js

const quoteCommaList = (fontList: Array<string>): string =>
  fontList.map(s => (s.match(/\s/) ? `"${s}"` : s)).join(', ')

const monospaceFontFamily = [
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
]

const systemFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

const myTypography = new Typography({
  title: `docwhat2018`,
  baseFontSize: `21px`,
  baseLineHeight: `1.5`,
  googleFonts: [],
  headerFontFamily: systemFontFamily,
  bodyFontFamily: systemFontFamily,
  scaleRatio: 2,
  bodyColor: gray(20),
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  /* Github has all block elements use 1/2 rhythm not a full rhythm. */
  blockMarginBottom: 1 / 2,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: `16px`,
      baseLineHeight: `1.5`,
    })

    return {
      h1: {
        borderBottom: `1.0px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1.0px)`,
        marginBottom: rhythm(3 / 4),
        marginTop: rhythm(1.5),
      },
      h2: {
        borderBottom: `1.0px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1.0px)`,
        marginBottom: rhythm(1 / 4),
        marginTop: rhythm(1),
      },
      h6: {
        color: gray(47),
      },
      'h3,h4,h5,h6': {
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1),
      },

      hr: {
        height: `1.0px`,
      },

      'ol,ul': {
        marginLeft: rhythm(1.25),
      },
      'li>ol,li>ul': {
        marginLeft: rhythm(1.25),
      },

      'code,pre,tt': {
        fontFamily: quoteCommaList(monospaceFontFamily),
        lineHeight: `1.5`,
      },

      kbd: {
        background: gray(93),
        borderRadius: `0.25em`,
        boxShadow: `0.1em 0.1em 0.1em ${gray(43)}`,
        color: gray(31),
        cursor: `pointer`,
        display: `inline-block`,
        fontSize: `0.9em`,
        fontWeight: `600`,
        letterSpacing: `1px`,
        lineHeight: `1`,
        margin: `0 0.15em`,
        padding: `0.2em 0.4em`,
        userSelect: `none`,
        verticalAlign: `text-bottom`,
      },

      'kbd:hover, kbd:hover *': {
        color: `black`,
      },

      'kbd:active, kbd:active *': {
        color: `black`,
        boxShadow: `0.1em 0.1em 0 ${gray(81)} inset`,
      },

      blockquote: {
        ...scale(1 / 5),
        color: gray(45),
        backgroundColor: heroColor
          .fade(0.8)
          .desaturate(0.3)
          .string(),
        paddingLeft: rhythm(18 / 16),
        paddingRight: rhythm(1 / 2),
        paddingTop: rhythm(1 / 2),
        paddingBottom: rhythm(1 / 2),
        marginLeft: 0,
        position: `relative`,
      },
      'blockquote:before': {
        ...scale(5 / 2),
        lineHeight: 1,
        padding: 0,
        margin: 0,
        content: `"“"`,
        position: `absolute`,
        left: `-0.25ex`,
        top: `-0.25ex`,
        color: heroColor.darken(0.5).string(),
      },
      'blockquote > blockquote:before': {
        content: `none`,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
        display: `block`,
      },
      'blockquote cite:before': {
        content: `"— "`,
      },

      [MOBILE_MEDIA_QUERY]: {
        blockquote: {
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: rhythm(9 / 16),
        },
        '.gatsby-highlight > pre[class*="language-"]': {
          padding: `0.2em`,
          borderLeft: `none`,
          borderRight: `none`,
        },
      },
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
    }
  },
})

// Links
css.global(`body`, {
  minWidth: `320px`,
})

css.global(`a`, {
  color: mellowColor.saturationl(50).lightness(50),
  textDecoration: `none`,
})

css.global(`a:hover,a:active`, {
  textDecoration: `underline`,
})

css.global(`iframe`, {
  width: `100%`,
  height: `${(100 * 9) / 16}vw`,
  maxWidth: `640px`,
  maxHeight: `420px`,
})

css.global(`ins`, {
  textDecoration: `none`,
})

css.global(`del`, {
  textDecoration: `solid ${mellowColor} line-through`,
  opacity: `0.6`,
})

css.global(`del > *`, {
  textDecoration: `inherit`,
})

css.global(`svg`, {
  verticalAlign: `text-top`,
})

require(`./prismjs.js`)

// Hot reload myTypography in development.
if (process.env.NODE_ENV !== `production`) {
  myTypography.injectStyles()
}

export const { rhythm, scale, options } = myTypography
export default myTypography
