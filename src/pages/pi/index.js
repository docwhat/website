// @format
import g, { H3, Small, Div } from 'glamorous'
import React from 'react'
import get from 'lodash/get'

import PostCard from '../../components/PostCard.js'

class SiteIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Div>
        {posts.map(({ node }) => {
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
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query PiIndexQuery {
    allMarkdownRemark(
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
