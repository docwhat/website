// @flow
// @format
import g from 'glamorous'
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
import typography from '../utils/typography'
import Link from './Link'
import avatarPic from './avatar.png'

const rhythm = typography.rhythm

const Reference = (props: { children: React.Node }): React.Node => (
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
        </strong>
        .
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
          <Link to="/email" title="Contact me!">
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
