// @format
import React from 'react'
import { css } from 'glamor'
import g from 'glamorous'
import PropTypes from 'prop-types'
import Link from './Link.js'
import { IconArrowRight, IconArrowLeft } from './IconArrows.js'
const PostPaginator = ({ newer, older }) => (
  <g.Nav
    css={{
      margin: '1em 0',
    }}
  >
    <ul
      css={{
        display: 'flex',
        margin: 0,
        padding: 0,
        flexDirection: 'row',
        listStyleType: 'none',
      }}
    >
      {older && (
        <g.Li css={{ margin: 0, padding: 0, flex: 1 }}>
          <Link to={older.fields.slug}>
            <div css={{ fontWeight: 'bold' }}>Older</div>
            <div>
              <IconArrowLeft /> {older.fields.title}
            </div>
          </Link>
        </g.Li>
      )}
      {newer && (
        <g.Li css={{ margin: 0, padding: 0, flex: 1, textAlign: 'right' }}>
          <Link to={newer.fields.slug}>
            <div css={{ fontWeight: 'bold' }}>Newer</div>
            <div>
              {newer.fields.title} <IconArrowRight />
            </div>
          </Link>
        </g.Li>
      )}
    </ul>
  </g.Nav>
)

export default PostPaginator
