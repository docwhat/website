// @format
const fs = require(`fs`)
const pify = require(`pify`)
const pathlib = require(`path`)
const Feed = require(`feed`).Feed
const moment = require(`moment`)
const Promise = require(`bluebird`)
const { siteUrl, authorName, siteTitle } = require(`./src/utils/constants`)
const _ = require(`lodash`)

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

const calculateDate = (node, getNode) => {
  if (node.frontmatter.date) {
    return node.frontmatter.date
  }

  const hasDateInPath = getNode(node.parent).name.match(
    /^([\d]{4}-[\d]{2}-[\d]{2})/
  )
  if (hasDateInPath) {
    return hasDateInPath[1]
  }

  throw new Error(`Unable to get date for ${getNode(node.parent).absolutePath}`)
}

const calculateSlugFromPath = (node, getNode) => {
  const parent = getNode(node.parent)
  const name = parent.name
  const meaningfulName = name === 'index' ? pathlib.basename(parent.dir) : name

  return meaningfulName
    .replace(/.*\/([^/]+)$/, '$1')
    .replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '')
}

const calculateSlug = (node, getNode) => {
  const baseSlug = replacePath(
    node.frontmatter.slug || calculateSlugFromPath(node, getNode)
  )

  if (node.fields.sourceName === 'pies') {
    return `/pi${baseSlug}`
  }

  return baseSlug
}

const calculateTitle = (node, getNode) =>
  node.frontmatter.title ||
  getNode(node.parent)
    .name.replace(/.*\/([^/]+)$/, '$1')
    .replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '')

exports.onCreateNode = ({ node, actions, getNode }) => {
  try {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
      const sourceName = getNode(node.parent).sourceInstanceName

      createNodeField({ node, name: `sourceName`, value: sourceName })
      if (sourceName === `comments`) {
        createNodeField({
          node,
          name: `postSlug`,
          value: replacePath(node.frontmatter.slug),
        })
        return
      }

      const slug = calculateSlug(node, getNode)

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `title`,
        value: calculateTitle(node, getNode),
      })
      if (sourceName === 'posts') {
        const archived =
          _.get(node, 'frontmatter.archive', false) ||
          _.get(node, 'frontmatter.archived', false)
        createNodeField({
          node,
          name: `archived`,
          value: archived,
        })
        const draft = _.get(node, `frontmatter.draft`, false)
        createNodeField({
          node,
          name: `draft`,
          value: draft,
        })
      }
      if (sourceName !== 'pages') {
        createNodeField({
          node,
          name: `date`,
          value: calculateDate(node, getNode),
        })
      }
    }
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.error(`Error onCreateNode():`, node.fileAbsolutePath, `\n`, ex)
    throw ex
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = pathlib.resolve(`./src/templates/page.js`)
  const postTemplate = pathlib.resolve(`./src/templates/post.js`)

  const createPosts = posts => {
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

  const pages = graphql(`
    {
      pages: allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
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
  `).then(results => {
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
        sort: { fields: [fields___date], order: DESC }
        filter: { fields: { sourceName: { eq: "posts" } } }
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
  `).then(results => {
    if (results.errors) {
      Promise.reject(results.errors)
    }

    createPosts(results.data.posts.edges)

    Promise.resolve(results)
  })

  const pies = graphql(`
    {
      pies: allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
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
  `).then(results => {
    if (results.errors) {
      Promise.reject(results.errors)
    }

    createPosts(results.data.pies.edges)

    Promise.resolve(results)
  })

  return Promise.all([pages, posts, pies])
}

exports.onPostBuild = async ({ graphql }) => {
  const results = await runQuery(
    graphql,
    `{
      posts: allMarkdownRemark(
        limit: 20
        sort: { fields: [fields___date], order: DESC }
        filter: {
          fields: {
            sourceName: { eq: "posts" }
            draft: { eq: false }
            archived: { eq: false }
          }
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

  results.posts.edges.forEach(({ node }) => {
    feed.addItem({
      title: node.fields.title,
      id: `${siteUrl}${node.fields.slug}`,
      link: `${siteUrl}${node.fields.slug}`,
      date: moment(node.fields.date).toDate(),
      content: node.html.replace(/\b(href|src)="\//g, `$1="${siteUrl}/`),
      author: [
        {
          name: authorName,
          link: siteUrl,
        },
      ],
    })
  })

  const publicPath = pathlib.resolve(`./public/`)

  const writeFeed = (filename, content) =>
    writeFile(pathlib.join(publicPath, filename), content, `utf8`).catch(r =>
      // eslint-disable-next-line no-console
      console.error(`Failed to write feed '${filename}': `, r)
    )

  return Promise.all([
    writeFeed('rss.xml', feed.rss2()),
    writeFeed('atom.xml', feed.atom1()),
    writeFeed('feed.json', feed.json1()),
  ])
}

Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
