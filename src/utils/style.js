// @flow
// @format
import { css } from '@emotion/core'

import {
  deemphasisColor,
  emphasisColor,
  heroColor,
  mellowColor,
} from './colors'

const baseColor = deemphasisColor.saturationl(5.5).lightness(21.6)

const globalCss = css({
  // Links
  body: {
    minWidth: '320px',
  },

  a: {
    color: mellowColor
      .saturationl(50)
      .lightness(50)
      .string(),
    textDecoration: 'none',
  },

  'a:hover,a:active': {
    textDecoration: 'underline',
  },

  iframe: {
    width: '100%',
    height: `${(100 * 9) / 16}vw`,
    maxWidth: '640px',
    maxHeight: '420px',
  },

  ins: {
    textDecoration: 'none',
  },

  del: {
    textDecoration: `solid ${mellowColor} line-through`,
    opacity: '0.6',
  },

  'del > *': {
    textDecoration: 'inherit',
  },

  svg: {
    verticalAlign: 'text-top',
  },

  /**
   * Based on:
   * GHColors theme by Avi Aryan (http://aviaryan.in)
   * Inspired by Github syntax coloring
   */

  "code[class*='language-'], pre[class*='language-']": {
    color: baseColor.string(),
    direction: 'ltr',
    textAlign: 'left',
    tabSize: 4,
    hyphens: 'none',
  },

  "pre[class*='language-']::selection, pre[class*='language-'] ::selection, code[class*='language-']::selection, code[class*='language-'] ::selection": {
    backgroundColor: heroColor.string(),
  },

  /* Code blocks */
  "pre[class*='language-']": {
    padding: '1em',
    overflow: 'auto',
    backgroundColor: deemphasisColor
      .saturationl(29)
      .lightness(97)
      .string(),
    borderRadius: '0.19em',

    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
  },

  /* Inline code */
  ":not(pre) > code[class*='language-']": {
    display: 'inline-block',
    padding: '0.2em 0.4em',
    backgroundColor: mellowColor
      .saturationl(13)
      .lightness(12)
      .alpha(0.05)
      .string(),
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    borderRadius: '0.19em',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: deemphasisColor
      .saturationl(20)
      .lightness(10)
      .string(),
    fontStyle: 'italic',
  },

  '.token.namespace': {
    opacity: '0.7',
  },

  '.token.string, .token.attr-value': {
    color: deemphasisColor
      .saturationl(86)
      .lightness(48)
      .string(),
  },

  '.token.punctuation, .token.operator, .token.command': {
    /* no highlight */
    color: baseColor.string(),
    fontWeight: 'bold',
  },

  '.token.entity, .token.url, .token.symbol, .token.number, .token.boolean, .token.variable, .token.constant, .token.property, .token.regex, .token.inserted': {
    color: emphasisColor
      .saturationl(95)
      .lightness(40)
      .string(),
  },

  '.token.atrule, .token.keyword, .token.attr-name, .language-autohotkey .token.selector, .token.coord': {
    color: mellowColor
      .saturationl(100)
      .lightness(43)
      .string(),
  },

  '.token.function, .token.deleted, .language-autohotkey .token.tag, .token.commit_sha1': {
    color: heroColor
      .saturationl(94)
      .lightness(31)
      .string(),
  },

  '.token.tag, .token.selector, .language-autohotkey .token.keyword': {
    color: mellowColor
      .saturationl(100)
      .lightness(31)
      .string(),
  },

  '.gatsby-highlight-code-line': {
    backgroundColor: heroColor
      .saturationl(100)
      .lightness(93)
      .string(),
    display: 'block',
    marginRight: '-1em',
    marginLeft: '-1em',
    paddingRight: '1em',
    paddingLeft: '0.75em',
  },

  '.token.important, .token.function, .token.bold': {
    fontWeight: 'bold',
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  'pre[class*="language-"].line-numbers': {
    padding: '0',
    paddingLeft: '3.8em',
    position: 'relative',
    counterReset: 'linenumber',
  },
  'pre[class*="language-"].line-numbers > code': {
    position: 'relative',
    whiteSpace: 'inherit',
  },
  '.line-numbers .line-numbers-rows': {
    position: 'absolute',
    pointerEvents: 'none',
    top: '0',
    left: '-3.8em',
    width: '3em',
    letterSpacing: '-1px',
    borderRight: '1px solid #999',
    userSelect: 'none',
  },
  '.line-numbers-rows > span': {
    pointerEvents: 'none',
    display: 'block',
    counterIncrement: 'linenumber',
  },
  '.line-numbers-rows > span:before': {
    content: 'counter(linenumber)',
    color: '#999',
    display: 'block',
    padding: 0,
    paddingRight: '0.8em',
    textAlign: 'right',
  },
})

export default globalCss
