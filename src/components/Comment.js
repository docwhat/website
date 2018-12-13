// @flow
// @format
import { graphql } from 'gatsby'

import React from 'react'
import g from 'glamorous'
import PropTypes from 'prop-types'
import gray from 'gray-percentage'

import Gravatar from './Gravatar'
import { rhythm } from '../utils/typography'

const isMe = md5 => {
  const myMd5s = [
    `2721fe8ffd609b6df0d4b734defc9cd5`,
    `4e8076a0fdac6b8f284d8b316efdf7f3`,
  ]

  return myMd5s.includes(md5)
}

const Comment = props => {
  const { name, url, email, friendlyDate, iso8601Date, children } = props

  return (
    <g.Article
      css={{
        position: `relative`,
        marginBottom: rhythm(2),
        marginTop: rhythm(1),
      }}
    >
      <g.Div
        css={{
          width: `60px`,
          position: `absolute`,
          top: 0,
          left: 0,
        }}
      >
        <Gravatar
          css={{
            width: `100%`,
            borderRadius: `50%`,
            boxShadow: isMe(email)
              ? `8px 8px 16px ${gray(60)}`
              : `2px 2px 1px ${gray(50)}`,
          }}
          size={60}
          md5={email}
          email={name}
          default="mm"
          rating="pg"
        />
      </g.Div>
      <g.Div
        css={{
          paddingLeft: `80px`,
        }}
      >
        <g.Header
          css={{
            display: `flex`,
            flexDirection: `row`,
            marginTop: rhythm(1 / 4),
            marginBottom: rhythm(1 / 2),
          }}
        >
          <g.A
            css={{
              alignSelf: `flex-start`,
              marginRight: `auto`,
              fontSize: rhythm(9 / 8),
              lineHeight: 1,
            }}
            className="h-card"
            href={url}
          >
            {name}
          </g.A>
          <g.Time
            css={{
              display: `block`,
              marginLeft: `auto`,
              whiteSpace: `nowrap`,
              alignSelf: `flex-end`,
              fontSize: rhythm(2 / 3),
            }}
            dateTime={iso8601Date}
          >
            {friendlyDate}
          </g.Time>
        </g.Header>
        {children}
      </g.Div>
    </g.Article>
  )
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  friendlyDate: PropTypes.string.isRequired,
  iso8601Date: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Comment

export const query = graphql`
  fragment commentAttributesFragment on MarkdownRemark {
    frontmatter {
      name
      url
      email
      uuid: _id
      friendlyDate: date(formatString: "YYYY MMM D")
      iso8601Date: date
    }
    html
  }
`
