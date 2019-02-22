// @format
// @flow
import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostCardList from '../components/PostCardList'

const SiteIndex = (props: {
  location: Location,
  data: { posts: { edges?: React.Node } },
}) => (
  <Layout location={props.location}>
    <>
      <Helmet title="All Posts" />
      <h1>All posts</h1>
      <PostCardList postcards={props.data.posts.edges} />
      <Bio />
    </>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: {
        fields: {
          sourceName: { eq: "posts" }
          draft: { ne: true }
          archived: { eq: false }
        }
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
