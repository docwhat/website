//
// @format
import PropType from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'

const JsonLd = ({ data }) => (
  <Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  </Helmet>
)

JsonLd.propTypes = {
  data: PropType.object.isRequired,
}

export default JsonLd
