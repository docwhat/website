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
    <article style={{
      position: "relative",
      marginBottom: rhythm( 2 ),
      marginTop: rhythm( 1 ),
    }}>
      <div style={{
        width: '60px',
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        <Gravatar
          style={{
            width: '100%',
            borderRadius: '50%',
          }}
          size={60}
          md5={email}
          default="mm"
          rating="pg" />
      </div>
      <div style={{
        paddingLeft: '80px',
      }}>
        <header style={{
          marginTop: rhythm( 1 / 4 ),
          marginBottom: rhythm( 1 / 2 ),
        }}>
          <a
            style={{
              fontSize: rhythm( 9 / 8 ),
              lineHeight: 1,
            }}
            href={url}>
            {name}
          </a>
          <div
            style={{
              fontSize: rhythm( 2 / 3 ),
              position: "absolute",
              top: "0",
              right: "0"
            }}
          >{date}</div>
      </header>

      {children}
    </div>
  </article>
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
