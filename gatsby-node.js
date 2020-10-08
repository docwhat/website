// @format
'use strict'

exports.createPages = require('./gatsby/create-pages')
exports.onCreateNode = require('./gatsby/on-create-node')
exports.onPostBuild = require('./gatsby/on-post-build')

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
      archive: Boolean @defaultFalse
      banner: Banner
    }
    type MarkdownRemarkFields {
      slug: String
      title: String
      date: Date @dateformat
      editLink: String
      update_date: Date @dateformat
      update_hash: String
    }
    type Banner {
      credits: String
      image: String
      sourceUrl: String
    }
  `)
}

// Throw something if we mis-handle a rejection.
const Promise = require(`bluebird`)

Promise.onPossiblyUnhandledRejection((error) => {
  throw error
})
