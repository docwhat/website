// @format
// @flow
import { Global, css } from '@emotion/core'
import { withPrefix } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import logoUrl from '../icons/logo.svg'
import { heroColor } from '../utils/colors.js'
import globalCss, { MOBILE_MEDIA_QUERY, rhythm } from '../utils/style.js'

type Props = {
  children?: React.Node,
  location: any,
}

const Layout = (props: Props) => {
  const { children, location } = props

  const isHomepage =
    location.pathname === withPrefix('/') ||
    location.pathname === withPrefix('/pi/')
  const scaleFactor = isHomepage ? 2.5 : 1.5

  const header = (
    <header
      css={css`
        font-size: ${1 * scaleFactor}rem;
        line-height: 0;
        margin-top: 1rem;
        margin-bottom: ${rhythm(1 / 2)};
        border-bottom-style: solid;
        border-bottom-width: 0.25rem;
        border-bottom-color: ${heroColor.string()};
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
        padding: 0;
        font-weight: 700;
        text-rendering: optimizeLegibility;

        ${MOBILE_MEDIA_QUERY} {
          font-size: 1rem;
          border-bottom-width: 0.5rem;
          text-align: center;
        },
      `}
    >
      <Link
        css={css`
          box-shadow: none;
          text-decoration: none;
          color: inherit;
        `}
        to="/"
      >
        <img
          src={logoUrl}
          alt="docwhat's avatar"
          css={css`
            height: 1em;
            width: 1em;
            vertical-align: text-bottom;
            margin: 0;
          `}
        />
        {"docwhat's blog"}
      </Link>
    </header>
  )
  return (
    <>
      <Global styles={globalCss} />
      {header}
      {children}
    </>
  )
}

export default Layout
