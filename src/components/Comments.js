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
        date
      },
      html
    } = node

    return (
      <Comment
        key={index}
        name={name}
        url={url}
        date={date}
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
  fragment commentAttributesFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      name
      url
      email
      date(formatString: "MMMM DD, YYYY")
    }
    html
  }

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
