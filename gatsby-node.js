// @flow
// @format
const Promise = require(`bluebird`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const replacePath = _path =>
  _path === `/` ? _path : _path.replace(/\/$/, ``)

const calculateDefaults = (node, getNode) => {
  const defaultSlug = createFilePath({ node, getNode })
  const isPostShaped = defaultSlug.match(
    /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
  )
  const isPiShaped = defaultSlug.match(
    /^\/pi\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
  )

  if (isPostShaped) {
    const [, defaultDate, defaultTitle] = isPostShaped
    return [defaultSlug, defaultTitle, defaultDate]
  }

  if (isPiShaped) {
    const [, defaultDate, defaultTitle] = isPiShaped
    return [`/pi/${defaultTitle}`, defaultTitle, defaultDate]
  }

  const [, defaultTitle] = defaultSlug.match(/^\/(.*)\/$/)
  const defaultDate = `1972-12-14`
  return [defaultSlug, defaultTitle, defaultDate]
}

const postWalker = (createPage, posts) => {
  const postTemplate = path.resolve(`./src/templates/post.js`)

  // Create pages for each Markdown file.
  posts.forEach(({ node }, index) => {
    const newer = index === 0 ? false : posts[index - 1].node
    const older = index === posts.length - 1 ? false : posts[index + 1].node

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

const pageWalker = (createPage, pages) => {
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    try {
      if (node.frontmatter.template === `comment`) {
        // comments don't get pages.
        createNodeField({ node, name: `template`, value: `comment` })
        createNodeField({
          node,
          name: `slug`,
          value: replacePath(node.frontmatter.slug),
        })
      } else {
        // posts, pies, and pages.
        const [defaultSlug, defaultTitle, defaultDate] = calculateDefaults(
          node,
          getNode
        )

        const slug = replacePath(node.frontmatter.slug || defaultSlug)
        const date = node.frontmatter.date || defaultDate
        const title = node.frontmatter.title || defaultTitle
        const template = node.frontmatter.template || `post`

        createNodeField({ node, name: `slug`, value: slug })
        createNodeField({ node, name: `date`, value: date })
        createNodeField({ node, name: `title`, value: title })
        createNodeField({ node, name: `template`, value: template })
      }
    } catch (ex) {
      console.error(`Error onCreateNode():`, node.fileAbsolutePath, `\n`, ex) // eslint-disable-line no-console
      throw ex
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          pages: allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
            filter: {
              fields: { template: { eq: "page" } }
              frontmatter: { test: { ne: true } }
            }
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
            sort: { fields: [fields___date], order: DESC }
            filter: {
              fields: { template: { eq: "post" } }
              frontmatter: { test: { ne: true } }
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
          pies: allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
            filter: {
              fields: { template: { eq: "post" } }
              frontmatter: { test: { eq: true } }
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
      `
    ).then(graphqlResults => {
      if (graphqlResults.errors) {
        reject(graphqlResults.errors)
      }

      const posts = graphqlResults.data.posts.edges
      const pies = graphqlResults.data.pies.edges
      const pages = graphqlResults.data.pages.edges

      postWalker(createPage, posts)
      postWalker(createPage, pies)

      pageWalker(createPage, pages)
      resolve()
    })
  })
}
