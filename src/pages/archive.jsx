// @format
//
import { PropTypes } from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostCardList from '../components/PostCardList'
import useArchivedPosts from '../components/useArchivedPosts.jsx'

const SiteIndex = ({ location }) => {
  const posts = useArchivedPosts()
  return (
    <Layout location={location}>
      <>
        <Helmet title="Post Archive" />
        <h1>Post Archive</h1>
        <p>Posts that have been retired for one reason or another.</p>
        <PostCardList postcards={posts} />
        <Bio />
      </>
    </Layout>
  )
}

SiteIndex.propTypes = {
  location: PropTypes.object.isRequired,
}

export default SiteIndex
