//
// @format
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import PropType from 'prop-types'
import * as React from 'react'

import { darkBackground, lightBackground } from '../utils/colors.js'
import { bs } from '../utils/shevy.js'
import Date from './Date.jsx'
import ReadMore from './ReadMore.jsx'
import SmallPrint from './SmallPrint.jsx'

const Title = ({ to, children }) => (
  <h3
    css={css`
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
      margin-top: ${bs(1 / 4)};
    `}
  >
    <Link style={{ boxShadow: `none` }} to={to}>
      {children}
    </Link>
  </h3>
)

Title.propTypes = {
  to: PropType.string.isRequired,
  children: PropType.node.isRequired,
}

const PostCard = ({ ymdDate, excerpt, overrideCss, slug, title }) => (
  <section
    css={{
      ...overrideCss,
    }}
  >
    <Title to={slug}>{title}</Title>
    <SmallPrint
      css={css`
        display: block;
        text-align: right;
      `}
    >
      <Date date={ymdDate} />
    </SmallPrint>
    <div
      css={css`
        position: relative;
        vertical-align: top;
        min-height: ${bs(3)};
        max-height: ${bs(12)};
        z-index: 1;
        overflow: hidden;
        :before {
          content: '';
          z-index: 2;
          width: 100%;
          height: ${bs(4)};
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(
            ${lightBackground.fade(1).string()},
            ${lightBackground.string()}
          );
          @media (prefers-color-scheme: dark) {
            background: linear-gradient(
              ${darkBackground.fade(1).string()},
              ${darkBackground.string()}
            );
          }
        }
      `}
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
    <ReadMore to={slug} />
  </section>
)

PostCard.propTypes = {
  ymdDate: PropType.string.isRequired,
  excerpt: PropType.string.isRequired,
  overrideCss: PropType.object,
  slug: PropType.string.isRequired,
  title: PropType.string.isRequired,
}

export default PostCard

export const query = graphql`
  fragment postCardFragment on MarkdownRemark {
    fields {
      slug
      title
      ymdDate: date(formatString: "YYYY-MM-DD")
    }
    excerpt(format: HTML, pruneLength: 300)
  }
`
