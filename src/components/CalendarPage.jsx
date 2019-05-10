// @flow
// @format
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React from 'react'

import { heroColor } from '../utils/colors.js'
import { getNavigatorLanguage, ymdString2Date } from '../utils/dates.js'
import { rhythm } from '../utils/style.js'

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

    const bannerColor = heroColor.darken(0.0)
    const fontColor = bannerColor.negate()

    const rmult = 5 / 12 // Magic number... I know... horrible.
    const year = date.getFullYear()
    const dayOfMonth = date.getDate()
    const monthName = date.toLocaleDateString('en-US', { month: 'short' })

    const Wrapper = styled.time`
      background-color: #ffffff;
      border-radius: ${rhythm(0.6 * rmult)};
      box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff,
        0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
      display: block;
      font-size: ${rhythm(rmult)};

      /* change icon size */
      height: ${rhythm(7 * rmult)};
      margin: 0;
      overflow: hidden;
      position: relative;
      width: ${rhythm(7 * rmult)};

      /* CommonCSS */
      & > * {
        display: block;
        font-size: 1em;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        width: 100%;
      }
    `

    const Banner = styled.div`
      background-color: ${bannerColor.string()};
      border-bottom: 1px dashed ${bannerColor.darken(0.2).string()};
      box-shadow: 0 2px 0 ${bannerColor.string()};
      color: ${fontColor.string()};
      padding: ${rhythm(0.4 * rmult)} 0;
      position: absolute;
      top: 0;
    `

    const Footer = styled.div`
      bottom: ${rhythm(0.3 * rmult)};
      color: ${fontColor.string()};
      position: absolute;
    `
    const Body = styled.div`
      color: #2f2f2f;
      font-size: ${rhythm(2.0 * rmult)};
      letter-spacing: ${rhythm(-0.05 * rmult)};
      padding-top: ${rhythm(2.6 * rmult)};
    `

    // Original idea from:
    // https://www.sitepoint.com/create-calendar-icon-html5-css3/
    return (
      <Wrapper dateTime={ymdDate} title={ymdDate}>
        <Banner>{year}</Banner>
        <Body>{dayOfMonth}</Body>
        <Footer>
          {this.state.monthName === '' ? monthName : this.state.monthName}
        </Footer>
      </Wrapper>
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
