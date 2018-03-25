// @flow
// @format
import React from 'react'
import Gravatar from 'react-gravatar'
import glamorous from 'glamorous'

const MyGlamorousGravatar = glamorous(Gravatar)(
  props => ({ email, md5, size, rating, className, protocol, style }) => {
    email, md5, size, rating, className, protocol, style
  }
)

export default MyGlamorousGravatar
