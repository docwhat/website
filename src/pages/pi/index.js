// @format
// @flow
import { graphql } from 'gatsby'
import { A, H1, P } from 'glamorous'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout.js'
import PostCardList from '../../components/PostCardList.js'
import SourceLink from '../../components/SourceLink.js'

const SiteIndex = (props: {
  location: Location,
  data: { pies: { edges: React.Node } },
}) => (
  <Layout location={props.location}>
    <>
      <Helmet title="Gatekeeper" />
      <H1>
        Welcome to <A href="https://amzn.to/2SgcHGK">Gatekeeper</A>
      </H1>
      <P>This is behind-the-scenes for docwhat.org.</P>
      <P>
        The current version is <SourceLink />
      </P>
      <PostCardList postcards={props.data.pies.edges} />
    </>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        version
      }
    }
    pies: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
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
