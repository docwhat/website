import React from 'react'
import { rhythm } from '../utils/typography'
import Gravatar from 'react-gravatar'

const Comment = (props) => {
  const {
    name,
    url,
    email,
    date,
    children
  } = props

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
            href={url}>
            {name}
          </a>
          <div
            style={{
              fontSize: rhythm( 2 / 3 ),
              position: "absolute",
              top: "0",
              right: "0"
            }}
          >{date}</div>
      </header>

      {children}
    </div>
  </article>
  )
}

export default Comment
