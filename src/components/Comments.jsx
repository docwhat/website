// @flow
// @format
import { graphql } from 'gatsby'
import React from 'react'

import { ReactComponent as CommentsIcon } from '../icons/comments.svg'
import Comment from './Comment'

const Comments = data => {
  if (data.comments === null) {
    return ``
  }

  const {
    comments: { edges: comments },
  } = data

  const commentList = comments.map(({ node }) => {
    const {
      frontmatter: { name, url, email, uuid, friendlyDate, iso8601Date },
      html,
    } = node

    return (
      <Comment
        key={uuid}
        name={name}
        url={url}
        friendlyDate={friendlyDate}
        iso8601Date={iso8601Date}
        email={email}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Comment>
    )
  })
  return (
    <div>
      <h2>
        <CommentsIcon /> Comments
      </h2>

      {commentList}
    </div>
  )
}

export default Comments

export const CommentsBySlug = graphql`
  fragment commentsQueryFragment on Query {
    comments: allMarkdownRemark(
      filter: {
        fields: { postSlug: { eq: $slug }, sourceName: { eq: "comments" } }
      }
      sort: { fields: [fields___date], order: ASC }
    ) {
      edges {
        node {
          ...commentAttributesFragment
        }
      }
    }
  }
`
