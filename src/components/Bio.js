// @flow
// @format
import React from 'react'
import g from 'glamorous'
import PropTypes from 'prop-types'

import avatarPic from './avatar.png'
import { rhythm } from '../utils/typography'
import { siteUrl, authorName } from '../utils/constants'
import Link from './Link'
import GithubLogo from '../icons/github.svg'
import TwitterLogo from '../icons/twitter.svg'
import Envelope from '../icons/envelope.svg'
import Gift from '../icons/gift.svg'
import Key from '../icons/key.svg'

const Reference = props => (
  <g.Span
    css={{
      whiteSpace: `nowrap`,
      margin: `0 0.2em`,
      '& svg': {
        fill: `#888`,
      },
    }}
    className="u-url"
  >
    {props.children}
  </g.Span>
)

Reference.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

const Bio = () => (
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
        <Reference>
          <GithubLogo />
          {` `}
          <a href="https://github.com/docwhat">docwhat</a>
        </Reference>
        <Reference>
          <TwitterLogo />
          {` `}
          <a href="https://twitter.com/docwhat">docwhat</a>
        </Reference>
        <Reference>
          <Envelope />
          {` `}
          <Link to="/contact" title="Contact me!">
            contact
          </Link>
        </Reference>
        <Reference>
          <Link to="/reward" title="Send me a gift!">
            <Gift />
          </Link>
        </Reference>
        <Reference>
          <Link to="/pubkey" title="GPG Public Key">
            <Key />
          </Link>
        </Reference>
      </p>
    </g.Div>
  </div>
)

export default Bio
