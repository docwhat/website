import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

require('prismjs/themes/prism.css')

class Template extends React.Component {
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
          borderBottomColor: '#d8ff66',
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

export default Template
