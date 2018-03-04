import React from 'react'
import { rhythm } from '../utils/typography'
import Comment from './Comment.js'

const Comments = (data) => {
  if (data.comments === null) { return '' }
  const { comments: { edges: comments } } = data

  const commentList = comments.map(({ node }, index) => {
    const {
      fields: { slug: slug },
      frontmatter: {
        name,
        url,
        email,
        friendlyDate,
        iso8601Date,
      },
      html
    } = node

    return (
      <Comment
        key={index}
        name={name}
        url={url}
        friendlyDate={friendlyDate}
        iso8601Date={iso8601Date}
        email={email} >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Comment>
    )
  })
  return (
    <div>{commentList}</div>
  )
}

export default Comments

export const CommentsBySlug = graphql`
  fragment commentsQueryFragment on RootQueryType {
    comments: allMarkdownRemark(
      filter: {
        frontmatter: {layout: {eq: "comment"} },
        fields: { slug: {eq: $slug} }
        },
      sort: {
        fields: [fields___slug, frontmatter___date], order: ASC}
      ) {
      edges {
        node {
          ...commentAttributesFragment
        }
      }
    }
  }
`
