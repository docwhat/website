// @format
// @flow
import * as React from 'react'

import useSiteMetadata from './useSiteMetadata.jsx'

const SourceLink = () => {
  const { sourceUrl, version, commit } = useSiteMetadata()
  return (
    <a href={`${sourceUrl}/tree/${version}`}>
      <code>{commit}</code>
    </a>
  )
}

export default SourceLink
