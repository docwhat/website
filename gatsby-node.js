// @flow
// @format
const fs = require(`fs`)
const pify = require(`pify`)
const path = require(`path`)
const Feed = require(`feed`)
const moment = require(`moment`)
const Promise = require(`bluebird`)
const forEach = require(`lodash/forEach`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { siteUrl, authorName, siteTitle } = require(`./src/utils/constants`)

const writeFile = pify(fs.writeFile)

const runQuery = (handler, query) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

const replacePath = _path =>
  _path === `/` ? _path : `/${_path.replace(/^\/|\/$/, '')}`

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
    const newer = index === 0 ? null : posts[index - 1].node
    const older = index === posts.length - 1 ? null : posts[index + 1].node

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

exports.onPostBuild = async ({ graphql }) => {
  const feedQuery = await runQuery(
    graphql,
    `{
      posts: allMarkdownRemark(
        limit: 20
        sort: { fields: [fields___date], order: DESC }
        filter: {
          fields: { template: { eq: "post" } }
          frontmatter: { test: { ne: true } }
        }
      ) {
        edges {
          node {
            html
            fields {
              slug
              title
              date
            }
          }
        }
      }
    }`
  )

  const {
    posts: { edges: data },
  } = feedQuery

  const feed = new Feed({
    title: siteTitle,
    link: siteUrl,
    id: siteUrl,
    feedLinks: {
      atom: `${siteUrl}/atom.xml`,
      json: `${siteUrl}/feed.json`,
    },
    author: {
      name: authorName,
      link: siteUrl,
    },
  })

  forEach(data, ({ node }) => {
    feed.addItem({
      title: node.fields.title,
      id: `${siteUrl}${node.fields.slug}`,
      link: `${siteUrl}${node.fields.slug}`,
      date: moment(node.fields.date).toDate(),
      content: node.html.replace(/\b(href|src)="\//g, `$1="${siteUrl}`),
      author: [
        {
          name: authorName,
          link: siteUrl,
        },
      ],
    })
  })

  const publicPath = `./public/`

  await writeFile(path.join(publicPath, `rss.xml`), feed.rss2(), `utf8`).catch(
    r => {
      // eslint-disable-next-line no-console
      console.error(`Failed to write JSON Feed file: `, r)
    }
  )

  await writeFile(
    path.join(publicPath, `atom.xml`),
    feed.atom1(),
    `utf8`
  ).catch(r => {
    // eslint-disable-next-line no-console
    console.error(`Failed to write JSON Feed file: `, r)
  })

  await writeFile(
    path.join(publicPath, `feed.json`),
    feed.json1(),
    `utf8`
  ).catch(r => {
    // eslint-disable-next-line no-console
    console.error(`Failed to write JSON Feed file: `, r)
  })
}
