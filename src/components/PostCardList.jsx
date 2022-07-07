//
// @format
import { css } from '@emotion/react'
import PropType from 'prop-types'
import * as React from 'react'

import PostCard from './PostCard.jsx'

// We have to use px or em units because of the media queries.
const minCardWidth = `14em`
const minTwoCardWidth = `28em`

const PostCardList = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow: auto;
      margin: 0 calc(-1 * var(--base-spacing) / 2);
      & > * {
        margin: calc(var(--base-spacing) / 2);
      }
      @media (max-width: ${minTwoCardWidth}) {
        margin: 0;
        & > * {
          margin-left: 0;
          margin-right: 0;
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
