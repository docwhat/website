// @format
// @flow
import { graphql } from 'gatsby'

import { Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import PostCardList from '../../components/PostCardList'
import Layout from '../../components/Layout.js'

const SiteIndex = props => (
  <Layout location={props.location}>
    <Div>
      <Helmet title="Gatekeeper" />
      <PostCardList postcards={props.data.pies.edges} />
    </Div>
  </Layout>
)

SiteIndex.propTypes = {
  data: PropTypes.shape({
    pies: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.node).isRequired,
    }).isRequired,
  }).isRequired,
}

export default SiteIndex

export const pageQuery = graphql`
  query PiIndexQuery {
    pies: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { template: { ne: "comment" } }
        frontmatter: { test: { eq: true } }
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
