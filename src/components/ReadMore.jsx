//
// @format

import PropType from 'prop-types'
import * as React from 'react'

import LinkButton from './LinkButton.jsx'

const ReadMore = ({ to, ...other }) => (
  <LinkButton to={to} {...other}>
    Read More&hellip;
  </LinkButton>
)

// Add propTypes for ReadMore
ReadMore.propTypes = {
  to: PropType.string.isRequired,
}

export default ReadMore
