import React from 'react'
import { css } from 'glamor'
import Link from './Link.js'
import { rhythm } from '../utils/typography.js'

const theCss = css({
  position: 'fixed',
  bottom: rhythm(1 / 2),
  right: rhythm(1),
  fontSize: '0.4rem',
  color: 'rgba(136, 136, 136, 0.3)',
})

export const TheNetwork = props => (
  <Link className={theCss} to="/pi/">
    Π
  </Link>
)
export default TheNetwork
