// @format
import { graphql } from 'gatsby'

import React from 'react'
import Helmet from 'react-helmet'

import { siteTitle } from '../utils/constants'
import PageHeader from '../components/PageHeader'
import Bio from '../components/Bio'
import Layout from '../components/Layout.js'

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
    <Layout location={props.location}>
      <article>
        <Helmet title={helmetTitle} />
        {pageHeader}

        <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

        <Bio />
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, template: { eq: "page" } }) {
      html
      fields {
        slug
        title
      }
    }
  }
`
