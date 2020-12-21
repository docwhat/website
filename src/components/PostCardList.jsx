// @flow
// @format
import { css } from '@emotion/react'
import * as React from 'react'

import { shevy } from '../utils/style.js'
import PostCard from './PostCard.jsx'

const { baseSpacing: bs } = shevy

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
      justify-content: space-between;
      overflow: auto;
      margin: 0 ${bs(-1 / 2)};
      & > * {
        margin: ${bs(1 / 2)};
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
            minWidth: `24ch`,
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
