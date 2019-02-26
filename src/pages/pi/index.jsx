// @format
// @flow
import Link from 'gatsby-link'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import PostCardList from '../../components/PostCardList'
import SourceLink from '../../components/SourceLink'
import useAllPies from '../../components/useAllPies'

const SiteIndex = (props: { location: Location }) => {
  const pies = useAllPies()

  return (
    <Layout location={props.location}>
      <>
        <Helmet title="Gatekeeper" />
        <h1>Welcome to Gatekeeper!</h1>

        <p>
          <a href="https://amzn.to/2SgcHGK">Gatekeeper</a>: Behind-the-scenes
          for <Link to="/">docwhat.org</Link>.
        </p>
        <p>
          The current version is: <br /> <SourceLink />
        </p>
        <PostCardList postcards={pies} />
      </>
    </Layout>
  )
}

export default SiteIndex
