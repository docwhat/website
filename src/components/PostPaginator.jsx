// @format
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import { IconArrowLeft, IconArrowRight } from './IconArrows'

const Pager = ({ node, side, text }) => (
  <li
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
  </li>
)

Pager.propTypes = {
  node: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const PostPaginator = ({ newer, older }) => (
  <nav
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
      {older && <Pager node={older} side="left" text="Older" />}
      {newer && <Pager node={newer} side="right" text="Newer" />}
    </ul>
  </nav>
)

PostPaginator.propTypes = {
  newer: PropTypes.object,
  older: PropTypes.object,
}

export default PostPaginator
