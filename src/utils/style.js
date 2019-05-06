// @flow
// @format
import { css } from '@emotion/core'
import VerticalRhythm from 'compass-vertical-rhythm'
import gray from 'gray-percentage'

// import {
//   MOBILE_MEDIA_QUERY,
//   TABLET_MEDIA_QUERY,
// } from 'typography-breakpoint-constants'
import {
  deemphasisColor,
  emphasisColor,
  heroColor,
  lightBackground,
  mellowColor,
} from './colors'

const baseColor = deemphasisColor.saturationl(5.5).lightness(21.6)

const base = {
  baseFontSize: '21px',
  baseLineHeight: '1.5',
}
const vr = VerticalRhythm(base)

export const rhythm = vr.rhythm
export const adjustFontSizeTo = vr.adjustFontSizeTo

export const scale = (value: number) => {
  const pixels = Math.pow(2, value) * parseInt(base.baseFontSize, 10)
  return adjustFontSizeTo(`${pixels}px`)
}

const quoteFontFamily = (fontList: Array<string>): string =>
  fontList.map(s => (s.match(/\s/) ? `"${s}"` : s)).join(', ')

export const monospaceFontFamily = [
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
]
export const monospaceFontFamilyCss = quoteFontFamily(monospaceFontFamily)

export const baseFontFamily = [
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
export const baseFontFamilyCss = quoteFontFamily(baseFontFamily)

// export const LARGER_DISPLAY_WIDTH = "1600px"
// export const LARGE_DISPLAY_WIDTH = "1280px"
export const DEFAULT_WIDTH = '980px'
export const TABLET_WIDTH = '768px'
export const MOBILE_WIDTH = '480px'

// export const LARGER_DISPLAY_MEDIA_QUERY =
//   "@media only screen and (max-width:1600px)"
// export const LARGE_DISPLAY_MEDIA_QUERY =
//   "@media only screen and (max-width:1280px)"
export const DEFAULT_MEDIA_QUERY = `@media only screen and (max-width:${DEFAULT_WIDTH})`
export const TABLET_MEDIA_QUERY = `@media only screen and (max-width:${TABLET_WIDTH})`
export const MOBILE_MEDIA_QUERY = `@media only screen and (max-width:${MOBILE_WIDTH})`

// export const MIN_LARGER_DISPLAY_MEDIA_QUERY = "@media (min-width:1600px)"
// export const MIN_LARGE_DISPLAY_MEDIA_QUERY = "@media (min-width:1280px)"
export const MIN_DEFAULT_MEDIA_QUERY = `@media (min-width:${DEFAULT_WIDTH})`
export const MIN_TABLET_MEDIA_QUERY = `@media (min-width:${TABLET_WIDTH})`
export const MIN_MOBILE_MEDIA_QUERY = `@media (min-width:${MOBILE_WIDTH})`

// export default "
// html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
// body{margin:0}
// article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}
// audio,canvas,progress,video{display:inline-block}
// audio:not([controls]){display:none;height:0}
// progress{vertical-align:baseline}
// [hidden],template{display:none}
// a{background-color:transparent;}
// a:active,a:hover{outline-width:0}
// abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
// b,strong{font-weight:inherit;font-weight:bolder}
// dfn{font-style:italic}
// h1{font-size:2em;margin:.67em 0}
// mark{background-color:#ff0;color:#000}
// small{font-size:80%}
// sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
// sub{bottom:-.25em}
// sup{top:-.5em}
// img{border-style:none}
// svg:not(:root){overflow:hidden}
// code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}
// figure{margin:1em 40px}
// hr{box-sizing:content-box;height:0;overflow:visible}
// button,input,optgroup,select,textarea{font:inherit;margin:0}
// optgroup{font-weight:700}
// button,input{overflow:visible}
// button,select{text-transform:none}
// [type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}
// [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
// [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
// fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
// legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
// textarea{overflow:auto}
// [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}

const globalCss = css`
  * {
    box-sizing: inherit;
  }

  html {
    background-color: ${lightBackground.string()};
    color: hsla(0,0%,0%,0.8);
    font-family: ${baseFontFamilyCss};
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-kerning: normal;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: normal;
    font-size: 16pt;
  }

  ${TABLET_MEDIA_QUERY} {
    html {
      font-size: 100%;
      line-height: 1.5;
    }
  }

  body {
    margin: 0 auto;
    max-width: 55ch;
    min-width: 320px;
    padding: 0;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
  }

  body > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  tt,pre,code,kbd,samp,var {
    font-family: ${monospaceFontFamilyCss};
    font-size: 1em;
  }

  pre {
    overflow: auto;
  }

  article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {
    display:block;
  }

  b, strong {
    font-weight: inherit;
    font-weight: bolder
  }

  q {
    font-style: italic;
  }
  q::before {
    content: open-quote;
  }
  q::after {
    content: close-quote;
  }

  h1 { font-size: ${scale(5 / 5).fontSize}; }
  h2 { font-size: ${scale(3 / 5).fontSize}; }
  h3 { font-size: ${scale(2 / 5).fontSize}; }
  h4 { font-size: ${scale(0 / 5).fontSize}; }
  h5 { font-size: ${scale(-1 / 5).fontSize}; }
  h6 { font-size: ${scale(-1.5 / 5).fontSize}; }
  h1 {
    font-size: 2em;

    margin-top: ${rhythm(3 / 2)};
    margin-bottom: ${rhythm(3 / 4)};

    padding-top: 0;
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);
    padding-left: 0;
    padding-right: 0;

    line-height: 1.1;

    border-bottom: 1px solid ${heroColor.string()};
  }

  h2 {
    border-bottom: 1px solid ${heroColor.string()};
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);

    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1 / 4)};
  }
  h6 {
    color: ${gray(47)};
  }
  h3, h4, h5, h6 {
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1 / 2)};
  }

  hr {
    box-sizing: content-box;
    color: ${heroColor.string()};
    height: 0;
    height: 1px;
    overflow: visible;
  }

  p {
    margin-bottom: 0.75rem;

    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  a {
    background-color: transparent;
    color: ${mellowColor
      .saturationl(50)
      .lightness(50)
      .string()};
  }

  a, a:hover, a:active {
    outline-width: 0;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6,
  hgroup,
  ul, ol, dl, dd,
  p,
  figure, pre, table, fieldset, blockquote,
  form, noscript, iframe, img, hr, address
  {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: ${rhythm(1 / 2)};
  }

  p *:last-child {
    margin-bottom: 0;
  }

  ol, ul {
    list-style-image: none;
    list-style-position: outside;
    margin-left: ${rhythm(1)};
  }

  li {
    margin-bottom: ${rhythm(1 / 4)};
  }

  li > ol, li > ul {
    margin-left: ${rhythm(1.25)};
  }

  li > p {
    margin-bottom: ${rhythm(1 / 4)};
  }

  li > *:last-child {
    margin-bottom: 0;
  }

  blockquote {
    ${scale(1 / 5)}

    color: ${gray(45)};
    background-color: ${heroColor
      .fade(0.8)
      .desaturate(0.3)
      .string()};
    padding-bottom: ${rhythm(1 / 2)};
    padding-left: ${rhythm(18 / 16)};
    padding-right: ${rhythm(1 / 2)};
    padding-top: ${rhythm(1 / 2)};
    margin-left: 0;
    position: relative;
  }
  blockquote:before {
    ${scale(5 / 2)}

    line-height: 1;
    padding: 0;
    margin: 0;
    content: '“';
    position: absolute;
    left: -0.10ex;
    top: -0.25ex;
    color: ${heroColor.darken(0.5).string()};
  }
  blockquote > blockquote:before {
    content: none;
  }
  blockquote cite {
    display: block;
    font-size: 1rem;
  }
  blockquote cite:before {
    content: '— ';
  }
  blockquote > *:last-child {
    margin-bottom: 0;
  }
  blockquote > *:last-child {
    margin-bottom: 0;
  }
  ${MOBILE_MEDIA_QUERY} {
    blockquote {
      margin-left: 0;
      margin-right: 0;
      padding-left: ${rhythm(9 / 16)};
    }
  }

  kbd {
    background: ${gray(93)};
    border-radius: 0.25em;
    box-shadow: 0.1em 0.1em 0.1em ${gray(43)};
    color: ${gray(31)};
    cursor: pointer;
    display: inline-block;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1;
    margin: 0 0.15em;
    padding: 0.2em 0.4em;
    user-select: none;
    vertical-align: text-bottom;
  }
  kbd:hover, kbd:hover * {
    color: black;
  }
  kbd:active, kbd:active * {
    color: black;
    box-shadow: 0.1em 0.1em 0 ${gray(81)} inset;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -.25em;
  }
  sup {
    top: -.5em;
  }
  img {
    border-style: none;
  }

  /* abbr with a title attribute */
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  iframe {
    width: 100%;
    height: ${(100 * 9) / 16}vw;
    max-width: 640px;
    max-height: 420px;
  }

  ins {
    text-decoration: solid ${deemphasisColor.string()} underline;
  }

  del {
    color: inherit;
    text-decoration: solid ${emphasisColor.string()} line-through;
    opacity: 0.8;
  }

  del > * {
    text-decoration: inherit;
  }

  svg {
    vertical-align: text-top;
  }


  table {
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    text-align: left;
  }
  td,th {
    text-align: left;
    border-bottom: 1px solid ${gray(88)};
    font-feature-settings: "tnum";
    padding-left: ${rhythm(2 / 3)};
    padding-right: ${rhythm(2 / 3)};
    padding-top: ${rhythm(1 / 2)};
    padding-bottom: calc(${rhythm(1 / 2)} - 1px);
  }
  th:first-child,td:first-child {
    padding-left: 0;
  }
  th:last-child,td:last-child {
    paddingRight: 0;
  }

  /**
   * Based on:
   * GHColors theme by Avi Aryan (http://aviaryan.in)
   * Inspired by Github syntax coloring
   */

  code[class*='language-'], pre[class*='language-'] {
    direction: ltr;
    text-align: left;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection {
    background-color: ${heroColor.string()};
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: ${rhythm(1 / 2)};
    background-color: ${deemphasisColor
      .saturationl(29)
      .lightness(97)
      .string()};
    border-radius: 0.19em;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    min-height: 2em;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.4em;
    background-color: ${mellowColor
      .saturationl(13)
      .lightness(12)
      .alpha(0.05)
      .string()};
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 0.2em;
  }

  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: ${deemphasisColor
      .saturationl(20)
      .lightness(10)
      .string()};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string, .token.attr-value {
    color: ${deemphasisColor
      .saturationl(86)
      .lightness(48)
      .string()};
  }

  .token.punctuation, .token.operator, .token.command {
    /* no highlight */
    color: ${baseColor.string()};
    font-weight: bold;
  }

  .token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted {
    color: ${emphasisColor
      .saturationl(95)
      .lightness(40)
      .string()};
  }

  .token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector, .token.coord {
    color: ${mellowColor
      .saturationl(100)
      .lightness(43)
      .string()};
  }

  .token.function, .token.deleted, .language-autohotkey .token.tag, .token.commit_sha1 {
    color: ${heroColor
      .saturationl(94)
      .lightness(31)
      .string()};
  }

  .token.tag, .token.selector, .language-autohotkey .token.keyword {
    color: ${mellowColor
      .saturationl(100)
      .lightness(31)
      .string()};
  }

  .gatsby-highlight-code-line {
    background-color: ${heroColor
      .saturationl(100)
      .lightness(93)
      .string()};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
  }

  .token.important, .token.function, .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 3.8em;
    position: relative;
    counter-reset: linenumber;
  }
  pre[class*='language-'].line-numbers > code {
    position: relative;
    white-space: inherit;
  }
  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: -3.8em;
    width: 3em;
    letter-spacing: -1px;
    border-right: 1px solid #999;
    user-select: none;
  }
  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }
  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding: 0;
    padding-right: 0.8em;
    text-align: right;
  }

  ${MOBILE_MEDIA_QUERY} {
    pre[class*="language-"], pre[class*="language-"].line-numbers {
      padding: 0.2em;
      border-left: none;
      border-right: none;
    }
    .line-numbers-rows > span {
      display: none;
    }
  }
`

export default globalCss
