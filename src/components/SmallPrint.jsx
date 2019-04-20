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
      fontSize: '65%',
      fontStyle: 'italic',
      lineHeight: 1,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1 / 4),
      opacity: 0.5,
      whiteSpace: 'pre',
    }}
    {...other}
  >
    {children}
  </small>
)
export default SmallPrint
