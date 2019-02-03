// @flow
// @format
import PropTypes from 'prop-types'
import React from 'react'

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JsonLd
