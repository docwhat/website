// @format
//
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'

const Caption = ({ credits, sourceUrl }) => (
  <figcaption
    css={css`
      font-style: oblique;
      font-size: calc(var(--base-spacing) / 3);
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

const BannerImage = ({ credits, sourceUrl, image }) => {
  const caption = credits ? (
    <Caption credits={credits} sourceUrl={sourceUrl} />
  ) : (
    ''
  )
  if (image && image.childImageSharp) {
    return (
      <figure>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
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
  image: PropTypes.object,
}

export default BannerImage
