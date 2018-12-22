// @format
// @flow
import { graphql } from 'gatsby'
import { A, H1, P } from 'glamorous'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout.js'
import Link from '../../components/Link.js'
import PostCardList from '../../components/PostCardList.js'
import SourceLink from '../../components/SourceLink.js'

const SiteIndex = (props: {
  location: Location,
  data: { pies: { edges: React.Node } },
}) => (
  <Layout location={props.location}>
    <>
      <Helmet title="Gatekeeper" />
      <H1>Welcome to Gatekeeper!</H1>

      <P>
        <A href="https://amzn.to/2SgcHGK">Gatekeeper</A>: Behind-the-scenes for{' '}
        <Link to="/">docwhat.org</Link>.
      </P>
      <P>
        The current version is: <br /> <SourceLink />
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
