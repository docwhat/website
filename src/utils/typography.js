import Typography from 'typography'
import gray from 'gray-percentage'
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
        borderBottom: `1px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
        marginBottom: rhythm(3 / 4),
        marginTop: rhythm(1.5),
      },
      h2: {
        borderBottom: `1px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
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
      'ol,ul': {
        marginLeft: rhythm(1.25),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: rhythm(1.25),
      },
      a: {
        color: '#4078c0',
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        textDecoration: 'underline',
      },
      // blockquote: {
      //   borderLeft: `4px solid ${gray(87)}`,
      //   color: gray(47),
      //   marginTop: 0,
      //   marginRight: 0,
      //   marginLeft: 0,
      //   paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
      // },
      blockquote: {
        ...scale(1 / 5),
        color: gray(45),
        backgroundColor: gray(96),
        paddingLeft: rhythm(18 / 16),
        marginLeft: 0,
        // borderLeft: `${rhythm(6 / 16)} solid`,
        // borderColor: gray(96),
        position: 'relative',
      },
      'blockquote:before': {
        ...scale(2),
        lineHeight: 1,
        padding:0,
        margin:0,
        content: '"“"',
        // content: '"❝"',
        // fontFamily: 'Quattrocento',
        position: 'absolute',
        left: '-0.25ex',
        top: '-0.5ex',
        color: heroColor.darken(0.5).string(),
      },
      'blockquote:after': {
        ...scale(2),
        lineHeight: 1,
        padding:0,
        margin:0,
        content: '"”"',
        // content: '"❞"',
        // fontFamily: 'Quattrocento',
        position: 'absolute',
        right: '-0.25ex',
        bottom: '-0.5ex',
        color: heroColor.darken(0.5).string(),
      },
      'blockquote > blockquote:before': {
        content: 'none',
      },
      'blockquote > blockquote:after': {
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
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          borderLeft: `${rhythm(3 / 16)} solid`,
          borderColor: gray(90),
          paddingLeft: rhythm(9 / 16),
        },
      },
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
    }
  }
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
