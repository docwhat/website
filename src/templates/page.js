// @format
// @flow
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { siteTitle } from '../utils/constants'
import PageHeader from '../components/PageHeader'
import Bio from '../components/Bio'

const PageTemplate = props => {
  const {
    data: {
      markdownRemark: {
        fields: { title: pageTitle },
        html: pageHtml,
      },
    },
  } = props

  let pageHeader = ``
  if (pageTitle && pageTitle !== ``) {
    pageHeader = <PageHeader title={pageTitle} />
  }

  const helmetTitle = pageTitle || siteTitle

  return (
    <article>
      <Helmet title={helmetTitle} />
      {pageHeader}

      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

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
    markdownRemark(
      fields: { slug: { eq: $slug }, template: { eq: "page" } }
    ) {
      html
      fields {
        slug
        title
      }
    }
  }
`
