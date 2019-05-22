// @flow
// @format
import { graphql } from 'gatsby'
import * as React from 'react'

import { shevy } from '../utils/style.js'
import CalendarPage from './CalendarPage.jsx'
import Date from './Date.jsx'
import SmallPrint from './SmallPrint.jsx'

type Props = {
  title: string,
  ymdDate: string,
  ymdUpdate: string,
}

const { baseSpacing: bs } = shevy

const PageHeader = (props: Props): React.Node => {
  const { title, ymdDate, ymdUpdate } = props

  let calendarIcon = ``
  let updateBlurb = ``
  if (ymdDate) {
    calendarIcon = (
      <>
        <CalendarPage ymdDate={ymdDate} />
      </>
    )
    if (ymdUpdate !== 'Invalid date' && ymdUpdate > ymdDate) {
      updateBlurb = (
        <SmallPrint
          css={{
            display: 'block',
            textAlign: 'right',
          }}
        >
          last updated <Date date={ymdUpdate} />
        </SmallPrint>
      )
    }
  }

  return (
    <>
      <header
        css={{
          display: `flex`,
          border: `1.0px solid hsla(0, 0%, 0%, 0)`,
          minHeight: calendarIcon === `` ? `unset` : bs(7 / 2),
          marginBottom: bs(1),
        }}
      >
        <h1
          css={{
            lineHeight: 1,
            marginTop: 0,
            marginRight: `auto`,
            marginLeft: 0,
            marginBottom: 0,
            paddingRight: bs(1 / 5),
            borderBottom: `none`,
          }}
        >
          {title}
        </h1>
        {calendarIcon}
      </header>
      {updateBlurb}
    </>
  )
}

export default PageHeader

export const query = graphql`
  fragment pageHeaderFragment on MarkdownRemark {
    ...calendarPageDatesFragment
    fields {
      ymdUpdate: update_date(formatString: "YYYY-MM-DD")
    }
  }
`
