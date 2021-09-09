//
// @format
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import PropType from 'prop-types'
import React from 'react'

import { heroColor } from '../utils/colors.js'
import { getNavigatorLanguage, ymdString2Date } from '../utils/dates.js'
import { shevy } from '../utils/style.js'

const { baseSpacing: bs, lineHeightSpacing: lhs } = shevy

class CalendarPage extends React.Component {
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

    const year = date.getFullYear()
    const dayOfMonth = date.getDate()
    const monthName = date.toLocaleDateString('en-US', { month: 'short' })

    const Wrapper = styled.time`
      background-color: #fff;
      border-radius: ${bs(1 / 4)};
      box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff,
        0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
      display: block;
      font-size: ${bs(1 / 2)};

      /* change icon size */
      height: ${bs(3)};
      margin: 0 0 ${lhs(1 / 2)};
      overflow: hidden;
      position: relative;
      width: ${bs(3)};
      min-width: ${bs(2)};

      /* CommonCSS */
      & > * {
        display: block;
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
      padding: ${bs(1 / 8)} 0;
      position: absolute;
      top: 0;
    `

    const Footer = styled.div`
      bottom: ${bs(1 / 8)};
      color: ${fontColor.string()};
      position: absolute;
    `
    const Body = styled.div`
      color: ${fontColor.string()};
      font-size: ${bs(1)};
      letter-spacing: ${bs(1 / 50)};
      padding-top: ${bs(1)};
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

CalendarPage.propTypes = {
  ymdDate: PropType.string.isRequired,
}

export default CalendarPage

export const query = graphql`
  fragment calendarPageDatesFragment on MarkdownRemark {
    fields {
      ymdDate: date(formatString: "YYYY-MM-DD")
    }
  }
`
