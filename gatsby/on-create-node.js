// @format

const pathlib = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const onCreateNode = async ({ node, actions, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) {
    return {}
  }

  const isProduction = process.env.NODE_ENV === 'production'

  const { createNodeField } = actions
  const sourceName = node.fields.sourceName

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
    createNodeField({
      node,
      name: `hide`,
      value: isProduction && (archived || draft),
    })
  }
  if (sourceName !== 'pages') {
    createNodeField({
      node,
      name: `date`,
      value: calculateDate(node, getNode),
    })
  }

  return node
}

const calculateTitle = (node, getNode) => {
  if (node.frontmatter.title) {
    return node.frontmatter.title
  }

  const relPath = createFilePath({
    node,
    getNode,
    basePath: `content/${node.fields.sourceName}`,
  })

  const protoTitle = relPath
    .replace(/.*\/([^/]+)\/?$/, '$1')
    .replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '')
    .replace(/-+/g, ' ')
    .replace(
      /^\w.*/,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )

  return protoTitle
}

/**
 * Calculates the date for a post based on frontmatter and filename.
 */
const calculateDate = (node, getNode) => {
  if (node.frontmatter.date) {
    return node.frontmatter.date
  }

  const relPath = createFilePath({
    node,
    getNode,
    basePath: `content/${node.fields.sourceName}`,
  })

  const hasDateInPath = relPath.match(/^\/?([\d]{4}-[\d]{2}-[\d]{2})/)
  if (hasDateInPath) {
    return hasDateInPath[1]
  }

  throw new Error(`Unable to get date for ${relPath}`)
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
    return `/pi${baseSlug.replace(/^\/pi\//, '/')}`
  }

  return baseSlug
}
const replacePath = _path =>
  _path === `/` ? _path : `/${_path.replace(/^\/|\/$/, '')}`

module.exports = onCreateNode
