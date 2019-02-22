// @format
import PropTypes from 'prop-types'
import React from 'react'

import CalendarPage from '../components/CalandarPage'
import { rhythm } from '../utils/typography'

const PageHeader = props => {
  const { title, monthName, dayName, dayOfMonth, ymdDate } = props

  let calendarIcon = ``
  if (ymdDate) {
    calendarIcon = (
      <>
        <CalendarPage
          monthName={monthName}
          dayName={dayName}
          dayOfMonth={dayOfMonth}
          ymdDate={ymdDate}
        />
      </>
    )
  }

  return (
    <header
      css={{
        display: `flex`,
        border: `1.0px solid hsla(0, 0%, 0%, 0)`,
        minHeight: calendarIcon === `` ? `unset` : rhythm(7 / 2),
        marginBottom: rhythm(1),
      }}
    >
      <h1
        css={{
          marginTop: 0,
          marginRight: `auto`,
          marginLeft: 0,
          marginBottom: 0,
          paddingRight: rhythm(1 / 5),
          borderBottom: `none`,
        }}
      >
        {title}
      </h1>
      {calendarIcon}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  monthName: PropTypes.string,
  dayName: PropTypes.string,
  dayOfMonth: PropTypes.string,
  ymdDate: PropTypes.string,
}

export default PageHeader
