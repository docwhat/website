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
      display: "flex",
      border: "1px solid hsla(0, 0%, 0%, 0)",
      minHeight: rhythm( 7 / 2 ),
      marginBottom: rhythm( 1 ),
    }}>
      <h1 style={{
        marginTop: 0,
        marginRight: 'auto',
        marginLeft: 0,
        marginBottom: 0,
        paddingRight: rhythm( 1 / 5 ),
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
