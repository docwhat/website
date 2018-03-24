// @format
import React from 'react'
import { css } from 'glamor'
import g from 'glamorous'
import PropTypes from 'prop-types'
import Link from './Link.js'
import { IconArrowRight, IconArrowLeft } from './IconArrows.js'

const Pager = ({ props, node, side, text }) => (
  <g.Li
    css={{
      margin: 0,
      padding: 0,
      flex: 1,
      textAlign: side,
    }}
  >
    <Link
      to={node.fields.slug}
      css={{
        display: `block`,
      }}
      title={node.fields.date}
    >
      <div css={{ fontWeight: `bold` }}>{text}</div>
      <div>
        {side !== `right` ? <IconArrowLeft /> : null} {node.fields.title}
        {` `}
        {side === `right` ? <IconArrowRight /> : null}
      </div>
    </Link>
  </g.Li>
)

const PostPaginator = ({ newer, older }) => (
  <g.Nav
    css={{
      margin: `1em 0`,
    }}
  >
    <ul
      css={{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        listStyleType: `none`,
        margin: 0,
        padding: 0,
      }}
    >
      {older && <Pager node={older} side={`left`} text={`Older`} />}
      {newer && <Pager node={newer} side={`right`} text={`Newer`} />}
    </ul>
  </g.Nav>
)

export default PostPaginator
