// @flow
// @format
import * as React from 'react'

import { rhythm } from '../utils/typography'
import PostCard from './PostCard'

type PostCardEdge = {
  node: {
    fields: {
      slug: string,
      title: string,
      ymdDate: string,
    },
    excerpt: string,
  },
}

type Props = {
  postcards: Array<PostCardEdge>,
}

const PostCardList = (props: Props): React.Node => (
  <div
    css={{
      display: `flex`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      maxWidth: rhythm(24 - 1), // from Layout
      overflow: 'auto',
      margin: rhythm(-1 / 2),
      '& > *': {
        margin: rhythm(1 / 2),
        width: rhythm(10),
        maxWidth: rhythm(24 - 2),
      },
    }}
  >
    {props.postcards.map(({ node }) => {
      const {
        fields: { title, slug, ymdDate },
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
          ymdDate={ymdDate}
          excerpt={excerpt}
        />
      )
    })}
  </div>
)

export default PostCardList
