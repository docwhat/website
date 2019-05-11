// @flow
// @format
import { css } from '@emotion/core'
import VerticalRhythm from 'compass-vertical-rhythm'

import reboot from './bootstrap-reboot.css'
import {
  deemphasisColor,
  emphasisColor,
  grey,
  heroColor,
  lightBackground,
  mellowColor,
} from './colors'
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from './media-queries'

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

const globalCss = css`
  ${reboot};

  html {
    background-color: ${lightBackground.string()};
    font-size: 1.3rem;
  }

  ${TABLET_MEDIA_QUERY} {
    html {
      font-size: 1rem;
    }
  }

  body {
    color: ${grey(20)};
    margin: 0 auto;
    max-width: 70ch;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
  }


  body > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  mark{
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

  h1 { font-size: ${scale(5 / 5).fontSize}; }
  h2 { font-size: ${scale(3 / 5).fontSize}; }
  h3 { font-size: ${scale(2 / 5).fontSize}; }
  h4 { font-size: ${scale(0 / 5).fontSize}; }
  h5 { font-size: ${scale(-1 / 5).fontSize}; }
  h6 { font-size: ${scale(-1.5 / 5).fontSize}; }
  h1 {
    padding-top: 0;
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);
    padding-left: 0;
    padding-right: 0;

    border-bottom: 1px solid ${heroColor.string()};
  }
  h2 {
    border-bottom: 1px solid ${heroColor.string()};
    padding-bottom: calc(${rhythm(1 / 4)} - 1px);
  }
  h6 {
    color: ${grey(47)};
  }

  hr {
    color: ${heroColor.string()};
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

  .qq p *:last-child {
    margin-bottom: 0;
  }
  .qq li > *:last-child {
    margin-bottom: 0;
  }


  li, li > p {
    margin-bottom: 0.25rem;
  }

  blockquote {
    ${scale(1 / 5)}

    color: ${grey(45)};
    background-color: ${heroColor
      .fade(0.8)
      .desaturate(0.3)
      .string()};
    padding-bottom: ${rhythm(1 / 2)};
    padding-left: ${rhythm(18 / 16)};
    padding-right: ${rhythm(1 / 2)};
    padding-top: ${rhythm(1 / 2)};
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
  ${MOBILE_MEDIA_QUERY} {
    blockquote {
      margin-left: 0;
      margin-right: 0;
      padding-left: ${rhythm(9 / 16)};
    }
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
  kbd:hover, kbd:hover * {
    color: black;
  }
  kbd:active, kbd:active * {
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
    table-layout:fixed;
    width: 100%;
  }

  td, th {
    border-bottom: 1px solid ${grey(88)};
    font-feature-settings: "tnum";

    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: calc(0.75rem - 1px);
  }

  th:first-child,td:first-child {
    padding-left: 0;
  }

  th:last-child,td:last-child {
    padding-right: 0;
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${deemphasisColor
      .saturationl(30)
      .alpha(0.09)
      .string()};
  }

  legend{
    width: fit-content;
  }
  fieldset{
    border: 1px solid silver;
    padding: ${rhythm(1 / 4)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};
  }
`

export default globalCss

// vim:set ft=javascript.jsx:
