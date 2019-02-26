// @format
// @flow
import { graphql, useStaticQuery } from 'gatsby'

const useArchivedPosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [fields___date] }
          filter: {
            fields: {
              sourceName: { eq: "posts" }
              draft: { eq: false }
              archived: { eq: true }
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
  )
  return posts.edges
}

export default useArchivedPosts
