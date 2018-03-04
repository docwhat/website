import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import rehypeReact from "rehype-react"

// Components
import Bio from '../components/Bio.js'
import SubmitComment from '../components/SubmitComment.js'
import Comments from '../components/Comments.js'
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
    const {
      data: {
        site: { siteMetadata: {
          siteUrl: siteUrl,
          title: siteTitle,
        } },
        post: {
          fields: {
            slug: slug,
          },
          frontmatter: {
            title: postTitle,
            date: postDate,
          },
          htmlAst: postHtmlAst,
        },
        comments: comments,
      }
    } = this.props

    const helmetTitle = postTitle || siteTitle
    const calculateUrl = () => {
      if (typeof window === 'undefined' || typeof location === 'undefined') {
        return `${siteUrl}${slug}`
      } else {
        return `${window.location.origin}${location.pathname}`
      }
    }
    const url = calculateUrl()

    return (
      <div>
        <Helmet title={helmetTitle} />
        <h1
          style={{
            borderBottom: 'none',
          }}
        >
          {postTitle}
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
          {postDate}
        </p>
        <div>{renderAst(postHtmlAst)}</div>
        <h2>
          Comments
        </h2>
        <Comments comments={this.props.data.comments} />
        <SubmitComment slug={slug} url={url} />

        <hr style={{
          marginBottom: rhythm(1),
        }} />
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
        siteUrl
      }
    }
    post: markdownRemark(
      fields: { slug: { eq: $slug } },
      frontmatter: { layout: { eq: "post" } }
    ) {
      id
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    ...commentsQueryFragment
  }
`
