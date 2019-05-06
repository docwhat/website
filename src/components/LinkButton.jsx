// @flow
// @format

import styled from '@emotion/styled'
import Link from 'gatsby-link'

import { heroColor } from '../utils/colors.js'
import { rhythm } from '../utils/style.js'

const color = heroColor.negate()
const background = heroColor

export default styled(Link)`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: ${rhythm(1 / 2)};
  background-color: ${background
    .desaturate(0.3)
    .lighten(0.3)
    .string()};
  color: ${color
    .desaturate(0.3)
    .lighten(0.3)
    .string()};
  user-select: none;
  cursor: pointer;
  height: ${rhythm(1 + 1 / 4)};
  line-height: ${rhythm(1 + 1 / 4)};
  width: ${rhythm(5)};
  border-radius: ${rhythm(1)};
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    background-color: ${background.string()};
    color: ${color.string()};
  }
  &:active {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
`
