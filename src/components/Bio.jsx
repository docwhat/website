// @flow
// @format
import { ClassNames } from '@emotion/core'
import Link from 'gatsby-link'
import * as React from 'react'

// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as Envelope } from '../icons/envelope.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as Gift } from '../icons/gift.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as GithubLogo } from '../icons/github.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as Key } from '../icons/key.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as TwitterLogo } from '../icons/twitter.svg'
import { authorName, siteUrl } from '../utils/constants'
import { rhythm } from '../utils/style.js'
import avatarPic from './avatar.png'

const Reference = (props: {
  className?: string,
  children: React.Node,
}): React.Node => (
  <ClassNames>
    {({ css, cx }) => (
      <span
        className={cx(
          'u-url',
          css`
            white-space: nowrap;
            margin: 0 0.2em;
            fill: #888;
          `,
          props.className
        )}
      >
        {props.children}
      </span>
    )}
  </ClassNames>
)

const Bio = () => (
  <div>
    <hr css={{ margin: `${rhythm(1)} 0` }} />

    <div
      css={{
        display: `flex`,
      }}
      className="h-card"
      rel="me"
    >
      <a className="u-url" rel="me" href={siteUrl}>
        <img
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
      <p
        css={{
          margin: `0 0.2em`,
        }}
      >
        The personal blog of{` `}
        <strong rel="me" className="p-name">
          {authorName}
        </strong>
        .
        <br />
        <Reference rel="me" css={{ marginLeft: 0 }}>
          <GithubLogo />
          {` `}
          <a href="https://github.com/docwhat">docwhat</a>
        </Reference>
        <Reference rel="me">
          <TwitterLogo />
          {` `}
          <a href="https://twitter.com/docwhat">docwhat</a>
        </Reference>
        <Reference>
          <Envelope />
          {` `}
          <Link to="/email" title="Contact me!">
            contact
          </Link>
        </Reference>
        <Reference>
          <Link to="/reward" title="Send me a gift!">
            <Gift />
          </Link>
        </Reference>
        <Reference css={{ marginRight: 0 }}>
          <Link to="/pubkey" title="GPG Public Key">
            <Key />
          </Link>
        </Reference>
      </p>
    </div>
  </div>
)

export default Bio
