// @format
// @flow
import { Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import PostCardList from '../../components/PostCardList'

const SiteIndex = props => (
  <Div>
    <Helmet title="Gatekeeper" />
    <PostCardList postcards={props.data.pies.edges} />
  </Div>
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
