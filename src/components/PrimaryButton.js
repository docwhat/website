import React from 'react'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors.js'

// TODO: Install emotion for better styling.
const PrimaryButton = (props) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <button
        style={{
          padding: rhythm( 1 / 4 ),
          border: "1px solid hsla(0, 0%, 0%, 0)",
          fontSize: "1rem",
          lineHeight: "1.5",
          whiteSpace: "nowrap",
          textAlign: "center",
          borderRadius: ".25rem",
          marginLeft: 'auto',
          marginRight: '1em',
          transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          background: heroColor.darken(0.5).string(),
          color: 'white',
          ':hover': {
            background: heroColor.darken(0.1).string(),
          }
        }} type="submit">{props.children}</button>
    </div>
  )
}

export default PrimaryButton
