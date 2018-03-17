import g, { H3, Small, Div, A } from 'glamorous'
import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio.js'
import PostCard from '../components/PostCard.js'
import { siteTitle, authorUrl, authorJsonLd } from '../utils/constants.js'

const BlogMicroData = props => {
  const { siteTitle } = props

  const jsonObject = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    keywords:
      'software engineering agile devops ruby golang javascript refactoring',
    url: authorUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': authorUrl,
    },
    author: authorJsonLd,
  }

  return (
    <script type="application/ld+json">{JSON.stringify(jsonObject)}</script>
  )
}

class SiteIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Div>
        <Helmet title={siteTitle}>
          <link
            rel="openid2.provider"
            href="https://openid.stackexchange.com/openid/provider"
          />
          <link
            rel="openid2.local_id"
            href="https://openid.stackexchange.com/user/073b6f81-f2a1-4242-8975-3d951089be48"
          />
        </Helmet>
        <Bio />
        <Div>
          {posts.map(({ node }) => {
            const { fields: { title, slug, date }, excerpt } = node

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                date={date}
                excerpt={excerpt}
              />
            )
          })}
        </Div>
        <BlogMicroData siteTitle={siteTitle} />
        <A
          css={{
            position: 'fixed',
            bottom: '0.4rem',
            right: '0.4rem',
            fontSize: '0.4rem',
            color: 'rgba(136, 136, 136, 0.3)',
          }}
          href="pi/"
        >
          Π
        </A>
      </Div>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { template: { eq: "post" } }
        frontmatter: { test: { ne: "true" } }
      }
    ) {
      edges {
        node {
          ...postCardFragment
        }
      }
    }
  }
`
