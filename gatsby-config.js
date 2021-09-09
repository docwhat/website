// @format

const process = require('process')
const path = require('path')

// In dev mode, environment variables can only be gotten here:
const siteUrl = 'https://docwhat.org'
const siteVersion = process.env.SITE_VERSION || 'unknown'
const siteCommit = process.env.SITE_COMMIT || 'unknown'
const nodeEnv = process.env.NODE_ENV || 'development'

const {
  authorName,
  siteDescription,
  siteTitle,
  sourceUrl,
  twitterUsername,
  githubUsername,
} = require(`./src/utils/constants.js`)

module.exports = {
  siteMetadata: {
    title: siteTitle,
    titleTemplate: '%s · docwhat',
    author: authorName,
    description: siteDescription,
    siteUrl,
    url: siteUrl,
    version: siteVersion,
    commit: siteCommit,
    node_env: nodeEnv,
    sourceUrl,
    image: '/favicon.png',
    twitterUsername: twitterUsername,
    githubUsername: githubUsername,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-4714126-2`,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `/content/posts`),
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, '/src/pages'),
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'content/pi'),
        name: `pies`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              linkImagesToOriginal: true,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {},
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-emoji`,
          `gatsby-remark-smartypants`,
          'gatsby-remark-source-name',
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: null,
              rel: `noopener`,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            // This must go before prismjs.
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              classPrefix: `language-`,
              directory: path.join(__dirname, 'content/embed'),
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: `›`, // option-shift-4
              aliases: {
                elisp: `scheme`,
                js: `javascript`,
                lisp: `scheme`,
                sh: `bash`,
                terminal: `bash`,
                viml: `vim`,
                zsh: `bash`,
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: siteUrl,
        noTrailingSlash: true,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
            {
              site { siteMetadata { siteUrl } }
              allSitePage: allMarkdownRemark(
                limit: 100000,
                sort: { order: DESC, fields: [fields___date] },
                filter: {
                  fields: {
                    sourceName: { in: ["pages", "posts"] }
                  }
                  frontmatter: {
                    test: { ne: true }
                    draft: { eq: false }
                    archive: { eq: false }
                  }
                }
              ) {
                edges {
                  node {
                    path: fileAbsolutePath
                    fields {
                      slug
                      created: date(formatString: "YYYY-MM-DD")
                      lastmod: update_date(formatString: "YYYY-MM-DD")
                    }
                    frontmatter {
                      changefreq
                      priority
                    }
                  }
                }
              }
            }
          `,
        serialize: ({ allSitePage }) =>
          allSitePage.edges
            .map((edge) => ({
              url: siteUrl + edge.node.fields.slug,
              changefreq: edge.node.frontmatter.changefreq || `weekly`,
              priority: parseFloat(edge.node.frontmatter.priority) || 0.5,
              lastmod:
                edge.node.fields.lastmod || edge.node.fields.created || null,
            }))
            .filter((item) => item.priority >= 0.0)
            .concat([
              // TODO: I don't know how to get "frontmatter" from .js
              {
                url: `${siteUrl}/`,
                changefreq: `daily`,
                priority: 0.8,
              },
              {
                url: `${siteUrl}/all`,
                changefreq: `daily`,
                priority: 0.4,
              },
              {
                url: `${siteUrl}/email`,
                changefreq: `yearly`,
                priority: 0.1,
              },
            ]),
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        icon: true,
      },
    },
  ],
}
