// @format
'use strict'

exports.createPages = require('./gatsby/create-pages')
exports.onCreateNode = require('./gatsby/on-create-node')
exports.onPostBuild = require('./gatsby/on-post-build')

// Throw something if we mis-handle a rejection.
const Promise = require(`bluebird`)

Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
