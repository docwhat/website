// @flow
// @format
import * as React from 'react'

import { rhythm } from '../utils/typography'

type Props = {
  children: React.Node,
}

const SmallPrint = ({ children, ...other }: Props): React.Node => (
  <small
    css={{
      fontStyle: 'italic',
      fontSize: '70%',
      lineHeight: 1,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1 / 4),
      whiteSpace: 'pre',
    }}
    {...other}
  >
    {children}
  </small>
)
export default SmallPrint
