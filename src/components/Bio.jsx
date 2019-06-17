// @flow
// @format
import { ClassNames, css } from '@emotion/core'
import Link from 'gatsby-link'
import * as React from 'react'

// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as Envelope } from '../icons/envelope.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as GithubLogo } from '../icons/github.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as Key } from '../icons/key.svg'
// $FlowIssue: the gatsby svgr plugin isn't understood by flow.
import { ReactComponent as TwitterLogo } from '../icons/twitter.svg'
import { shevy } from '../utils/style.js'

const { baseSpacing: bs } = shevy

const Reference = (props: {
  className?: string,
  children: React.Node,
}): React.Node => (
  <ClassNames>
    {({ css, cx }) => (
      <span className={cx('u-url', props.className)}>{props.children}</span>
    )}
  </ClassNames>
)

const Bio = () => (
  <div
    css={css`
      margin: 0 0 ${bs(1)};
    `}
  >
    <hr
      css={css`
        margin: ${bs(1 / 2)} 0;
      `}
    />

    <div
      className="h-card"
      rel="me"
      css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        fill: rgba(0, 0, 0, 0.5);
        & > * {
          margin: 0 1ch;
          height: fit-content;
          width: fit-content;
          display: inline-block;
          white-space: nowrap;
        }
        & > *:first-of-type {
          margin-left: 0;
        }
        & > *:last-of-type {
          margin-right: 0;
        }
      `}
    >
      <Reference rel="me">
        <GithubLogo /> <a href="https://github.com/docwhat">docwhat</a>
      </Reference>
      <Reference rel="me">
        <TwitterLogo /> <a href="https://twitter.com/docwhat">docwhat</a>
      </Reference>
      <Reference>
        <Envelope />{' '}
        <Link to="/email" title="Contact me!">
          contact
        </Link>
      </Reference>
      <Reference>
        <Link to="/pubkey" title="GPG Public Key">
          <Key />
        </Link>
      </Reference>
    </div>
  </div>
)

export default Bio
