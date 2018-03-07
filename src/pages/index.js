import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import {
  siteTitle,
  authorUrl,
  authorJsonLd
} from '../utils/constants.js'

const BlogMicroData = props => {
  const {
    siteTitle
  } = props

  const jsonObject = {
    "@context": "http://schema.org",
    "@type": "Blog",
    "keywords": "software engineering agile devops ruby golang javascript refactoring",
    "url": authorUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": authorUrl,
    },
    "author": authorJsonLd
  }

  return (
    <script type="application/ld+json">{JSON.stringify(jsonObject)}</script>
  )
}

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

class SiteIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle}>
          <link rel="openid2.provider" href="https://openid.stackexchange.com/openid/provider" />
          <link rel="openid2.local_id" href="https://openid.stackexchange.com/user/073b6f81-f2a1-4242-8975-3d951089be48" />
        </Helmet>
        <Bio />
        <div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <section key={node.fields.slug}>
                <PostTitle to={node.fields.slug}>{title}</PostTitle>
                <PostMeta>{node.frontmatter.date}</PostMeta>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </section>
            )
          })}
        </div>
        <BlogMicroData siteTitle={siteTitle} />
      </div>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {template: {eq: "post"}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
          template
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
