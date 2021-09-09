// @format
//
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostCardList from '../components/PostCardList'
import useArchivedPosts from '../components/useArchivedPosts.jsx'

const SiteIndex = (props) => {
  const posts = useArchivedPosts()
  return (
    <Layout location={props.location}>
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

export default SiteIndex
