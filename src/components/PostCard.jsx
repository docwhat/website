// @flow
// @format
import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import { lightBackground } from '../utils/colors.js'
import { rhythm } from '../utils/style.js'
import Date from './Date.jsx'
import ReadMore from './ReadMore.jsx'
import SmallPrint from './SmallPrint.jsx'

const Title = ({
  to,
  children,
}: {
  to: string,
  children: React.Node,
}): React.Node => (
  <h3
    css={css`
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
      margin-top: ${rhythm(1 / 4)};
    `}
  >
    <Link style={{ boxShadow: `none` }} to={to}>
      {children}
    </Link>
  </h3>
)

type Props = {
  ymdDate: string,
  excerpt: string,
  overrideCss: Object,
  slug: string,
  title: string,
}

const PostCard = ({
  ymdDate,
  excerpt,
  overrideCss,
  slug,
  title,
}: Props): React.Node => (
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
        min-height: ${rhythm(3)};
        max-height: ${rhythm(12)};
        z-index: 1;
        overflow: hidden;
        :before {
          content: '';
          z-index: 2;
          width: 100%;
          height: ${rhythm(4)};
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(
            ${lightBackground.fade(1).string()},
            ${lightBackground.string()}
          );
        }
      `}
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
    <ReadMore to={slug} />
  </section>
)

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
