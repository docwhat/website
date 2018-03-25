// @flow
// @format
import g from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import { deemphasisColor } from '../utils/colors'

const CalendarPage = props => {
  const { ymdDate, monthName, dayOfMonth } = props

  const commonCSS = {
    display: `block`,
    fontSize: `1em`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    textAlign: `center`,
    width: `100%`,
  }

  const bannerColor = deemphasisColor

  const rmult = 5 / 12
  const year = ymdDate.split(`-`)[0]

  // Original idea from:
  // https://www.sitepoint.com/create-calendar-icon-html5-css3/
  return (
    <g.Time
      css={{
        backgroundColor: `#ffffff`,
        borderRadius: rhythm(0.6 * rmult),
        boxShadow: `0 1.0px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1.0px #bdbdbd`,
        display: `block`,
        fontSize: rhythm(rmult),
        /* change icon size */
        height: rhythm(7 * rmult),
        margin: 0,
        overflow: `hidden`,
        position: `relative`,
        width: rhythm(7 * rmult),
      }}
      dateTime={ymdDate}
      title={ymdDate}
    >
      <g.Em
        css={{
          ...commonCSS,
          bottom: rhythm(0.3 * rmult),
          color: bannerColor.string(),
          position: `absolute`,
        }}
      >
        {monthName}
      </g.Em>
      <g.Strong
        css={{
          ...commonCSS,
          backgroundColor: bannerColor.string(),
          borderBottom: `1.0px dashed ${bannerColor.darken(0.2).string()}`,
          boxShadow: `0 2px 0 ${bannerColor.string()}`,
          color: `#fff`,
          padding: `${rhythm(0.4 * rmult)} 0`,
          position: `absolute`,
          top: `0`,
        }}
      >
        {year}
      </g.Strong>
      <g.Span
        css={{
          ...commonCSS,
          color: `#2f2f2f`,
          fontSize: rhythm(2.0 * rmult),
          letterSpacing: rhythm(-0.05 * rmult),
          paddingTop: rhythm(2.6 * rmult),
        }}
      >
        {dayOfMonth}
      </g.Span>
    </g.Time>
  )
}

CalendarPage.propTypes = {
  ymdDate: PropTypes.string.isRequired,
  monthName: PropTypes.string.isRequired,
  dayOfMonth: PropTypes.string.isRequired,
}

export default CalendarPage

export const query = graphql`
  fragment calendarPageDatesFragment on MarkdownRemark {
    fields {
      ymdDate: date(formatString: "YYYY-MM-DD")
      monthName: date(formatString: "MMMM")
      dayOfMonth: date(formatString: "D")
    }
  }
`
