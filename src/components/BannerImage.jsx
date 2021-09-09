// @format
//
import { css } from '@emotion/react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import * as React from 'react'

import { shevy } from '../utils/style'

const { baseSpacing: bs } = shevy

const Caption = ({ credits, sourceUrl }) => (
  <figcaption
    css={css`
      font-style: oblique;
      font-size: ${bs(1 / 3)};
    `}
  >
    {credits}{' '}
    <code>
      <a href={sourceUrl} rel="noopener">
        source
      </a>
    </code>
  </figcaption>
)

Caption.propTypes = {
  credits: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
}

const BannerImage = (props) => {
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

BannerImage.propTypes = {
  credits: PropTypes.string,
  sourceUrl: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default BannerImage
