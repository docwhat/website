// @format
'use strict'

const fs = require(`fs`)
const pify = require(`pify`)
const pathlib = require(`path`)
const moment = require(`moment`)
const Feed = require(`feed`).Feed
const {
  siteUrl,
  authorName,
  siteTitle,
  siteDescription,
} = require(`../src/utils/constants`)

const onPostBuild = async ({ graphql }) => {
  const results = await runQuery(
    graphql,
    `{
      posts: allMarkdownRemark(
        limit: 20
        sort: { fields: [fields___date], order: DESC }
        filter: {
          fields: {
            sourceName: { eq: "posts" }
            hide: { eq: true }
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
    description: siteDescription,
    link: siteUrl,
    id: siteUrl,
    language: 'en',
    image: `${siteUrl}/favicon.png`,
    favicon: `${siteUrl}/favicon.ico`,
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
    writeFeed('feed.rss', feed.rss2()),
    writeFeed('feed.atom', feed.atom1()),
    writeFeed('feed.json', feed.json1()),
  ])
}

const writeFile = pify(fs.writeFile)

const runQuery = (handler, query) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

module.exports = onPostBuild
