// @flow
// @format
import React from 'react'
import { Svg } from 'glamorous'
import { rhythm } from '../utils/typography'

// eslint-disable-next-line react/display-name
const IconArrow = overrideCss => () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="50.4 -114.8 16 16"
    css={{
      display: `inline-block`,
      position: `relative`,
      top: `-0.05em`,
      width: rhythm(2 / 3),
      height: rhythm(2 / 3),
      lineHeight: 1,
      verticalAlign: `middle`,
      fill: `currentColor`,
      ...overrideCss,
    }}
  >
    <path d="M63.1-107.7l-6.7-6.7c-.2-.3-.6-.4-.9-.4-.4 0-.7.1-.9.4l-.8.8c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l5 5-5 5c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l.8.8c.3.3.6.4.9.4.4 0 .7-.1.9-.4l6.7-6.7c.3-.3.4-.6.4-.9 0-.4-.2-.7-.4-.9z" />
  </Svg>
)

export const IconArrowRight = IconArrow()

const flipTransform = `matrix(-1,0,0,1,0,0)`
export const IconArrowLeft = IconArrow({ transform: flipTransform })
