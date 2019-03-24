// @flow
// @format

import Link from 'gatsby-link'
import * as React from 'react'

import { heroColor } from '../utils/colors.js'
import { rhythm } from '../utils/typography.js'

type Props = {
  to: string,
  children: React.Node,
}

const color = heroColor.negate()
const background = heroColor

const LinkButton = ({ children, to, ...other }: Props): React.Node => (
  <Link
    css={{
      display: `block`,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: rhythm(1 / 2),
      backgroundColor: background
        .desaturate(0.3)
        .lighten(0.3)
        .string(),
      color: color
        .desaturate(0.3)
        .lighten(0.3)
        .string(),
      userSelect: 'none',
      cursor: 'pointer',
      height: rhythm(1 + 1 / 4),
      lineHeight: rhythm(1 + 1 / 4),
      width: rhythm(5),
      borderRadius: rhythm(1),
      '&:hover': {
        textDecoration: 'none',
        boxShadow: `1px 1px 4px rgba(0, 0, 0, 0.5)`,
        backgroundColor: background.string(),
        color: color.string(),
      },
      '&:active': {
        boxShadow: `0 0 2px rgba(0, 0, 0, 0.8)`,
      },
    }}
    to={to}
    {...other}
  >
    {children}
  </Link>
)

export default LinkButton
