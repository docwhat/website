// @format
import { css } from '@emotion/react'

import * as reboot from './bootstrap-reboot.css'
import { deemphasisColor, emphasisColor, heroHue } from './colors'
import { MOBILE_MEDIA_QUERY } from './media-queries'
import { shevy } from './shevy.js'

export const serifFonts = `"Hoefler Text", Constantia, Georgia, serif`

const {
  // baseSpacing: bs,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  content,
} = shevy

const leading = parseFloat(content.fontSize) * parseFloat(content.lineHeight)

const globalCss = css`
  :root {
    --font-size: ${body.fontSize};
    --line-height: ${body.lineHeight};
    --leading: ${leading};

    --serif-fonts: ${serifFonts};

    --h1-font-size: ${h1.fontSize};
    --h1-line-height: ${h1.lineHeight};
    --h1-margin-bottom: ${h1.marginBottom};

    --h2-font-size: ${h2.fontSize};
    --h2-line-height: ${h2.lineHeight};
    --h2-margin-bottom: ${h2.marginBottom};

    --h3-font-size: ${h3.fontSize};
    --h3-line-height: ${h3.lineHeight};
    --h3-margin-bottom: ${h3.marginBottom};

    --h4-font-size: ${h4.fontSize};
    --h4-line-height: ${h4.lineHeight};
    --h4-margin-bottom: ${h4.marginBottom};

    --h5-font-size: ${h5.fontSize};
    --h5-line-height: ${h5.lineHeight};
    --h5-margin-bottom: ${h5.marginBottom};

    --h6-font-size: ${h6.fontSize};
    --h6-line-height: ${h6.lineHeight};
    --h6-margin-bottom: ${h6.marginBottom};

    --hero-hue: ${heroHue}deg;
    --mellow-hue: calc(var(--hero-hue) + 300deg);

    --text-color: hsl(var(--hero-hue), 69%, 10% / 0.9);
    --bg-color: hsl(var(--hero-hue), 0%, 100%);
    --hero-color: hsl(var(--hero-hue), 99%, 62%);
    --anti-hero-color: hsl(calc(var(--hero-hue) + 180deg), 99%, 62%);

    --middle-color: hsl(var(--hero-hue), 4%, 70%);

    --button-text-color: white;
    --button-bg-color: hsl(var(--hero-hue), 99%, 43%);
    --button-hover-text-color: white;
    --button-hover-bg-color: hsl(var(--hero-hue), 99%, 49%);

    --link-color: hsl(var(--mellow-hue), 50%, 50%);
    @media (prefers-color-scheme: dark) {
      --text-color: hsl(var(--hero-hue), 69%, 100%);
      --bg-color: hsl(var(--hero-hue), 100%, 4.7%);
      --hero-color: hsl(var(--hero-hue), 99%, 31%);
      --anti-hero-color: hsl(calc(var(--hero-hue) + 180deg), 99%, 31%);

      --middle-color: hsl(var(--hero-hue), 4%, 60%);

      --button-text-color: white;
      --button-bg-color: hsl(var(--hero-hue), 99%, 22%);
      --button-hover-text-color: white;
      --button-hover-bg-color: hsl(var(--hero-hue), 99%, 25%);

      --link-color: hsl(var(--mellow-hue), 90%, 70%);
    }
  }

  ${reboot}

  html {
    background-color: var(--bg-color);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  html body {
    background: none;
    color: var(--text-color);
    margin: 0 auto;
    max-width: 70ch;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    padding: 0 calc(var(--font-size) * var(--line-height) * 1.5);
    ${MOBILE_MEDIA_QUERY} {
      padding: 0 calc(var(--font-size) * var(--line-height) * 1 / 8);
    }
  }

  mark {
    background-color: var(--hero-color);
    color: hsl(var(--hero-hue), 4%, 1%);
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
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    margin-bottom: calc(var(--h1-margin-bottom) - 2px);
    border-bottom: 2px solid var(--hero-color);
  }
  h2 {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    margin-bottom: calc(var(--h2-margin-bottom) - 2px);
    border-bottom: 2px solid var(--hero-color);
  }
  h3 {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    margin-bottom: var(--h3-margin-bottom);
  }
  h4 {
    font-size: var(--h4-font-size);
    line-height: var(--h4-line-height);
    margin-bottom: var(--h4-margin-bottom);
  }
  h5 {
    font-size: var(--h5-font-size);
    line-height: var(--h5-line-height);
    margin-bottom: var(--h5-margin-bottom);
  }
  h6 {
    font-size: var(--h6-font-size);
    line-height: var(--h6-line-height);
    margin-bottom: var(--h6-margin-bottom);
  }
  h5 {
    color: hsl(var(--hero-hue), 4%, 25%);
  }
  h6 {
    color: hsl(var(--hero-hue), 4%, 47%);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    & a {
      color: inherit;
    }
  }

  hr {
    color: var(--hero-color);
    background-color: var(--hero-color);
    border: 1px solid transparent;
  }

  p {
    padding: 0;
    margin: 0 0 ${content.marginBottom};
    line-height: ${content.lineHeight};
    font-size: ${content.fontSize};
  }

  a {
    color: var(--link-color);
    &:hover {
      color: inherit;
    }
  }

  li,
  li > p {
    margin-bottom: 0.25rem;
  }

  blockquote {
    color: var(--text-color);
    background-color: var(--bg-color);
    border-left: 10px solid var(--hero-color);
    box-shadow: 0.15em 0.15em 0.3em hsl(var(--hero-color), 4%, 43%);
    @media (prefers-color-scheme: dark) {
      box-shadow: none;
    }
    padding: calc(var(--font-size) / 2);
    position: relative;
    font-style: italic;
  }

  blockquote > *:first-of-type {
    text-indent: var(--font-size);
  }

  blockquote:before {
    font-size: 3.75em;
    font-family: var(--serif-font);
    content: '“';
    position: absolute;
    left: 0.06em;
    top: -0.12em;
    color: var(--hero-color);
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
      padding-right: calc(var(--font-size) / 4);
    }
  }

  figcaption {
    text-align: right;
    font-size: calc(var(--font-size) / 2);
    color: hsl(var(--hero-color), 4%, 40%);
  }

  kbd {
    background: hsl(var(--hero-color), 4%, 93%);
    border-radius: 0.25em;
    box-shadow: 0.1em 0.1em 0.1em hsl(var(--hero-color), 4%, 43%);
    color: hsl(var(--hero-color), 4%, 31%);
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
    box-shadow: 0.1em 0.1em 0 hsl(var(--hero-color), 4%, 81%) inset;
  }

  iframe {
    width: 100%;
    height: calc(100vw * 9 / 16);
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
    margin: calc(var(--font-size) * var(--line-height) / 2) 0;
    table-layout: fixed;
    width: 100%;
  }

  td,
  th {
    font-feature-settings: 'tnum';
    line-height: 1;

    padding-left: cal(var(--font-size) * var(--line-height));
    padding-right: cal(var(--font-size) * var(--line-height));
    padding-top: cal(var(--font-size) * var(--line-height) / 2);

    border-bottom: 1px solid hsl(var(--hero-color), 4%, 50%);
    padding-bottom: calc(var(--font-size) * var(--line-height) / 2 - 1px);
    &[align='right'] {
      text-align: right;
    }
    &[align='center'] {
      text-align: center;
    }
    &[align='left'] {
      text-align: left;
    }
  }

  th > *:first-of-type,
  td > *:first-of-type {
    padding-left: 0;
  }

  th > *:last-of-type,
  td > *:last-of-type {
    padding-right: 0;
  }

  tbody tr {
    &:nth-of-type(even) {
      &:hover {
        background-color: ${emphasisColor.alpha(0.09).string()};
      }
    }
    &:nth-of-type(odd) {
      background-color: ${deemphasisColor.saturationl(30).alpha(0.09).string()};
      &:hover {
        background-color: ${deemphasisColor.alpha(0.09).string()};
      }
    }
  }

  legend {
    width: fit-content;
  }
  fieldset {
    border: 2px solid silver;
    padding: calc(var(--font-size) / 4) calc(var(--font-size) / 2)
      calc(var(--font-size) / 2);
  }
`

export default globalCss

// vim:set ft=javascript.jsx:
