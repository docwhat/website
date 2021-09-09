// @format
//
import { graphql, useStaticQuery } from 'gatsby'

const useAllPies = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fields: { sourceName: { eq: "pies" } } }
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

export default useAllPies
