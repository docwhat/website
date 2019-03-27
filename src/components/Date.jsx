// @flow
// @format
import * as React from 'react'

import { getNavigatorLanguage, ymdString2Date } from '../utils/dates.js'

type Props = {
  date: string,
}

type State = {
  dateString: string,
}

class DateNode extends React.Component<Props, State> {
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
    const { date, ...other } = this.props

    return (
      <time dateTime={date} {...other}>
        {this.state.dateString === '' ? date : this.state.dateString}
      </time>
    )
  }
}

export default DateNode
