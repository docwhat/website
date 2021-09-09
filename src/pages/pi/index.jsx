// @format
//
import Link from 'gatsby-link'
import * as React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import PostCardList from '../../components/PostCardList'
import SourceLink from '../../components/SourceLink'
import useAllPies from '../../components/useAllPies'
import useSiteMetadata from '../../components/useSiteMetadata'

const SiteIndex = (props) => {
  const pies = useAllPies()
  const site = useSiteMetadata()

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
        <table>
          <thead>
            <tr>
              <th>variable</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>SITE_COMMIT</th>
              <td>
                <code>{site.commit}</code>
              </td>
            </tr>
            <tr>
              <th>SITE_VERSION</th>
              <td>
                <code>{site.version}</code>
              </td>
            </tr>
            <tr>
              <th>NODE_ENV</th>
              <td>
                <code>{site.node_env}</code>
              </td>
            </tr>
          </tbody>
        </table>
        <PostCardList postcards={pies} />
      </>
    </Layout>
  )
}

export default SiteIndex
