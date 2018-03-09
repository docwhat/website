import React from 'react'
import PropTypes from "prop-types"
import CalendarPage from '../components/CalandarPage.js'
import { rhythm } from "../utils/typography"

const PageHeader = (props) => {
  const {
    title,
    monthName,
    dayName,
    dayOfMonth,
    ymdDate,
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
        marginRight: (calendarIcon === '') ? 0 : rhythm( 3 ),
        borderBottom: 'none',
      }} >
        {title}
      </h1>
      {calendarIcon}

    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  monthName: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired,
  dayOfMonth: PropTypes.string.isRequired,
  ymdDate: PropTypes.string.isRequired,
}

export default PageHeader
