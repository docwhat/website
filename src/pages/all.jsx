// @format
// @flow
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostCardList from '../components/PostCardList'
import useAllPosts from '../components/useAllPosts'

const SiteIndex = (props: { location: Location }) => {
  const allPosts = useAllPosts()
  return (
    <Layout location={props.location}>
      <>
        <Helmet title="All Posts" />
        <h1>All posts</h1>
        <PostCardList postcards={allPosts} />
        <Bio />
      </>
    </Layout>
  )
}

export default SiteIndex
