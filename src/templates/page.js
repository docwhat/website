// @format
//
import { graphql } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import { siteTitle } from '../utils/constants'

const PageTemplate = (props) => {
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
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        title
      }
    }
  }
`
