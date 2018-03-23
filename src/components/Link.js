// @format
import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

const replacePath = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))

const MyLink = props => {
  const to = replacePath(props.to)
  return <Link {...props} to={to} />
}

const MyGlamorousLink = glamorous(MyLink)(props => ({ to }) => {
  to
})

export default MyGlamorousLink
