import React from 'react'
import g from 'glamorous'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'
import { FaGithub, FaTwitter } from 'react-icons/lib/fa'

// TODO: Pull docwhat.org from siteUrl

const makeProfileLink = (icon, url, username) => {
  return (
    <g.Span
      css={{
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
    </g.Span>
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
      <g.Div
        css={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
        className="h-card"
        rel="me"
      >
        <g.A css={{

        }}
        className="u-url"
        rel="me"
        href="https://docwhat.org/" >
          <g.Img
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
            }}
          />
        </g.A>
        <p>
          The personal blog of <strong rel="me" className="p-name">
            Christian Höltje
          </strong>.
          <br />
          {GithubBio}
          {TwitterBio}
        </p>
      </g.Div>
    )
  }
}

export default Bio
