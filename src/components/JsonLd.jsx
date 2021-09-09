//
// @format
import PropType from 'prop-types'
import * as React from 'react'

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

JsonLd.propTypes = {
  data: PropType.object.isRequired,
}

export default JsonLd
