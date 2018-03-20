import React from 'react'
import { css } from 'glamor'
import g from 'glamorous'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const linkStyle = css({ display: 'block' })

const PostPaginator = ({ newer, older }) => (
  <g.Div
    css={{
      backgroundColor: '#def',
      margin: '1em 0',
    }}
  >
    {older && (
      <Link className={linkStyle} to={older.fields.slug}>
        older &lt;- {older.fields.title}
      </Link>
    )}
    {newer && (
      <Link className={linkStyle} to={newer.fields.slug}>
        newer -&gt; {newer.fields.title}
      </Link>
    )}
  </g.Div>
)

export default PostPaginator
