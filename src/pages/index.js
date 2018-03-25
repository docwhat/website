// @format
// @flow
import { Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { siteTitle, authorUrl, authorJsonLd } from '../utils/constants'
import { rhythm } from '../utils/typography'

import Bio from '../components/Bio'
import PostCard from '../components/PostCard'
import TheNetwork from '../components/TheNetwork'
import Link from '../components/Link'

const BlogMicroData = () => {
  const jsonObject = {
    '@context': `http://schema.org`,
    '@type': `Blog`,
    keywords: `software engineering agile devops ruby golang javascript refactoring`,
    url: authorUrl,
    mainEntityOfPage: {
      '@type': `WebPage`,
      '@id': authorUrl,
    },
    author: authorJsonLd,
  }

  return (
    <script type="application/ld+json">{JSON.stringify(jsonObject)}</script>
  )
}

const SiteIndex = props => (
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
    <Div
      css={{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        margin: rhythm(-1 / 2),
        '&>*': {
          margin: rhythm(1 / 2),
        },
      }}
    >
      {props.data.posts.edges.map(({ node }) => {
        const { fields: { title, slug, date }, excerpt } = node

        return (
          <PostCard
            overrideCss={{
              flex: `1 1 ${rhythm(10)}`,
              '&>p': {
                textAlign: `justify`,
              },
            }}
            key={slug}
            slug={slug}
            title={title}
            date={date}
            excerpt={excerpt}
          />
        )
      })}

      <Link css={{ width: `100%`, textAlign: `right` }} to="/all">
        See all blog posts&hellip;
      </Link>
    </Div>
    <BlogMicroData />
    <Bio />
    <TheNetwork />
  </Div>
)

SiteIndex.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export default SiteIndex

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { template: { eq: "post" } }
        frontmatter: { test: { ne: true }, archive: { ne: true } }
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
