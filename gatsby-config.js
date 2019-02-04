// @format

const process = require('process')

const {
  authorName,
  siteDescription,
  siteTitle,
  siteUrl,
  sourceUrl,
} = require(`./src/utils/constants.js`)

module.exports = {
  siteMetadata: {
    title: siteTitle,
    author: authorName,
    description: siteDescription,
    siteUrl,
    version: process.env.SITE_VERSION, // This can only be calculated here in dev mode.
    commit: process.env.SITE_COMMIT, // This can only be calculated here in dev mode.
    sourceUrl,
  },
  plugins: [
    'gatsby-plugin-flow',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/comments`,
        name: `comments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pi`,
        name: `pies`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // // Commented due to bug
        // // https://github.com/gatsbyjs/gatsby/issues/4459
        // excerpt_separator: `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // maxWidth: 590,
              linkImagesToOriginal: true,
              backgroundColor: `white`,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-emoji`,
          `gatsby-remark-abbr`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          {
            // This must go before prismjs.
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              classPrefix: `language-`,
              directory: `${__dirname}/src/examples/`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-4714126-2`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
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
                  fields: { sourceName: { in: ["pages", "posts"] } }
                  frontmatter: {
                    test: { ne: true }
                  }
                }
              ) {
                edges {
                  node {
                    path: fileAbsolutePath
                    fields { slug }
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
            .map(edge => ({
              url: siteUrl + edge.node.fields.slug,
              changefreq: edge.node.frontmatter.changefreq || `weekly`,
              priority: parseFloat(edge.node.frontmatter.priority) || 0.5,
            }))
            .filter(item => item.priority >= 0.0)
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
