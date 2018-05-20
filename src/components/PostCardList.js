// @flow
// @format
import React from 'react'
import PropTypes from 'prop-types'
import { Div } from 'glamorous'
import PostCard from './PostCard'
import { rhythm } from '../utils/typography'

const PostCardList = props => (
  <Div
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
  </Div>
)

PostCardList.propTypes = {
  postcards: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default PostCardList
