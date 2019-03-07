// @flow
// @format

import * as React from 'react'

import LinkButton from './LinkButton.jsx'

const ReadMore = ({ to, ...other }: { to: string }): React.Node => (
  <LinkButton to={to} {...other}>
    Read More&hellip;
  </LinkButton>
)

export default ReadMore
