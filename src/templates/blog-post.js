import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import rehypeReact from "rehype-react"

// Components
import Bio from '../components/Bio.js'
// import Gist from '../components/Gist'
import Gist from 'react-gist'

// Part of gatsby-remark-component
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "gist": Gist,
  }
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const helmetTitle = post.frontmatter.title || siteTitle

    return (
      <div>
        <Helmet title={helmetTitle} />
        <h1
          style={{
            borderBottom: 'none',
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            textAlign: 'right',
          }}
        >
          {post.frontmatter.date}
        </p>
        <div>{renderAst(post.htmlAst)}</div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
