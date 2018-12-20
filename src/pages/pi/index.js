// @format
// @flow
import { graphql } from 'gatsby'
import { Div } from 'glamorous'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout.js'
import PostCardList from '../../components/PostCardList'

const SiteIndex = (props: {
  location: Location,
  data: { pies: { edges: Array<React.Node> } },
}) => (
  <Layout location={props.location}>
    <Div>
      <Helmet title="Gatekeeper" />
      <PostCardList postcards={props.data.pies.edges} />
    </Div>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query PiIndexQuery {
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
