// @format
//
import { graphql, useStaticQuery } from 'gatsby'

const useAllPosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { eq: false }, archive: { eq: false } }
            fields: { sourceName: { eq: "posts" } }
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
