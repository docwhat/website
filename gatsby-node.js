const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          pages: allMarkdownRemark( filter: { fields: { template: { eq: "page" } } }) {
            edges { node { fields { slug } } }
          }
          posts: allMarkdownRemark( filter: { fields: { template: { eq: "post" } } } ) {
            edges { node { fields { slug } } }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve(`./src/templates/page.js`)

        _.each(result.data.pages.edges, edge => {
          const { node: { fields: { slug } } } = edge

          createPage({
            path: slug,
            component: slash(pageTemplate),
            context: { slug: slug, },
          })
        })

        const postTemplate = path.resolve(`./src/templates/post.js`)

        _.each(result.data.posts.edges, edge => {
          const { node: { fields: { slug } } } = edge

          createPage({
            path: slug,
            component: slash(postTemplate),
            context: { slug: slug },
          })
        })
      })
    resolve()
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

    // Calculate the template.
    const templateValue = node.frontmatter.template ? node.frontmatter.template : 'post'
    createNodeField({
      name: `template`,
      node: node,
      value: templateValue,
    })
  }
}
