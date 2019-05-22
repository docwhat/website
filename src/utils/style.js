// @flow
// @format
import { css } from '@emotion/core'
import Shevy from 'shevyjs'

import reboot from './bootstrap-reboot.css'
import {
  deemphasisColor,
  emphasisColor,
  grey,
  heroColor,
  lightBackground,
  mellowColor,
} from './colors'
import { MOBILE_MEDIA_QUERY } from './media-queries'

const base = {
  baseFontSize: '20px',
  baseLineHeight: '1.5',
  baseFontScale: 'minorThird',
  proximity: true,
}
const leading =
  parseInt(base.baseFontSize, 10) * parseFloat(base.baseLineHeight)

export const serifFonts = `"Hoefler Text", Constantia, Georgia, serif`

export const shevy = new Shevy(base)

const {
  baseSpacing: bs,
  // lineHeightSpacing: lhs,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  // content,
} = shevy

const globalCss = css`
  ${reboot};

  html {
    background-color: ${lightBackground.string()};
    font-size: ${body.fontSize};
    line-height: ${body.lineHeight};
  }

  html.grid {
    background-image: url(//basehold.it/i/${leading});
    background-size: 4px ${leading}px;
    background-repeat: repeat;
  }

  body {
    background: none;
    color: ${grey(20)};
    margin: 0 auto;
    max-width: 70ch;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    padding: 0 ${bs(3 / 2)};
  }
  ${MOBILE_MEDIA_QUERY} {
    body {
      padding: 0 ${bs(1 / 4)};
    }
  }

  mark {
    background-color: ${heroColor
      .saturationl(100)
      .lightness(80)
      .string()};
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

  h1 {
    font-size: ${h1.fontSize};
    line-height: ${h1.lineHeight};
    margin-bottom: ${h1.marginBottom};
  }
  h2 {
    font-size: ${h2.fontSize};
    line-height: ${h2.lineHeight};
    margin-bottom: ${h2.marginBottom};
  }
  h3 {
    font-size: ${h3.fontSize};
    line-height: ${h3.lineHeight};
    margin-bottom: ${h3.marginBottom};
  }
  h4 {
    font-size: ${h4.fontSize};
    line-height: ${h4.lineHeight};
    margin-bottom: ${h4.marginBottom};
  }
  h5 {
    font-size: ${h5.fontSize};
    line-height: ${h5.lineHeight};
    margin-bottom: ${h5.marginBottom};
  }
  h6 {
    font-size: ${h6.fontSize};
    line-height: ${h6.lineHeight};
    margin-bottom: ${h6.marginBottom};
  }
  h1 {
    padding-top: 0;
    padding-bottom: calc(${bs(1 / 4)} - 1px);
    padding-left: 0;
    padding-right: 0;

    border-bottom: 1px solid ${heroColor.string()};
  }
  h2 {
    border-bottom: 1px solid ${heroColor.string()};
    padding-bottom: calc(${bs(1 / 4)} - 1px);
  }
  h6 {
    color: ${grey(47)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    & a {
      color: inherit;
    }
  }

  hr {
    color: ${heroColor.string()};
    background-color: ${heroColor.string()};
    border: 1px solid transparent;
  }

  p {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  a {
    color: ${mellowColor
      .saturationl(50)
      .lightness(50)
      .string()};
  }

  a:hover {
    color: inherit;
  }

  li,
  li > p {
    margin-bottom: 0.25rem;
  }

  blockquote {
    color: ${grey(45)};
    background-color: ${heroColor
      .fade(0.8)
      .desaturate(0.3)
      .string()};
    padding: ${bs(1 / 2)};
    position: relative;
  }

  blockquote > *:first-child {
    text-indent: ${bs(1)};
  }

  blockquote:before {
    font-size: 3.75em;
    font-family: ${serifFonts};
    content: '“';
    position: absolute;
    left: 0.06em;
    top: -0.12em;
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
  ${MOBILE_MEDIA_QUERY} {
    blockquote {
      padding-right: ${bs(1 / 4)};
    }
  }

  figcaption {
    text-align: right;
    font-size: ${bs(1 / 2)};
    color: ${grey(40)};
  }

  kbd {
    background: ${grey(93)};
    border-radius: 0.25em;
    box-shadow: 0.1em 0.1em 0.1em ${grey(43)};
    color: ${grey(31)};
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
  kbd:hover,
  kbd:hover * {
    color: black;
  }
  kbd:active,
  kbd:active * {
    color: black;
    box-shadow: 0.1em 0.1em 0 ${grey(81)} inset;
  }

  iframe {
    width: 100%;
    height: ${(100 * 9) / 16}vw;
  }

  ins {
    text-decoration: solid ${deemphasisColor.string()} underline;
  }

  del {
    color: inherit;
    opacity: 0.8;
    text-decoration: solid ${emphasisColor.string()} line-through;
  }

  del > * {
    text-decoration: inherit;
  }

  table {
    border-collapse: collapse;
    margin: 1rem 0;
    table-layout: fixed;
    width: 100%;
  }

  td,
  th {
    border-bottom: 1px solid ${grey(88)};
    font-feature-settings: 'tnum';

    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: calc(0.75rem - 1px);
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${deemphasisColor
      .saturationl(30)
      .alpha(0.09)
      .string()};
  }

  legend {
    width: fit-content;
  }
  fieldset {
    border: 2px solid silver;
    padding: ${bs(1 / 4)} ${bs(1 / 2)} ${bs(1 / 2)};
  }
`

export default globalCss

// vim:set ft=javascript.jsx:
