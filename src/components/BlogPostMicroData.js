// @format
import React from 'react'
import PropTypes from 'prop-types'
import avatarPic from '../components/avatar.png'
import { authorUrl, authorJsonLd } from '../utils/constants.js'

const BlogPostMicroData = props => {
  const { postTitle, postUrl, ymdDate, wordCount } = props

  const jsonObject = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    headline: postTitle,
    // "genre":"",
    // "keywords":"",
    wordCount: wordCount,
    url: postUrl,
    datePublished: ymdDate,
    author: authorJsonLd,
    publisher: {
      ...authorJsonLd,
      logo: {
        '@type': 'ImageObject',
        contentUrl: avatarPic,
        url: authorUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    // "articleBody":""
  }

  return (
    <script type="application/ld+json">{JSON.stringify(jsonObject)}</script>
  )
}

BlogPostMicroData.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
  ymdDate: PropTypes.string.isRequired,
  wordCount: PropTypes.number.isRequired,
}

export default BlogPostMicroData
