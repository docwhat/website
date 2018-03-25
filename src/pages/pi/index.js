// @format
// @flow
import { Div } from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import PostCard from '../../components/PostCard'

const SiteIndex = props => (
  <Div>
    {props.data.pies.edges.map(({ node }) => {
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
)

SiteIndex.propTypes = {
  data: PropTypes.shape({
    pies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
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
