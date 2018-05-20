// @flow
// @format

import React from 'react'
import { css } from 'glamor'
import Link from './Link'
import { rhythm } from '../utils/typography'

const theCss = css({
  fontSize: rhythm(1 / 2),
  fontFamily: `Quattrocento, serif`,
  color: `hsla(0, 0%, 0%, 0.4)`,

  position: `fixed`,
  bottom: rhythm(1 / 2),
  right: rhythm(1),
})

const TheNet = () => (
  <Link className={theCss} to="/pi/">
    π
  </Link>
)
export default TheNet
