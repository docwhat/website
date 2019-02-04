// @format

const fs = require(`fs`)
const pify = require(`pify`)
const pathlib = require(`path`)
const moment = require(`moment`)
const Feed = require(`feed`).Feed
const { siteUrl, authorName, siteTitle } = require(`../src/utils/constants`)

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

const writeFile = pify(fs.writeFile)

const runQuery = (handler, query) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

module.exports = onPostBuild
