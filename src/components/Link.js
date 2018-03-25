// @flow
// @format
import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

const MyLink = props => <Link {...props} />

const MyGlamorousLink = glamorous(MyLink)(() => ({ to }) => ({
  to,
}))

export default MyGlamorousLink
