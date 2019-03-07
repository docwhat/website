// @flow
// @format
// @ts-ignore
// @ts-nocheck
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import { lightBackground } from '../utils/colors.js'
import { rhythm } from '../utils/typography.js'
import ReadMore from './ReadMore.jsx'

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
  <section
    css={{
      ...overrideCss,
    }}
  >
    <Title to={slug}>{title}</Title>
    <Meta date={date} />
    <div
      css={{
        position: 'relative',
        verticalAlign: 'top',
        minHeight: rhythm(4),
        ':before': {
          content: "''",
          width: '100%',
          height: rhythm(4),
          position: 'absolute',
          left: 0,
          bottom: 0,
          background: `linear-gradient(transparent ${rhythm(
            2
          )} , ${lightBackground})`,
        },
      }}
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
      date(formatString: "MMMM DD YYYY")
    }
    excerpt(format: HTML, pruneLength: 300)
  }
`
