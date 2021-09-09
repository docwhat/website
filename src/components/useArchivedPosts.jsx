// @format
//
import { graphql, useStaticQuery } from 'gatsby'

const useArchivedPosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { eq: false }, archive: { eq: true } }
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

export default useArchivedPosts
