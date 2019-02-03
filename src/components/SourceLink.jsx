// @format
// @flow
import { StaticQuery, graphql } from 'gatsby'
import { A, Code } from 'glamorous'
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
      <A
        href={`${data.site.siteMetadata.sourceUrl}/tree/${
          data.site.siteMetadata.version
        }`}
      >
        <Code>{data.site.siteMetadata.commit}</Code>
      </A>
    )}
  />
)

export default SourceLink
