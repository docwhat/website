import React from 'react'
import g from 'glamorous'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

// Components
import Bio from '../components/Bio.js'
import PageHeader from '../components/PageHeader.js'
import SubmitComment from '../components/SubmitComment.js'
import Comments from '../components/Comments.js'

import { siteUrl, siteTitle } from '../utils/constants.js'
import BlogPostMicroData from '../components/BlogPostMicroData.js'

const PostTemplate = props => {
  const {
    data: {
      markdownRemark: {
        fields: {
          slug: slug,
          title: pageTitle,
          monthName: monthName,
          dayName: dayName,
          dayOfMonth: dayOfMonth,
          ymdDate: ymdDate,
        },
        wordCount: { words },
        html: pageHtml,
      },
      comments: comments,
    },
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`

  return (
    <article>
      <Helmet title={helmetTitle} />
      <PageHeader
        title={pageTitle}
        monthName={monthName}
        dayName={dayName}
        dayOfMonth={dayOfMonth}
        ymdDate={ymdDate}
      />

      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

      <h2>Comments</h2>
      <Comments comments={comments} />
      <SubmitComment slug={slug} url={pageUrl} />

      <g.Hr css={{ marginBottom: rhythm(1) }} />
      <Bio />
      <BlogPostMicroData
        postTitle={helmetTitle}
        postUrl={pageUrl}
        ymdDate={ymdDate}
        wordCount={words}
      />
    </article>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
}

export default PostTemplate

export const postQuery = graphql`
  query currentPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, template: { eq: "post" } }) {
      html
      fields {
        slug
        title
      }
      wordCount {
        words
      }
      ...calendarPageDatesFragment
    }
    ...commentsQueryFragment
  }
`
