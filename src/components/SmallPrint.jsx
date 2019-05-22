// @flow
// @format
import styled from '@emotion/styled'
// eslint-disable-next-line no-unused-vars
import * as React from 'react'

import { shevy } from '../utils/style'

const { baseSpacing: bs } = shevy

export default styled.small`
  font-size: 65%;
  font-style: italic;
  line-height: 1;
  margin-bottom: ${bs(1 / 4)};
  margin-top: ${bs(1 / 4)};
  opacity: 0.5;
  white-space: pre;
`
