// @format
// @flow
import { Global } from '@emotion/core'
import { withPrefix } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import logoUrl from '../icons/logo.svg'
import { heroColor } from '../utils/colors'
import globalCss from '../utils/style.js'
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
    <header
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
        css={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to="/"
      >
        <img
          src={logoUrl}
          alt="docwhat's avatar"
          css={{
            height: '1em',
            width: '1em',
            verticalAlign: 'text-bottom',
            margin: 0,
          }}
        />
        {`docwhat's blog`}
      </Link>
    </header>
  )
  return (
    <div
      css={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        margin: `0 auto`,
      }}
    >
      <Global styles={globalCss} />
      {header}
      {children}
    </div>
  )
}

export default Layout
