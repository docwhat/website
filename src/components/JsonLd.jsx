// @flow
// @format
import * as React from 'react'

const JsonLd = ({ data }: { data: Object }): React.Node => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

export default JsonLd
