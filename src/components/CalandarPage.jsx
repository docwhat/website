// @flow
// @format
import { graphql } from 'gatsby'
import React from 'react'

import { heroColor } from '../utils/colors'
import { getNavigatorLanguage, ymdString2Date } from '../utils/dates.js'
import { rhythm } from '../utils/typography'

type State = {
  monthName: string,
}

type Props = {
  ymdDate: string,
}

class CalendarPage extends React.Component<Props, State> {
  state = {
    monthName: '',
  }

  componentDidMount() {
    const date = ymdString2Date(this.props.ymdDate)
    const lang = getNavigatorLanguage()

    this.setState({
      monthName: date.toLocaleDateString(lang, {
        month: 'short',
      }),
    })
  }

  render() {
    const { ymdDate } = this.props
    const date = ymdString2Date(ymdDate)

    const commonCSS = {
      display: `block`,
      fontSize: `1em`,
      fontStyle: `normal`,
      fontWeight: `bold`,
      textAlign: `center`,
      width: `100%`,
    }

    const bannerColor = heroColor.darken(0.0)
    const fontColor = bannerColor.negate()

    const rmult = 5 / 12 // Magic number... I know... horrible.
    const year = date.getFullYear()
    const dayOfMonth = date.getDate()
    const monthName = date.toLocaleDateString('en-US', { month: 'short' })

    // Original idea from:
    // https://www.sitepoint.com/create-calendar-icon-html5-css3/
    return (
      <time
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
        <strong
          css={{
            ...commonCSS,
            backgroundColor: bannerColor.string(),
            borderBottom: `1.0px dashed ${bannerColor.darken(0.2).string()}`,
            boxShadow: `0 2px 0 ${bannerColor.string()}`,
            color: fontColor,
            padding: `${rhythm(0.4 * rmult)} 0`,
            position: `absolute`,
            top: `0`,
          }}
        >
          {year}
        </strong>
        <em
          css={{
            ...commonCSS,
            bottom: rhythm(0.3 * rmult),
            color: bannerColor,
            position: `absolute`,
          }}
        >
          {this.state.monthName === '' ? monthName : this.state.monthName}
        </em>
        <span
          css={{
            ...commonCSS,
            color: `#2f2f2f`,
            fontSize: rhythm(2.0 * rmult),
            letterSpacing: rhythm(-0.05 * rmult),
            paddingTop: rhythm(2.6 * rmult),
          }}
        >
          {dayOfMonth}
        </span>
      </time>
    )
  }
}

export default CalendarPage

export const query = graphql`
  fragment calendarPageDatesFragment on MarkdownRemark {
    fields {
      ymdDate: date(formatString: "YYYY-MM-DD")
      ymdUpdate: update_date(formatString: "YYYY-MM-DD")
      monthName: date(formatString: "MMMM")
      dayOfMonth: date(formatString: "D")
    }
  }
`
