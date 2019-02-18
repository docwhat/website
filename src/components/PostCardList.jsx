// @format
import PropTypes from 'prop-types'
import React from 'react'

import { rhythm } from '../utils/typography'
import PostCard from './PostCard'

const PostCardList = props => (
  <div
    css={{
      display: `flex`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      margin: rhythm(-1 / 2),
      '&>*': { margin: rhythm(1 / 2) },
    }}
  >
    {props.postcards.map(({ node }) => {
      const {
        fields: { title, slug, date },
        excerpt,
      } = node

      return (
        <PostCard
          overrideCss={{
            flex: `1 1 ${rhythm(10)}`,
            '&>p': { textAlign: `justify` },
          }}
          key={slug}
          slug={slug}
          title={title}
          date={date}
          excerpt={excerpt}
        />
      )
    })}
  </div>
)

PostCardList.propTypes = {
  postcards: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default PostCardList
