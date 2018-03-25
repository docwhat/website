// @format
// @flow
import React from 'react'
import g, { H1, Div } from 'glamorous'
import Link from '../components/Link.js'
import PropTypes from 'prop-types'
import Logo from '../icons/logo.svg'

import { rhythm, scale, options as typo } from '../utils/typography'
import { heroColor } from '../utils/colors.js'

class DefaultLayout extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let scaleFactor = location.pathname === rootPath ? 5 / 4 : 1 / 4

    header = (
      <g.Header
        css={{
          ...scale(1.5 * scaleFactor),
          marginBottom: rhythm(1.5 * scaleFactor),
          marginTop: 0,
          borderBottomStyle: `solid`,
          borderBottomWidth: rhythm(1 / 2 * scaleFactor),
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
          to={`/`}
        >
          <Logo />
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
        {children()}
      </Div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
}

export default DefaultLayout
