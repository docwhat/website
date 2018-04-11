// @flow
// @format
import React from 'react'
import PropTypes from 'prop-types'
import { authorJsonLD } from '../utils/ldjson'

const BlogPostMicroData = props => {
  const { postTitle, postUrl, ymdDate, wordCount } = props

  // https://jsonld-examples.com/schema.org/code/article/socialmediaposting/blogposting-markup.php
  const jsonObject = {
    '@context': `http://schema.org`,
    '@type': `BlogPosting`,
    headline: postTitle,
    /* "genre":"", */
    /* "keywords":"", */
    wordCount,
    url: postUrl,
    datePublished: ymdDate,
    author: authorJsonLD,
    mainEntityOfPage: `True`,
    /* "articleBody":"" */
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonObject) }}
    />
  )
}

BlogPostMicroData.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
  ymdDate: PropTypes.string.isRequired,
  wordCount: PropTypes.number.isRequired,
}

export default BlogPostMicroData
