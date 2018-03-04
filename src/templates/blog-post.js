import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import rehypeReact from "rehype-react"

// Components
import Bio from '../components/Bio.js'
import SubmitComment from '../components/SubmitComment.js'
import Comments from '../components/Comments.js'
// import Gist from '../components/Gist'
import Gist from 'react-gist'

import avatarPic from '../components/avatar.png'
import {
  siteUrl,
  siteTitle,
  authorUrl,
  authorJsonLd
} from '../utils/constants.js'

// Part of gatsby-remark-component
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "gist": Gist,
  }
}).Compiler

const BlogPostMicroData = props => {
  const {
    postTitle,
    postUrl,
    ymdDate,
  } = props

  const jsonObject = {
    "@context":"http://schema.org",
    "@type":"BlogPosting",
    "headline": postTitle,
    // "genre":"",
    // "keywords":"",
    // "wordCount":"{{ wordcount }}",
    "url": postUrl,
    "datePublished": ymdDate,
    "author": authorJsonLd,
    "publisher":{
      ...authorJsonLd,
      "logo": {
        "@type": "ImageObject",
        "contentUrl": avatarPic,
        "url": authorUrl
      }
    },
    "mainEntityOfPage":{
      "@type":"WebPage",
      "@id": postUrl,
    },
    // "articleBody":""
  }

  return (
    <script type="application/ld+json">{JSON.stringify(jsonObject)}</script>
  )
}

const BlogPostTemplate = (props) => {
  const {
    data: {
      post: {
        fields: {
          slug: slug,
        },
        frontmatter: {
          title: postTitle,
          date: postDate,
          ymdDate: ymdDate,
        },
        htmlAst: postHtmlAst,
      },
      comments: comments,
    }
  } = props

  const helmetTitle = postTitle || siteTitle
  const postUrl = `${siteUrl}${slug}`

  return (
    <div>
      <Helmet title={helmetTitle} />
      <h1
        style={{
          borderBottom: 'none',
        }}
      >
        {postTitle}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
          textAlign: 'right',
        }}
      >
        {postDate}
      </p>
      <div>{renderAst(postHtmlAst)}</div>
      <h2>
        Comments
      </h2>
      <Comments comments={comments} />
      <SubmitComment slug={slug} url={postUrl} />

      <hr style={{
        marginBottom: rhythm(1),
      }} />
      <Bio />
      <BlogPostMicroData
        postTitle={helmetTitle}
        postUrl={postUrl}
        ymdDate={ymdDate}
      />
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(
      fields: { slug: { eq: $slug } },
      frontmatter: { layout: { eq: "post" } }
    ) {
      id
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        ymdDate: date(formatString: "YYYY-MM-DD"),
        date(formatString: "MMMM DD, YYYY")
      }
    }
    ...commentsQueryFragment
  }
`
