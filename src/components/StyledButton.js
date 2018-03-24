;`use strict`
// @format

import React from 'react'
import g from 'glamorous'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors.js'

const colors = {
  danger: heroColor.hue(8),
  primary: heroColor.darken(0.5),
  secondary: heroColor.hue(198),
  gray: heroColor.saturationl(20),
}

const StyledButton = g.button(
  {
    fontSize: 16,
    margin: 10,
    border: `none`,
    cursor: `pointer`,
    display: `inline-block`,
    padding: `10px 20px`,
    textAlign: `center`,
    transition: `0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)`,
    borderRadius: 4,
    color: `#fff`,
    boxShadow: `0 4px 6px rgba(50,50,93,.11), 0 1.0px 3px rgba(0,0,0,.08)`,
    ':hover': {
      opacity: 0.7,
      transform: `translateY(-1.0px)`,
      boxShadow: `0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)`,
    },
    ':focus': { outline: 0 },
    ':active': {
      transform: `translateY(1.0px)`,
    },
  },
  props => ({
    backgroundColor: (colors[props.type] || colors[`primary`]).string(),
  })
)

export default StyledButton
