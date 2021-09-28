//
// @format
import { css } from '@emotion/react'
import PropType from 'prop-types'
import * as React from 'react'

import PostCard from './PostCard.jsx'

const minCardWidth = `24ch`

const PostCardList = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow: auto;
      margin: 0;
      & > * {
        margin: calc(var(--font-size) / 2) 0;
      }
      @media max-width: calc(2 * ${minCardWidth}) {
        margin: 0 calc(-1 * var(--font-size) / 2);
        & > * {
          margin: calc(var(--font-size) / 2);
        }
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
            minWidth: minCardWidth,
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
