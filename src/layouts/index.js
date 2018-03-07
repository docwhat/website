import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"

import { rhythm, scale } from '../utils/typography'
import { heroColor } from '../utils/colors.js'

require('prismjs/themes/prism.css')

class DefaultLayout extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          borderBottomWidth: rhythm( 1 / 2 ),
          borderBottomColor: heroColor.string(),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {"docwhat's blog"}
        </Link>
      </h1>
    )
    return (
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: `0 auto`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
}

export default DefaultLayout
