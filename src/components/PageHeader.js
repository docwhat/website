import React from 'react'
import PropTypes from "prop-types"
import CalendarPage from '../components/CalandarPage.js'
import { rhythm } from "../utils/typography"

const PageHeader = (props) => {
  const {
    markdownRemark: {
      frontmatter: {
        title: postTitle,
        monthName: monthName,
        dayName: dayName,
        dayOfMonth: dayOfMonth,
        ymdDate: ymdDate,
      }
    }
  } = props

  var calendarIcon = ''
  if (ymdDate) {
    calendarIcon = <div style={{
      position: "absolute",
      margin: 0,
      top: 0,
      right: 0,
    }}>
      <CalendarPage
        monthName={monthName}
        dayName={dayName}
        dayOfMonth={dayOfMonth}
        ymdDate={ymdDate} />
    </div>
  }

  return(
    <header style={{
      position: "relative",
      border: "1px solid hsla(0, 0%, 0%, 0)",
      minHeight: rhythm( 7 / 2 ),
    }}>
      <h1 style={{
        marginTop: 0,
        marginRight: rhythm( 3 ),
        borderBottom: 'none',
      }} >
        {postTitle}
      </h1>
      {calendarIcon}

    </header>
  )
}

PageHeader.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
}

export default PageHeader
