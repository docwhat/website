import g, { Time, Em, Strong, Span } from 'glamorous'
import React from 'react'
import { rhythm } from '../utils/typography'
import { heroColor } from '../utils/colors.js'

const CalendarPage = (props) => {
  const {
    monthName,
    dayName,
    dayOfMonth,
    ymdDate
  } = props

  const commonCSS = {
    display: "block",
    width: "100%",
    fontSize: "1em",
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
  }

  const bannerColor = heroColor
    .saturate(0.2)
    .darken(0.45)

  const rmult = 5 / 12
  const year = ymdDate.split('-')[0]

  // Original idea from:
  // https://www.sitepoint.com/create-calendar-icon-html5-css3/
  return (
    <Time
      css={{
        display: "block",
        margin: 0,
        position: 'relative',
        fontSize: rhythm( rmult ), /* change icon size */
        width: rhythm( 7 * rmult ),
        height: rhythm( 7 * rmult ),
        backgroundColor: "#ffffff",
        borderRadius: rhythm( 0.6 * rmult ),
        boxShadow: "0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd",
        overflow: "hidden",
      }}
      dateTime={ymdDate}
      title={ymdDate}
    >
      <Em
        css={{
          ...commonCSS,
          position: "absolute",
          bottom: rhythm( 0.3 * rmult ),
          color: bannerColor.string(),
        }} >{dayName}</Em>
      <Strong
        css={{
          ...commonCSS,
          position: "absolute",
          top: "0",
          padding: `${rhythm( 0.4 * rmult )} 0`,
          color: "#fff",
          backgroundColor: bannerColor.string(),
          borderBottom: `1px dashed ${bannerColor.darken(0.2).string()}`,
          boxShadow: `0 2px 0 ${bannerColor.string()}`,
        }} >{monthName}</Strong>
      <Span
        css={{
          ...commonCSS,
          fontSize: rhythm( 2.0 * rmult ),
          letterSpacing: rhythm( -0.05 * rmult ),
          paddingTop: rhythm( 2.6 * rmult ),
          color: "#2f2f2f",
        }}>{dayOfMonth}</Span>
    </Time>
  )
}

export default CalendarPage

export const query = graphql`
  fragment calendarPageDatesFragment on MarkdownRemark {
    fields {
      ymdDate: date(formatString: "YYYY-MM-DD"),
      monthName: date(formatString: "MMMM"),
      dayName: date(formatString: "dddd"),
      dayOfMonth: date(formatString: "D")
    }
  }
`
