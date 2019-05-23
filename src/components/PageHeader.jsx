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

const { lineHeightSpacing: lhs, h2 } = shevy

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
            fontSize: lhs(1 / 2),
            marginTop: lhs(1 / 2),
            marginBottom: 0,
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
        }}
      >
        <h1
          css={{
            marginRight: `auto`,
            marginBottom: h2.marginBottom,
            paddingRight: lhs(1 / 4),
            lineHeight: 1,
            fontSize: h2.fontSize,
            border: 'none',
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
