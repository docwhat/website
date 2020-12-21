// @format
// @flow
import { css, Global } from '@emotion/react'
import Link from 'gatsby-link'
import * as React from 'react'

import logoUrl from '../icons/logo.svg'
import { MOBILE_MEDIA_QUERY } from '../utils/media-queries.js'
import prismCss from '../utils/prism-style.js'
import globalCss, { shevy } from '../utils/style.js'

type Props = {
  children?: React.Node,
}

const { baseSpacing: bs } = shevy

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Global styles={globalCss} />
      <Global styles={prismCss} />
      <header
        css={css`
          font-size: ${bs(2)};
          font-weight: 700;
          line-height: 1;
          margin: 0 0 ${bs(1)};
          text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
            1px 1px 0 #fff;
          text-rendering: optimizeLegibility;

          ${MOBILE_MEDIA_QUERY} {
            margin: ${bs(1)} 0 ${bs(1 / 2)};
            font-size: ${bs(1)};
            text-align: center;
          }
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
            &:hover {
              text-decoration: none;
            }
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
        <hr
          css={css`
            margin: ${bs(-1 / 4)} 0 0;
            height: ${bs(1 / 2)};
          `}
        />
      </header>
      {children}
    </>
  )
}

export default Layout
