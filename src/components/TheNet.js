// @flow
// @format

import React from 'react'
import { css } from 'glamor'
import Link from './Link'
import { rhythm } from '../utils/typography'

const theCss = css({
  position: `fixed`,
  bottom: rhythm(1 / 2),
  right: rhythm(1),
  fontSize: `0.4rem`,
  color: `rgba(136, 136, 136, 0.3)`,
})

const TheNet = () => (
  <Link className={theCss} to="/pi/">
    Π
  </Link>
)
export default TheNet
