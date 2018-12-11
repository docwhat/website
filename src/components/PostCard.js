// @flow
// @format
import { graphql } from 'gatsby'
import g, { H3, Small } from 'glamorous'
import * as React from 'react'
import Link from './Link'
import { rhythm } from '../utils/typography'

const Title = ({
  to,
  children,
}: {
  to: string,
  children: React.Node,
}): React.Node => (
  <H3
    css={{
      marginBottom: 0,
    }}
  >
    <Link style={{ boxShadow: `none` }} to={to}>
      {children}
    </Link>
  </H3>
)

const Meta = (props: { children: React.Node }): React.Node => (
  <Small
    css={{
      display: `block`,
      lineHeight: 1,
      marginBottom: rhythm(1 / 4),
      textAlign: `right`,
    }}
  >
    {props.children}
  </Small>
)

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
  <g.Section css={overrideCss}>
    <Title to={slug}>{title}</Title>
    <Meta>{date}</Meta>
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
  </g.Section>
)

export default PostCard

export const query = graphql`
  fragment postCardFragment on MarkdownRemark {
    fields {
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    excerpt(pruneLength: 280)
  }
`
