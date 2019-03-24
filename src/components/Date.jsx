// @flow
// @format
import * as React from 'react'

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
    const date = this.props.date
    const dateObject = new Date(date)
    const getNavigatorLanguage = () =>
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language || 'en'

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
