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
          pages: allMarkdownRemark(
            filter: { fields: { template: { eq: "page" } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
          posts: allMarkdownRemark(
            filter: { fields: { template: { eq: "post" } } }
          ) {
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

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      _.each(result.data.pages.edges, edge => {
        const { node: { fields: { slug } } } = edge

        createPage({
          path: slug,
          component: slash(pageTemplate),
          context: { slug: slug },
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

const calculateDefaults = (node, getNode) => {
  const defaultSlug = createFilePath({ node, getNode, basePath: `pages` })
  const isPostShaped = defaultSlug.match(
    /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
  )

  if (isPostShaped) {
    const [, defaultDate, defaultTitle] = isPostShaped
    return [defaultSlug, defaultTitle, defaultDate]
  } else {
    const [, defaultTitle] = defaultSlug.match(/^\/(.*)\/$/)
    const defaultDate = '1972-12-14'
    return [defaultSlug, defaultTitle, defaultDate]
  }
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    try {
      if (node.frontmatter.template === `comment`) {
        createNodeField({ name: `template`, node: node, value: 'comment' })
        createNodeField({
          name: `slug`,
          node: node,
          value: node.frontmatter.slug,
        })
      } else {
        const [defaultSlug, defaultTitle, defaultDate] = calculateDefaults(
          node,
          getNode
        )

        const slug = node.frontmatter.slug || defaultSlug
        const date = node.frontmatter.date || defaultDate
        const title = node.frontmatter.title || defaultTitle
        const template = node.frontmatter.template || 'post'

        createNodeField({ name: `slug`, node: node, value: slug })
        createNodeField({ name: `date`, node: node, value: date })
        createNodeField({ name: `title`, node: node, value: title })
        createNodeField({ name: `template`, node: node, value: template })
      }
    } catch (ex) {
      console.log('Error onCreateNode():', node.fileAbsolutePath, '\n', ex)
      throw ex
    }
  }
}
