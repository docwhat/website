// @format
// @flow
import { Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Bio from '../components/Bio'
import PostCardList from '../components/PostCardList'

const SiteIndex = props => (
  <Div>
    <Helmet title="All Posts" />
    <PostCardList postcards={props.data.posts.edges} />
    <Bio />
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
  query AllQuery {
    posts: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { template: { eq: "post" } }
        frontmatter: { test: { ne: true } }
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
