// @format
import g, { Article, Div, Header, A, Time } from 'glamorous'
import React from 'react'
import { rhythm } from '../utils/typography'
import Gravatar from 'react-gravatar'

const Comment = props => {
  const { name, url, email, friendlyDate, iso8601Date, children } = props

  return (
    <Article
      css={{
        position: 'relative',
        marginBottom: rhythm(2),
        marginTop: rhythm(1),
      }}
    >
      <Div
        css={{
          width: '60px',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Gravatar
          style={{
            width: '100%',
            borderRadius: '50%',
          }}
          size={60}
          md5={email}
          email={name}
          default="mm"
          rating="pg"
        />
      </Div>
      <Div
        css={{
          paddingLeft: '80px',
        }}
      >
        <Header
          css={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: rhythm(1 / 4),
            marginBottom: rhythm(1 / 2),
          }}
        >
          <A
            css={{
              alignSelf: 'flex-start',
              marginRight: 'auto',
              fontSize: rhythm(9 / 8),
              lineHeight: 1,
            }}
            className="h-card"
            href={url}
          >
            {name}
          </A>
          <Time
            css={{
              display: 'block',
              marginLeft: 'auto',
              whiteSpace: 'nowrap',
              alignSelf: 'flex-end',
              fontSize: rhythm(2 / 3),
            }}
            dateTime={iso8601Date}
          >
            {friendlyDate}
          </Time>
        </Header>
        {children}
      </Div>
    </Article>
  )
}

export default Comment

export const query = graphql`
  fragment commentAttributesFragment on MarkdownRemark {
    fields {
      slug
    }
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
