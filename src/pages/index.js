// @format
// @flow
import { H3, Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { siteTitle } from '../utils/constants'
import { blogJsonLD } from '../utils/ldjson'

import Bio from '../components/Bio'
import PostCardList from '../components/PostCardList'
import TheNetwork from '../components/TheNetwork'
import Link from '../components/Link'
import JsonLd from '../components/JsonLd'

// https://jsonld-examples.com/schema.org/code/blog-markup.php
const jsonLdData = {
  '@context': `http://schema.org`,
  blogJsonLD,
  //     "potentialAction": {
  // "@type": "SearchAction",
  // "target": "https://example.com/search.php?q={search_term}",
  // "query-input": "required name=search_term"
  //     },
}

const SiteIndex = props => (
  <Div>
    <Helmet title={siteTitle}>
      <meta
        name="google-site-verification"
        content="caPZYkV8gUY3XzcNO0khNKflZYZvmpYNAYl280tdzn4"
      />
      <link
        rel="openid2.provider"
        href="https://openid.stackexchange.com/openid/provider"
      />
      <link
        rel="openid2.local_id"
        href="https://openid.stackexchange.com/user/073b6f81-f2a1-4242-8975-3d951089be48"
      />
      <link
        rel="openid.server"
        href="https://openid.stackexchange.com/openid/provider"
      />
      <link
        rel="openid.delegate"
        href="https://openid.stackexchange.com/user/073b6f81-f2a1-4242-8975-3d951089be48"
      />
      <meta
        httpEquiv="X-XRDS-Location"
        content="https://openid.stackexchange.com/xrds"
      />
      <meta
        httpEquiv="X-Yadis-Location"
        content="https://openid.stackexchange.com/xrds"
      />
    </Helmet>
    <PostCardList postcards={props.data.posts.edges} />
    <H3 css={{ textAlign: `right` }}>
      <Link to="/all">See all blog posts&hellip;</Link>
    </H3>
    <JsonLd data={jsonLdData} />
    <Bio />
    <TheNetwork />
  </Div>
)

SiteIndex.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.node).isRequired,
    }).isRequired,
  }).isRequired,
}

export default SiteIndex

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      limit: 10
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
