//
// @format
import PropType from 'prop-types'
import * as React from 'react'

import { getNavigatorLanguage, ymdString2Date } from '../utils/dates.js'

class DateNode extends React.Component {
  state = {
    dateString: '',
  }

  componentDidMount() {
    const dateObject = ymdString2Date(this.props.date)

    this.setState({
      dateString: dateObject.toLocaleDateString(getNavigatorLanguage(), {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    })
  }

  render() {
    const { date, title, ...other } = this.props

    const displayTitle = title === undefined ? date : title

    return (
      <time dateTime={date} title={displayTitle} {...other}>
        {this.state.dateString === '' ? date : this.state.dateString}
      </time>
    )
  }
}

DateNode.propTypes = {
  date: PropType.string.isRequired,
  title: PropType.string,
}

export default DateNode
