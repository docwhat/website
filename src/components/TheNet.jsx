//
// @format

import { css } from '@emotion/react'
import Link from 'gatsby-link'
import React from 'react'

import { serifFonts } from '../utils/style.js'
import { bs } from '../utils/shevy.js'

const theCss = css({
  fontSize: bs(1 / 2),
  fontFamily: serifFonts /* stylelint-disable-line */,
  color: `hsla(0, 0%, 0%, 0.4)`,

  position: `fixed`,
  bottom: bs(1 / 2),
  right: bs(1),
  zIndex: 200,
})

const TheNet = () => (
  <Link css={theCss} to="/pi/">
    π
  </Link>
)
export default TheNet
