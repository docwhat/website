// @format
// @flow
import g, { H3, Small, Div, A } from 'glamorous'
import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio.js'
import PostCard from '../components/PostCard.js'

class SiteIndex extends React.Component {
  render() {
    const posts = get(this, `props.data.allMarkdownRemark.edges`)

    return (
      <Div>
        <Helmet title="All Posts" />
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
        <Bio />
      </Div>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query AllQuery {
    allMarkdownRemark(
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
