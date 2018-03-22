// @format
import React from 'react'
import { css } from 'glamor'
import g from 'glamorous'
import PropTypes from 'prop-types'
import Link from './Link.js'
import { IconArrowRight, IconArrowLeft } from './IconArrows.js'

const Pager = ({ props, node, side, text }) => (
  <g.Li css={{ margin: 0, padding: 0, flex: 1, textAlign: side }}>
    <Link to={node.fields.slug}>
      <div css={{ fontWeight: 'bold' }}>{text}</div>
      <div
        css={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {side !== 'right' ? <IconArrowLeft /> : null} {node.fields.title}{' '}
        {side === 'right' ? <IconArrowRight /> : null}
      </div>
    </Link>
  </g.Li>
)

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
      {newer && <Pager node={newer} side={'left'} text={'Newer'} />}
      {older && <Pager node={older} side={'right'} text={'Older'} />}
    </ul>
  </g.Nav>
)

export default PostPaginator
