// @format
//
import { css, Global } from '@emotion/react'
import Link from 'gatsby-link'
import PropType from 'prop-types'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import logoUrl from '../icons/logo.svg'
import { darkHeroColor, lightHeroColor } from '../utils/colors.js'
import { MOBILE_MEDIA_QUERY } from '../utils/media-queries.js'
import prismCss from '../utils/prism-style.js'
import globalCss from '../utils/style.js'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Global styles={globalCss} />
      <Global styles={prismCss} />
      <Helmet>
        <meta
          name="theme-color"
          content={lightHeroColor}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={darkHeroColor}
          media="(prefers-color-scheme: dark)"
        />
      </Helmet>
      <header
        css={css`
          font-size: calc(var(--font-size) * 2);
          font-weight: 700;
          line-height: 1;
          margin: 0 0 var(--font-size);
          text-shadow: -1px -1px 0 var(--bg-color), 1px -1px 0 var(--bg-color),
            -1px 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color);
          text-rendering: optimizeLegibility;

          ${MOBILE_MEDIA_QUERY} {
            margin: var(--font-size) 0 calc(var(--font-size) / 2);
            font-size: var(--font-size);
            text-align: center;
          }
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: var(--text-color);
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
            margin: calc(var(--font-size) / -4) 0 0;
            height: calc(var(--font-size) / 2);
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
