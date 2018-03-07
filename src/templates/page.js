import React from "react"
import PropTypes from "prop-types"
import renderAst from '../utils/renderAst.js'

import { rhythm } from "../utils/typography"

import { siteTitle } from '../utils/constants.js'
import Helmet from "react-helmet"
import PageHeader from "../components/PageHeader.js"
import Bio from '../components/Bio.js'

const PageTemplate = (props) => {
  const currentPage = props.data.markdownRemark
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title: pageTitle,
        },
        htmlAst: pageHtmlAst,
      }
    }
  } = props

  var pageHeader = ''
  if (pageTitle) {
    pageHeader = <PageHeader markdownRemark={currentPage} />
  }

  const helmetTitle = pageTitle || siteTitle

  return (
    <div>
      <Helmet title={helmetTitle} />
      {pageHeader}

      <div>{renderAst(pageHtmlAst)}</div>

      <hr style={{ marginBottom: rhythm(1), }} />
      <Bio />
    </div>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
      }
      ...calendarPageDatesFragment
    }
  }
  `
