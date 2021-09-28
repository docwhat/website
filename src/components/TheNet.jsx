//
// @format

import { css } from '@emotion/react'
import Link from 'gatsby-link'
import React from 'react'

import { serifFonts } from '../utils/style.js'

const theCss = css({
  fontSize: `calc(var(--font-size) / 2)`,
  fontFamily: serifFonts /* stylelint-disable-line */,
  color: `var(--middle-color)`,

  position: `fixed`,
  bottom: `calc(var(--font-size) / 2)`,
  right: `var(--font-size)`,
  zIndex: 200,
})

const TheNet = () => (
  <Link css={theCss} to="/pi/">
    π
  </Link>
)
export default TheNet
