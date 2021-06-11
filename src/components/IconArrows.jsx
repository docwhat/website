// @flow
// @format
import React from 'react'

import { shevy } from '../utils/style.js'

const { baseSpacing: bs } = shevy

// eslint-disable-next-line react/display-name
const IconArrow = (overrideCss) => () =>
  (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50.4 -114.8 16 16"
      css={{
        display: `inline-block`,
        position: `relative`,
        top: bs(-1 / 10),
        width: shevy.content.fontSize,
        height: shevy.content.fontSize,
        lineHeight: shevy.content.lineHeight,
        verticalAlign: `middle`,
        fill: `currentColor`,
        ...overrideCss,
      }}
    >
      <path d="M63.1-107.7l-6.7-6.7c-.2-.3-.6-.4-.9-.4-.4 0-.7.1-.9.4l-.8.8c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l5 5-5 5c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l.8.8c.3.3.6.4.9.4.4 0 .7-.1.9-.4l6.7-6.7c.3-.3.4-.6.4-.9 0-.4-.2-.7-.4-.9z" />
    </svg>
  )

export const IconArrowRight = IconArrow()

const flipTransform = `matrix(-1,0,0,1,0,0)`
export const IconArrowLeft = IconArrow({ transform: flipTransform })
