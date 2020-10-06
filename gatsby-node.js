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
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
      archive: Boolean @defaultFalse
    }
  `)
}

// Throw something if we mis-handle a rejection.
const Promise = require(`bluebird`)

Promise.onPossiblyUnhandledRejection((error) => {
  throw error
})
