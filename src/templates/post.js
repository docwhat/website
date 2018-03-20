import React from 'react'
import g from 'glamorous'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

// Components
import PostPaginator from '../components/PostPaginator.js'
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
    pathContext: { newer, older },
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`
  const linkStyle = css({ display: 'block' })

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

      <PostPaginator older={older} newer={newer} />

      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

      <h2>Comments</h2>
      <Comments comments={comments} />
      <SubmitComment slug={slug} url={pageUrl} />

      <PostPaginator older={older} newer={newer} />

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
    markdownRemark: PropTypes.shape({
      fields: PropTypes.object.isRequired,
      wordCount: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
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
