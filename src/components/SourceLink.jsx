// @format
// @flow
import { StaticQuery, graphql } from 'gatsby'
import * as React from 'react'

const SourceLink = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            sourceUrl
            version
            commit
          }
        }
      }
    `}
    render={data => (
      <a
        href={`${data.site.siteMetadata.sourceUrl}/tree/${
          data.site.siteMetadata.version
        }`}
      >
        <code>{data.site.siteMetadata.commit}</code>
      </a>
    )}
  />
)

export default SourceLink
