// @flow
// @format
import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

const MyLink = props => {
  return <Link {...props} />
}

const MyGlamorousLink = glamorous(MyLink)(props => ({ to }) => {
  to
})

export default MyGlamorousLink
