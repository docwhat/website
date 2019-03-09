// @format
// @flow
import { graphql, useStaticQuery } from 'gatsby'

const useAllPosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [fields___date] }
          filter: {
            fields: {
              sourceName: { eq: "posts" }
              archived: { eq: false }
              hide: { eq: false }
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

export default useAllPosts
