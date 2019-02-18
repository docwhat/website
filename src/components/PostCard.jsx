// @flow
// @format
// @ts-ignore
// @ts-nocheck
import { graphql } from 'gatsby'
import * as React from 'react'

import { rhythm } from '../utils/typography'
import Link from './Link'

const Title = ({
  to,
  children,
}: {
  to: string,
  children: React.Node,
}): React.Node => (
  <h3
    css={{
      marginBottom: 0,
    }}
  >
    <Link style={{ boxShadow: `none` }} to={to}>
      {children}
    </Link>
  </h3>
)

const Meta = (props: { date: string }): React.Node => {
  const [month, dom, year] = props.date.split(' ')
  return (
    <small
      css={{
        display: 'block',
        lineHeight: 1,
        marginTop: rhythm(1 / 4),
        marginBottom: rhythm(1 / 4),
        textAlign: 'right',
        whiteSpace: 'pre',
        fontStyle: 'italic',
      }}
    >
      {month} {dom}, {year}
    </small>
  )
}

const PostCard = ({
  date,
  excerpt,
  overrideCss,
  slug,
  title,
}: {
  date: string,
  excerpt: string,
  overrideCss: Object,
  slug: string,
  title: string,
}): React.Node => (
  <section css={overrideCss}>
    <Title to={slug}>{title}</Title>
    <Meta date={date} />
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    <Link
      css={{
        display: `block`,
        textAlign: `right`,
        fontSize: rhythm(1 / 2),
      }}
      to={slug}
    >
      Read More&hellip;
    </Link>
  </section>
)

export default PostCard

export const query = graphql`
  fragment postCardFragment on MarkdownRemark {
    fields {
      slug
      title
      date(formatString: "MMMM DD YYYY")
    }
    excerpt(format: PLAIN, pruneLength: 280)
  }
`
