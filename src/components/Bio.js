// @format
import React from 'react'
import g from 'glamorous'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'
import GithubLogo from '../icons/github.svg'
import TwitterLogo from '../icons/twitter.svg'
import { siteUrl, authorName } from '../utils/constants.js'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <g.Hr css={{ margin: `${rhythm(1)} 0` }} />

        <g.Div
          css={{
            display: `flex`,
          }}
          className="h-card"
          rel="me"
        >
          <a className="u-url" rel="me" href={siteUrl}>
            <g.Img
              className="u-photo p-nickname"
              rel="me"
              src={avatarPic}
              alt="docwhat"
              css={{
                borderRadius: `50%`,
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
          </a>
          <p>
            The personal blog of{` `}
            <strong rel="me" className="p-name">
              {authorName}
            </strong>.
            <br />
            <span
              style={{
                whiteSpace: `nowrap`,
                margin: `0 0.2em`,
              }}
              className="u-url"
              rel="me"
            >
              <GithubLogo css={{ fill: `#888` }} />
              {` `}
              <a href="https://github.com/docwhat">docwhat</a>
            </span>
            <span
              style={{
                whiteSpace: `nowrap`,
                margin: `0 0.2em`,
              }}
              className="u-url"
              rel="me"
            >
              <TwitterLogo css={{ fill: `#888` }} />
              {` `}
              <a href="https://twitter.com/docwhat">docwhat</a>
            </span>
          </p>
        </g.Div>
      </div>
    )
  }
}

export default Bio
