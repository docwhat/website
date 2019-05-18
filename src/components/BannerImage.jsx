// @format
// @flow
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import * as React from 'react'

import { rhythm } from '../utils/style'

const Caption = (props: { credits: string, sourceUrl: string }) => {
  const { credits, sourceUrl } = props

  return (
    <figcaption
      css={css`
        font-style: oblique;
        font-size: ${rhythm(1 / 3)};
      `}
    >
      {credits}{' '}
      <code>
        <Link to={sourceUrl}>source</Link>
      </code>
    </figcaption>
  )
}

const BannerImage = (props: {
  credits: string,
  sourceUrl: string,
  image: any,
}) => {
  const { credits, sourceUrl, image } = props

  const caption = credits ? (
    <Caption credits={credits} sourceUrl={sourceUrl} />
  ) : (
    ''
  )
  if (
    props.image &&
    props.image.childImageSharp &&
    props.image.childImageSharp.fluid
  ) {
    return (
      <figure>
        <Img
          fluid={image.childImageSharp.fluid}
          title={credits || null}
          alt=""
        />
        {caption}
      </figure>
    )
  } else {
    return null
  }
}

export default BannerImage
