import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={avatarPic}
          alt={`Christian Höltje`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          The personal blog of <strong>Christian Höltje</strong>.
        </p>
      </div>
    )
  }
}

export default Bio
