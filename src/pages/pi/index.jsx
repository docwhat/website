// @format
// @flow
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import PostCardList from '../../components/PostCardList'
import SourceLink from '../../components/SourceLink'

const SiteIndex = (props: {
  location: Location,
  data: { pies: { edges: React.Node } },
}) => (
  <Layout location={props.location}>
    <>
      <Helmet title="Gatekeeper" />
      <h1>Welcome to Gatekeeper!</h1>

      <p>
        <a href="https://amzn.to/2SgcHGK">Gatekeeper</a>: Behind-the-scenes for{' '}
        <Link to="/">docwhat.org</Link>.
      </p>
      <p>
        The current version is: <br /> <SourceLink />
      </p>
      <PostCardList postcards={props.data.pies.edges} />
    </>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    pies: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { sourceName: { eq: "pies" } } }
    ) {
      edges {
        node {
          ...postCardFragment
        }
      }
    }
  }
`
