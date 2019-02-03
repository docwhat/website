// @flow
// @format
import { Link } from 'gatsby'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

const MyGlamorousLink = glamorous(Link)(() => () => ({}))

MyGlamorousLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default MyGlamorousLink
