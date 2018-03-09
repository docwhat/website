import React from 'react'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

// Components
import Bio from '../components/Bio.js'
import PageHeader from "../components/PageHeader.js"
import SubmitComment from '../components/SubmitComment.js'
import Comments from '../components/Comments.js'

import { siteUrl, siteTitle, } from '../utils/constants.js'
import BlogPostMicroData from '../components/BlogPostMicroData.js'

import renderAst from '../utils/renderAst.js'

const PostTemplate = (props) => {
  const currentPage = props.data.markdownRemark
  const {
    data: {
      markdownRemark: {
        fields: {
          slug: slug,
        },
        frontmatter: {
          title: pageTitle,
          monthName: monthName,
          dayName: dayName,
          dayOfMonth: dayOfMonth,
          ymdDate: ymdDate,
        },
        htmlAst: pageHtmlAst,
      },
      comments: comments,
    }
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`

  return (
    <article>
      <Helmet title={helmetTitle} />
      <PageHeader markdownRemark={currentPage} />

      <div>{renderAst(pageHtmlAst)}</div>

      <h2>
        Comments
      </h2>
      <Comments comments={comments} />
      <SubmitComment slug={slug} url={pageUrl} />

      <hr style={{ marginBottom: rhythm(1), }} />
      <Bio />
      <BlogPostMicroData
        postTitle={helmetTitle}
        postUrl={pageUrl}
        ymdDate={ymdDate}
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
    markdownRemark( fields: {
      slug: { eq: $slug },
      template: { eq: "post" }
    }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
      }
      ...calendarPageDatesFragment
    }
    ...commentsQueryFragment
  }
  `
