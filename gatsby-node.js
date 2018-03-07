const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          const { node: { fields: { slug, layout } } } = edge

          if (layout !== 'comment') {
            createPage({
              path: slug,
              component: blogPost,
              context: { slug: slug },
            })
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    // Calculate the slug iff not set.
    const slugValue = node.frontmatter.slug ? node.frontmatter.slug : createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node: node,
      value: slugValue,
    })

    // Calculate the layout (not the page.layout, which is always index).
    const layoutValue = node.frontmatter.layout ? node.frontmatter.layout : 'post'
    createNodeField({
      name: `layout`,
      node: node,
      value: layoutValue,
    })
  }
}
