// @flow
// @format
import { css } from '@emotion/core'

import {
  deemphasisColor,
  emphasisColor,
  heroColor,
  mellowColor,
} from './colors.js'
import { MOBILE_MEDIA_QUERY } from './media-queries.js'

/**
 * Based on:
 * GHColors theme by Avi Aryan (http://aviaryan.in)
 * Inspired by Github syntax coloring
 */
const prismCss = css`
  code[class*='language-'],
  pre[class*='language-'] {
    direction: ltr;
    text-align: left;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background-color: ${heroColor.string()};
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 0.75rem;
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

  .gatsby-highlight-code-line pre[class*='language-'] {
    padding: 0;
  }

  ${MOBILE_MEDIA_QUERY} {
    pre[class*='language-'] {
      font-size: 85%;
    }
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0 0.3em;
    background-color: ${mellowColor
      .saturationl(13)
      .lightness(12)
      .alpha(0.05)
      .string()};
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 0.2em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${deemphasisColor
      .saturationl(20)
      .lightness(10)
      .string()};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string,
  .token.attr-value {
    color: ${deemphasisColor
      .saturationl(86)
      .lightness(48)
      .string()};
  }

  .token.punctuation,
  .token.operator,
  .token.command {
    /* no highlight */
    color: ${deemphasisColor
      .saturationl(5.5)
      .lightness(21.6)
      .string()};
    font-weight: bold;
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: ${emphasisColor
      .saturationl(95)
      .lightness(40)
      .string()};
  }

  .token.atrule,
  .token.keyword,
  .token.attr-name,
  .language-autohotkey .token.selector,
  .token.coord {
    color: ${mellowColor
      .saturationl(100)
      .lightness(43)
      .string()};
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag,
  .token.commit_sha1 {
    color: ${heroColor
      .saturationl(94)
      .lightness(31)
      .string()};
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
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
    margin: 0 -1ch;
    padding: 0 1ch;
  }

  .token.important,
  .token.function,
  .token.bold {
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
    pre[class*='language-'],
    pre[class*='language-'].line-numbers {
      padding: 0.25rem 0;
      border-left: none;
      border-right: none;
    }
    .line-numbers-rows > span {
      display: none;
    }
  }
`

export default prismCss
