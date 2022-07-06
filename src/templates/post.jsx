// @format
//
import 'prismjs/plugins/command-line/prism-command-line.css'

import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { PropTypes } from 'prop-types'
import React from 'react'

import BannerImage from '../components/BannerImage.jsx'
import Bio from '../components/Bio'
import BlogPostMicroData from '../components/BlogPostMicroData'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
// Components
import PostPaginator from '../components/PostPaginator'
import Seo from '../components/Seo.jsx'
import SmallPrint from '../components/SmallPrint.jsx'
import { siteTitle, siteUrl } from '../utils/constants'

const PostActions = (props) => (
  <SmallPrint
    css={css`
      text-align: right;
      display: block;
    `}
  >
    <a target="_blank" rel="noopener noreferrer" href={props.editLink}>
      Edit on GitHub
    </a>
  </SmallPrint>
)

PostActions.propTypes = {
  editLink: PropTypes.string.isRequired,
}

const PostTemplate = (props) => {
  const {
    data: {
      markdownRemark: {
        fields: {
          banner,
          slug,
          editLink,
          title: pageTitle,
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
  const postUrl = `${siteUrl}${slug}`
  const bannerImage = banner ? (
    <BannerImage
      credits={banner.credits}
      sourceUrl={banner.sourceUrl}
      image={banner.image}
    />
  ) : null

  return (
    <Layout location={props.location}>
      <article>
        <Seo
          title={pageTitle}
          description={excerpt}
          pathname={props.location.pathname}
          image={banner && banner.image && banner.image.publicURL}
          article={true}
        />
        <PageHeader title={pageTitle} ymdUpdate={ymdUpdate} ymdDate={ymdDate} />

        {bannerImage}

        <div dangerouslySetInnerHTML={{ __html: pageHtml }} />

        <PostActions editLink={editLink} />

        <PostPaginator older={older} newer={newer} />

        <Bio />
        <BlogPostMicroData
          postTitle={helmetTitle}
          postUrl={postUrl}
          ymdDate={ymdDate}
          ymdUpdate={ymdUpdate}
          wordCount={words}
        />
      </article>
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        banner: PropTypes.shape({
          credits: PropTypes.string,
          sourceUrl: PropTypes.string,
          image: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }),
        slug: PropTypes.string.isRequired,
        editLink: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ymdDate: PropTypes.string.isRequired,
        ymdUpdate: PropTypes.string.isRequired,
      }),
      wordCount: PropTypes.shape({
        words: PropTypes.number.isRequired,
      }),
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default PostTemplate

export const postQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        title
        editLink
        banner {
          credits
          sourceUrl
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
