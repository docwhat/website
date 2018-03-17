import React from 'react'
import g, { Div, Img } from 'glamorous'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'
import { FaGithub, FaTwitter } from 'react-icons/lib/fa'

// TODO: Pull docwhat.org from siteUrl

const makeProfileLink = (icon, url, username) => {
  return (
    <span
      style={{
        whiteSpace: 'nowrap',
        margin: '0 0.2em',
      }}
      className="u-url"
      rel="me"
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
      <Div css={{
        display: 'flex',
      }}
      className="h-card"
      rel="me" >
      <a
        className="u-url"
        rel="me"
        href="https://docwhat.org/" >
        <Img
          className="u-photo p-nickname"
          rel="me"
          src={avatarPic}
          alt="docwhat"
          css={{
            borderRadius: "50%",
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }} />
      </a>
      <p>
        The personal blog of <strong rel="me" className="p-name">
          Christian Höltje
        </strong>.
        <br />
        {GithubBio}
        {TwitterBio}
      </p>
    </Div>
  )
}
}

export default Bio
