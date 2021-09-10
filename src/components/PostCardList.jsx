//
// @format
import { css } from '@emotion/react'
import PropType from 'prop-types'
import * as React from 'react'

import { bs } from '../utils/shevy.js'
import PostCard from './PostCard.jsx'

const PostCardList = (props) => (
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

PostCardList.propTypes = {
  postcards: PropType.arrayOf(PropType.object).isRequired,
}

export default PostCardList
