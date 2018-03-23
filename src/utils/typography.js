import Typography from 'typography'
import gray from 'gray-percentage'
import { css } from 'glamor'
import { heroColor } from '../utils/colors.js'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

// Details:
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js

const typography = new Typography({
  title: 'docwhat2018',
  baseFontSize: '21px',
  baseLineHeight: '1.5',
  googleFonts: [
    {
      name: 'Quattrocento',
      styles: ['700'],
    },
    {
      name: 'Quattrocento Sans',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: [
    'Quattrocento',
    'serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Quattrocento Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 700,
  bodyWeight: 'normal',
  boldWeight: 700,
  // Github has all block elements use 1/2 rhythm not a full rhythm.
  blockMarginBottom: 1 / 2,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '15px',
      baseLineHeight: '1.5',
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
        height: '1.0px',
      },

      'ol,ul': {
        marginLeft: rhythm(1.25),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: rhythm(1.25),
      },

      '.gatsby-highlight-code-line': {
        backgroundColor: heroColor.string(),
        display: 'block',
        marginRight: '-1em',
        marginLeft: '-1em',
        paddingRight: '1em',
        paddingLeft: '0.75em',
      },
      '.gatsby-highlight pre.language-terminal': {
        background: '#222',
      },
      '.gatsby-highlight pre.language-terminal code': {
        color: '#eee',
        textShadow: '0 1.0px #888',
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
        position: 'relative',
      },
      'blockquote:before': {
        ...scale(5 / 2),
        lineHeight: 1,
        padding: 0,
        margin: 0,
        content: '"“"',
        position: 'absolute',
        left: '-0.25ex',
        top: '-0.25ex',
        color: heroColor.darken(0.5).string(),
      },
      'blockquote > blockquote:before': {
        content: 'none',
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
        display: 'block',
      },
      'blockquote cite:before': {
        content: '"— "',
      },

      [MOBILE_MEDIA_QUERY]: {
        blockquote: {
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: rhythm(9 / 16),
        },
        '.gatsby-highlight > pre[class*="language-"]': {
          paddingLeft: 0,
          paddingRight: 0,
          borderLeft: 'none',
          borderRight: 'none',
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
css.global('body', {
  minWidth: '320px',
})

css.global('a', {
  color: '#4078c0',
  textDecoration: 'none',
  ':hover,:active': {
    textDecoration: 'underline',
  },
})

css.global('iframe', {
  width: '100%',
  height: `${100 * 9 / 16}vw`,
  maxWidth: '640px',
  maxHeight: '420px',
})

css.global('svg', {
  verticalAlign: 'text-top',
})

css.global({})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
