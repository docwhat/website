// @format
// @flow
import { graphql } from 'gatsby'
import * as React from 'react'

import Bio from '../components/Bio'
import BlogPostMicroData from '../components/BlogPostMicroData'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
// Components
import PostPaginator from '../components/PostPaginator'
import Seo from '../components/Seo.jsx'
import { siteTitle, siteUrl } from '../utils/constants'

const PostTemplate = (props: {
  data: {
    markdownRemark: {
      fields: any,
      wordCount: { words: number },
      html: string,
      excerpt: string,
    },
  },
  pageContext: {
    newer?: any,
    older?: any,
  },
  location: Location,
}) => {
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
          ymdUpdate,
        },
        wordCount: { words },
        html: pageHtml,
        excerpt,
      },
    },
    pageContext: { newer, older },
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`

  return (
    <Layout location={props.location}>
      <article>
        <Seo
          title={pageTitle}
          description={excerpt}
          pathname={props.location.pathname}
          article={true}
        />
        <PageHeader
          title={pageTitle}
          monthName={monthName}
          dayName={dayName}
          dayOfMonth={dayOfMonth}
          ymdUpdate={ymdUpdate}
          ymdDate={ymdDate}
        />

        <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

        <PostPaginator older={older} newer={newer} />

        <Bio />
        <BlogPostMicroData
          postTitle={helmetTitle}
          postUrl={pageUrl}
          ymdDate={ymdDate}
          ymdUpdate={ymdUpdate}
          wordCount={words}
        />
      </article>
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        title
      }
      wordCount {
        words
      }
      excerpt(format: PLAIN)
      ...calendarPageDatesFragment
    }
  }
`
