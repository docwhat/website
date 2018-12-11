// @format
// @flow
import { graphql } from 'gatsby'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import PostPaginator from '../components/PostPaginator'
import Bio from '../components/Bio'
import PageHeader from '../components/PageHeader'
import SubmitComment from '../components/SubmitComment'
import Comments from '../components/Comments'

import { siteUrl, siteTitle } from '../utils/constants'
import BlogPostMicroData from '../components/BlogPostMicroData'
import Layout from '../components/Layout.js'

const PostTemplate = props => {
  const {
    data: {
      markdownRemark: {
        fields: {
          slug,
          title: pageTitle,
          monthName,
          dayName,
          dayOfMonth,
          ymdDate,
        },
        wordCount: { words },
        html: pageHtml,
      },
      comments,
    },
    pageContext: { newer, older },
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`

  return (
    <Layout location={props.location}>
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

        <Comments comments={comments} />
        <SubmitComment slug={slug} url={pageUrl} />

        <PostPaginator older={older} newer={newer} />

        <Bio />
        <BlogPostMicroData
          postTitle={helmetTitle}
          postUrl={pageUrl}
          ymdDate={ymdDate}
          wordCount={words}
        />
      </article>
    </Layout>
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
  pageContext: PropTypes.shape({
    newer: PropTypes.object,
    older: PropTypes.object,
  }),
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
