// @format
'use strict'

const pathlib = require(`path`)

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = pathlib.resolve(`./src/templates/page.jsx`)
  const postTemplate = pathlib.resolve(`./src/templates/post.jsx`)

  const createPosts = (newPosts) => {
    newPosts.forEach(({ node }, index) => {
      const newer = index === 0 ? null : newPosts[index - 1].node
      const older =
        index === newPosts.length - 1 ? null : newPosts[index + 1].node

      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
          newer,
          older,
        },
      })
    })
  }

  const pages = graphql(`
    {
      pages: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { sourceName: { eq: "pages" } } }
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
  `).then((results) => {
    if (results.errors) {
      Promise.reject(results.errors)
    }

    results.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    Promise.resolve(results)
  })

  const posts = graphql(`
    {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { draft: { eq: false } }
          fields: { sourceName: { eq: "posts" } }
        }
      ) {
        edges {
          node {
            fields {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then((results) => {
    if (results.errors) {
      Promise.reject(results.errors)
    }

    createPosts(results.data.posts.edges)

    Promise.resolve(results)
  })

  const pies = graphql(`
    {
      pies: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { sourceName: { eq: "pies" } } }
      ) {
        edges {
          node {
            fields {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then((results) => {
    if (results.errors) {
      Promise.reject(results.errors)
    }

    createPosts(results.data.pies.edges)

    Promise.resolve(results)
  })

  return Promise.all([pages, posts, pies])
}

module.exports = createPages
