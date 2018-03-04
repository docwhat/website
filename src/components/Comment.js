import React from 'react'
import { rhythm } from '../utils/typography'
import Gravatar from 'react-gravatar'

const Comment = (props) => {
  const {
    name,
    url,
    email,
    friendlyDate,
    iso8601Date,
    children
  } = props

  console.log("NARF", props, friendlyDate, iso8601Date)

  return (
    <article style={{
      position: "relative",
      marginBottom: rhythm( 2 ),
      marginTop: rhythm( 1 ),
    }}>
      <div style={{
        width: '60px',
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        <Gravatar
          style={{
            width: '100%',
            borderRadius: '50%',
          }}
          size={60}
          md5={email}
          default="mm"
          rating="pg" />
      </div>
      <div style={{
        paddingLeft: '80px',
      }}>
        <header style={{
          marginTop: rhythm( 1 / 4 ),
          marginBottom: rhythm( 1 / 2 ),
        }}>
          <a
            style={{
              fontSize: rhythm( 9 / 8 ),
              lineHeight: 1,
            }}
            className="h-card"
            href={url}>
            {name}
          </a>
          <time
            style={{
              fontSize: rhythm( 2 / 3 ),
              position: "absolute",
              top: "0",
              right: "0",
            }}
            dateTime={iso8601Date}
          >{friendlyDate}</time>
      </header>

      {children}
    </div>
  </article>
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
      friendlyDate: date(formatString: "MMMM DD, YYYY")
      iso8601Date: date
    }
    html
  }
`
