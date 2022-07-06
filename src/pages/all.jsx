// @format
//
import { PropTypes } from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostCardList from '../components/PostCardList'
import useAllPosts from '../components/useAllPosts'

const PageIndex = ({ location }) => {
  const allPosts = useAllPosts()
  return (
    <Layout location={location}>
      <Helmet title="All Posts" />
      <h1>All posts</h1>
      <PostCardList postcards={allPosts} />
      <Bio />
    </Layout>
  )
}

PageIndex.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PageIndex
