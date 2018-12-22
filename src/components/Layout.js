// @format
// @flow
import { withPrefix } from 'gatsby'
import g, { Div } from 'glamorous'
import * as React from 'react'

import Link from '../components/Link'
import logoUrl from '../icons/logo.svg'
import { heroColor } from '../utils/colors'
import { options as typo, rhythm, scale } from '../utils/typography'

type Props = {
  children?: React.Node,
  location: any,
}

const Layout = (props: Props) => {
  const { children, location } = props

  const isHomepage =
    location.pathname === withPrefix('/') ||
    location.pathname === withPrefix('/pi/')
  const scaleFactor = isHomepage ? 5 / 4 : 1 / 4

  const header = (
    <g.Header
      css={{
        ...scale(1.5 * scaleFactor),
        marginBottom: rhythm(1.5 * scaleFactor),
        marginTop: 0,
        borderBottomStyle: `solid`,
        borderBottomWidth: rhythm((1 / 2) * scaleFactor),
        borderBottomColor: heroColor.string(),
        fontFamily: typo.headerFontFamily
          .map(fontName => `"${fontName}"`)
          .join(`, `),
        fontWeight: 700,
        textRendering: `optimizeLegibility`,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to="/"
      >
        <g.Img
          src={logoUrl}
          alt="docwhat's avatar"
          height="1em"
          width="1em"
          verticalAlign="text-top"
        />
        {`docwhat's blog`}
      </Link>
    </g.Header>
  )
  return (
    <Div
      css={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        margin: `0 auto`,
      }}
    >
      {header}
      {children}
    </Div>
  )
}

export default Layout
