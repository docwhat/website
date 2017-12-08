import React from 'react'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'
import { FaGithub, FaTwitter } from 'react-icons/lib/fa'

const makeProfileLink = (icon, url, username) => {
  return (
    <span
      style={{
        whiteSpace: 'nowrap',
        margin: '0 0.2em',
      }}
    >
      {React.createElement(icon, {
        style: {
          display: 'inline-block',
          verticalAlign: 'middle',
          fill: '#888',
        },
      })}
      <a href={url}>{username}</a>
    </span>
  )
}

const GithubBio = makeProfileLink(
  FaGithub,
  'https://github.com/docwhat',
  'docwhat'
)
const TwitterBio = makeProfileLink(
  FaTwitter,
  'https://twitter.com/docwhat',
  'docwhat'
)

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
          <br />
          {GithubBio}
          {TwitterBio}
        </p>
      </div>
    )
  }
}

export default Bio
