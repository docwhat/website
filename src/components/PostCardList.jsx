// @flow
// @format
import { css } from '@emotion/core'
import * as React from 'react'

import { rhythm } from '../utils/style.js'
import PostCard from './PostCard.jsx'

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
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: ${rhythm(24 - 1)}; // from Layout
      overflow: auto;
      margin: ${rhythm(-1 / 2)};
      & > * {
        margin: ${rhythm(1 / 2)};
      }
    `}
  >
    {props.postcards.map(({ node }) => {
      const {
        fields: { title, slug, ymdDate },
        excerpt,
      } = node

      return (
        <PostCard
          overrideCss={{
            flex: `1`,
            minWidth: `20ch`,
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
