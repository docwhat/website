import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

const PostTitle = props => (
  <h3
    style={{
      marginBottom: 0,
    }}
  >
    <Link style={{ boxShadow: 'none' }} to={props.to}>
      {props.children}
    </Link>
  </h3>
)

const PostMeta = props => (
  <small
    style={{
      display: 'block',
      lineHeight: 1,
      marginBottom: rhythm(1 / 4),
      textAlign: 'right',
    }}
  >
    {props.children}
  </small>
)

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <PostTitle to={node.fields.slug}>{title}</PostTitle>
              <PostMeta>{node.frontmatter.date}</PostMeta>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
