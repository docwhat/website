// @format
'use strict'

const fs = require(`fs`)
const pify = require(`pify`)
const pathlib = require(`path`)
const moment = require(`moment`)
const Feed = require(`feed`).Feed

const onPostBuild = async ({ graphql }) => {
  const results = await runQuery(
    graphql,
    `{
      site {
        meta: siteMetadata {
          url
          author
          title
          description
        }
      }
      posts: allMarkdownRemark(
        limit: 20
        sort: { fields: [fields___date], order: DESC }
        filter: {
          fields: {
            sourceName: { eq: "posts" }
            hide: { eq: false }
          }
        }
      ) {
        edges {
          node {
            html: excerpt(format: HTML)
            fields {
              slug
              title
              date
              banner {
                image {
                  publicURL
                }
              }
            }
          }
        }
      }
    }`
  )

  const meta = results.site.meta

  const feed = new Feed({
    title: meta.title,
    description: meta.description,
    link: `${meta.url}/`,
    id: `${meta.url}/`,
    language: 'en',
    image: `${meta.url}/favicon.png`,
    favicon: `${meta.url}/favicon.ico`,
    feedLinks: {
      atom: `${meta.url}/feed.atom`,
      json: `${meta.url}/feed.json`,
    },
    author: {
      name: meta.author,
      link: `${meta.url}/`,
    },
  })

  results.posts.edges.forEach(({ node }) => {
    feed.addItem({
      title: node.fields.title,
      id: `${meta.url}${node.fields.slug}`,
      link: `${meta.url}${node.fields.slug}`,
      date: moment(node.fields.date).toDate(),
      content: node.html,
      image: node.fields.banner.image
        ? `${meta.url}${node.fields.banner.image.publicURL}`
        : null,
      author: [
        {
          name: meta.author,
          link: `${meta.url}/`,
        },
      ],
    })
  })

  const publicPath = pathlib.resolve(`./public/`)

  const writeFeed = (filename, content) =>
    writeFile(pathlib.join(publicPath, filename), content, `utf8`).catch((r) =>
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
  handler(query).then((r) => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

module.exports = onPostBuild
