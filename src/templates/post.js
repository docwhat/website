// @format
// @flow
import { graphql } from 'gatsby'
import * as React from 'react'

import BannerImage from '../components/BannerImage.jsx'
import Bio from '../components/Bio'
import BlogPostMicroData from '../components/BlogPostMicroData'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
// Components
import PostPaginator from '../components/PostPaginator'
import Seo from '../components/Seo.jsx'
import { siteTitle, siteUrl } from '../utils/constants'

type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string,
        title: string,
        banner: {
          credits: string,
          sourceUrl: string,
          image: any,
        },
        ymdDate: string,
        ymdUpdate: string,
      },
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
}

const PostTemplate = (props: Props) => {
  const {
    data: {
      markdownRemark: {
        fields: { banner, slug, title: pageTitle, ymdDate, ymdUpdate },
        wordCount: { words },
        html: pageHtml,
        excerpt,
      },
    },
    pageContext: { newer, older },
  } = props

  const helmetTitle = pageTitle || siteTitle
  const pageUrl = `${siteUrl}${slug}`
  const bannerImage = banner ? (
    <BannerImage
      credits={banner.credits}
      sourceUrl={banner.sourceUrl}
      image={banner.image}
    />
  ) : (
    ''
  )

  return (
    <Layout location={props.location}>
      <article>
        <Seo
          title={pageTitle}
          description={excerpt}
          pathname={props.location.pathname}
          article={true}
        />
        <PageHeader title={pageTitle} ymdUpdate={ymdUpdate} ymdDate={ymdDate} />

        {bannerImage}

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
        banner {
          credits
          sourceUrl
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      wordCount {
        words
      }
      excerpt(format: PLAIN)
      ...pageHeaderFragment
    }
  }
`
