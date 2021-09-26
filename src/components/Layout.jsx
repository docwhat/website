// @format
//
import { css, Global } from '@emotion/react'
import Link from 'gatsby-link'
import PropType from 'prop-types'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import logoUrl from '../icons/logo.svg'
import { heroColor } from '../utils/colors.js'
import { MOBILE_MEDIA_QUERY } from '../utils/media-queries.js'
import prismCss from '../utils/prism-style.js'
import { bs } from '../utils/shevy.js'
import globalCss from '../utils/style.js'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Global styles={globalCss} />
      <Global styles={prismCss} />
      <Helmet>
        <meta name="theme-color" content={heroColor} />
      </Helmet>
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

Layout.propTypes = {
  children: PropType.node.isRequired,
}

export default Layout
