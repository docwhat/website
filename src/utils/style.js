// @flow
// @format
import { css } from '@emotion/core'
import gray from 'gray-percentage'
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

import { options, rhythm, scale } from '../utils/typography'
import {
  deemphasisColor,
  emphasisColor,
  heroColor,
  lightBackground,
  mellowColor,
} from './colors'

const baseColor = deemphasisColor.saturationl(5.5).lightness(21.6)

const globalCss = css`
  html {
    background-color: ${lightBackground.string()};
  }

  body {
    min-width: 320px;
  }

  h1 {
    border-bottom: 1px solid ${gray(93)};
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);
    margin-bottom: ${rhythm(3 / 4)};
    margin-top: ${rhythm(1.5)};
  }
  h2 {
    border-bottom: 1px solid ${gray(93)};
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);
    margin-bottom: ${rhythm(1 / 4)};
    margin-top: ${rhythm(1)};
  }
  h6 {
    color: ${gray(47)};
  }
  h3, h4, h5, h6 {
    margin-bottom: ${rhythm(1 / 2)};
    margin-top: ${rhythm(1)};
  }

  hr {
    height: 1px;
  }

  ol, ul {
    margin-left: ${rhythm(1.25)};
  }

  li > ol, li > ul {
    margin-left: ${rhythm(1.25)};
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
    left: -0.25ex;
    top: -0.25ex;
    color: ${heroColor.darken(0.5).string()};
  }

  blockquote > blockquote:before {
    content: none;
  }
  blockquote > *:last-child {
    margin-bottom: 0;
  }
  blockquote cite {
    color: ${options.bodyColor};
    display: block;
    font-size: 1rem;
    font-weight: ${options.bodyWeight};
  }
  blockquote cite:before {
    content: '— ';
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

  a {
    color: ${mellowColor
      .saturationl(50)
      .lightness(50)
      .string()};
  }

  a, a:hover, a:active {
    text-decoration: underline;
  }

  iframe {
    width: 100%;
    height: ${(100 * 9) / 16}vw;
    max-width: 640px;
    max-height: 420px;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: solid ${mellowColor.string()} line-through;
    opacity: 0.6;
  }

  del > * {
    text-decoration: inherit;
  }

  svg {
    vertical-align: text-top;
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
    overflow: auto;
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

  ${TABLET_MEDIA_QUERY} {
    html {
      font-size: 100%;
      line-height: 1.5;
    }
  }
`

export default globalCss
