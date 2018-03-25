// @format
// @flow
import { Div } from 'glamorous'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Bio from '../components/Bio'
import PostCard from '../components/PostCard'

const SiteIndex = props => (
  <Div>
    <Helmet title="All Posts" />
    <Div>
      {props.data.posts.edges.map(({ node }) => {
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
    <Bio />
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
