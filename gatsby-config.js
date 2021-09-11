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
              prompt: {
                user: 'docwhat',
                host: 'tardis',
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
  allSitePage: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    filter: {
      fields: { sourceName: { in: ["pages", "posts"] } }
      frontmatter: {
        test: { ne: true }
        draft: { ne: true }
        archive: { ne: true }
      }
    }
  ) {
    nodes {
      path: fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        changefreq
        priority
      }
    }
  }
}
          `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage }) =>
          allSitePage.nodes
            .map((node) => ({
              path: node.fields.slug,
              changefreq: node.frontmatter.changefreq || `weekly`,
              priority: parseFloat(node.frontmatter.priority) || 0.5,
            }))
            .filter((page) => page.priority >= 0.0)
            .concat([
              // TODO: I don't know how to get "frontmatter" from .js
              {
                path: `/`,
                changefreq: `daily`,
                priority: 0.8,
              },
              {
                path: `/all`,
                changefreq: `daily`,
                priority: 0.4,
              },
              {
                path: `/email`,
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
  flags: {
    DEV_SSR: true,
  },
}
