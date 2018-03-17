import React from "react"
import g from 'glamorous'
import PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

import { siteTitle } from '../utils/constants.js'
import Helmet from "react-helmet"
import PageHeader from "../components/PageHeader.js"
import Bio from '../components/Bio.js'

const PageTemplate = (props) => {
  const {
    data: {
      markdownRemark: {
        fields: {
          title: pageTitle,
        },
        html: pageHtml,
      }
    }
  } = props

  var pageHeader = ''
  if (pageTitle && pageTitle !== '') {
    pageHeader = <PageHeader title={pageTitle} />
  }

  const helmetTitle = pageTitle || siteTitle

  return (
    <article>
      <Helmet title={helmetTitle} />
      {pageHeader}

      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

      <g.Hr css={{ marginBottom: rhythm(1), }} />
      <Bio />
    </article>
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
    markdownRemark( fields: {
      slug: { eq: $slug },
      template: { eq: "page" }
    }) {
      html
      fields {
        slug
        title
      }
    }
  }
  `
