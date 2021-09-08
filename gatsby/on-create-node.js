// @format

const pathlib = require(`path`)
const childProcess = require(`child_process`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const TopDir = pathlib.dirname(__dirname)

const onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.fileAbsolutePath) {
    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/docwhat/docwhat/edit/master${node.fileAbsolutePath.replace(
        TopDir,
        ''
      )}`,
    })
  }

  if (node.internal.type !== `MarkdownRemark`) {
    return {}
  }

  const parentNode = getNode(node.parent)
  const sourceName = parentNode.sourceInstanceName
  createNodeField({
    node,
    name: `sourceName`,
    value: sourceName,
  })

  const slug = calculateSlug(node, parentNode)

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
    createNodeField({
      node,
      name: `banner`,
      value: _.get(node, 'frontmatter.banner', {}),
    })
  }
  if (sourceName !== 'pages') {
    createNodeField({
      node,
      name: `date`,
      value: calculateDate(node, getNode),
    })
  }
  createNodeField({
    node,
    name: `update_date`,
    value: await calculateUpdatedDate(node.fileAbsolutePath),
  })
  createNodeField({
    node,
    name: `update_hash`,
    value: await calculateUpdatedHash(node.fileAbsolutePath),
  })

  // https://github.com/docwhat/docwhat/commits/2df6346/content/posts/2006-09-06-my-older-projects-have-been-moved.md

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
    trailingslash: false,
  })

  const protoTitle = relPath
    .replace(/.*\/([^/]+)\/?$/, '$1')
    .replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '')
    .replace(/-+/g, ' ')
    .replace(
      /^\w.*/,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
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
    trailingslash: false,
  })

  const hasDateInPath = relPath.match(/^\/?([\d]{4}-[\d]{2}-[\d]{2})/)
  if (hasDateInPath) {
    return hasDateInPath[1]
  }

  throw new Error(`Unable to get date for ${relPath}`)
}

const runAndReturnStdout = (cmd, ...args) =>
  new Promise((resolve, reject) => {
    const command = childProcess.spawn(cmd, ...args)
    let result = ''
    command.stdout.on('data', (data) => {
      result += data.toString()
    })
    command.on('close', (code) => resolve(result))
    command.on('error', (err) => {
      reject(err)
    })
  })

const calculateUpdatedDate = (filePath) =>
  runAndReturnStdout('git', [
    'log',
    '-1',
    '--pretty=format:%aI',
    '--',
    filePath,
  ])

const calculateUpdatedHash = (filePath) =>
  runAndReturnStdout('git', ['log', '-1', '--pretty=format:%h', '--', filePath])

const calculateSlugFromParentPath = (parentNode) => {
  const name = parentNode.name
  const meaningfulName =
    name === 'index' ? pathlib.basename(parentNode.dir) : name

  return meaningfulName
    .replace(/.*\/([^/]+)$/, '$1')
    .replace(/[\d]{4}-[\d]{2}-[\d]{2}-/, '')
}

const calculateSlug = (node, parentNode) => {
  const baseSlug = replacePath(
    node.frontmatter.slug || calculateSlugFromParentPath(parentNode)
  )

  if (node.fields.sourceName === 'pies') {
    return `/pi${baseSlug.replace(/^\/pi\//, '/')}`
  }

  return baseSlug
}

const replacePath = (_path) =>
  _path === `/` ? _path : `/${_path.replace(/^\/|\/$/, '')}`

module.exports = onCreateNode
