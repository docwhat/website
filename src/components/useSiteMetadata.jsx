// @format
// @flow
import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
            version
            commit
            branch
            gatsby_env
            node_env
            sourceUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
