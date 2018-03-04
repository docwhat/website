import React from 'react'
import { rhythm } from '../utils/typography'
import Gravatar from 'react-gravatar'
import { heroColor } from '../utils/colors.js'

const Comment = (props) => {
  const {
    name,
    url,
    email,
    date,
    children
  } = props

  return (
    <div>
      <header style={{
        position: "relative",
        marginTop: rhythm( 1 ),
        borderBottomWidth: rhythm( 1 / 4 ),
        borderBottomStyle: "solid",
        borderBottomColor: heroColor.darken(0.2).string(),
      }}>
        <Gravatar
          style={{
            verticalAlign: "text-top",
            margin: 0,
          }}
          size="60"
          md5={email}
          default="mm"
          rating="pg" />
        <a
          style={{
            background: '#efd',
            marginLeft: rhythm( 1 / 2 ),
            marginRight: rhythm( 1 / 2 ),
          }}
          href={url}>
          {name}
        </a>
        <div
          style={{
            fontSize: rhythm( 1 / 2 ),
            position: "absolute",
            top: "0",
            right: "0"
          }}
        >{date}</div>
    </header>

    {children}
  </div>
  )
}

const Comments = (props) => {
  const {
    comments: { edges: comments }
  } = props

  return (
    <div>
      {comments.map(({ node }, index) => {
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
      })}
    </div>
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

  fragment commentAttributesFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      name
      url
      email
      date(formatString: "dddd DD MMMM YYYY")
    }
    html
  }
`
