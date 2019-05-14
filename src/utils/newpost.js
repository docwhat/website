/* eslint-disable no-console */
const chalk = require(`chalk`)
const inquirer = require(`inquirer`)
const uuidv4 = require(`uuid/v4`)
const _ = require(`lodash`)
const fs = require(`fs`)
const yaml = require(`js-yaml`)

inquirer.registerPrompt(`datetime`, require(`inquirer-datepicker-prompt`))

const normalizeSlug = slug =>
  slug
    .trim()
    .replace(/\W+/g, `-`)
    .replace(/^-+|-+$/g, ``)
    .toLowerCase()

inquirer
  .prompt([
    {
      type: `input`,
      name: `title`,
      message: `Title? `,
    },
    {
      type: `datetime`,
      name: `date`,
      message: `Post date? `,
      format: ['yyyy', '-', 'mm', '-', 'dd'],
    },
    {
      type: `input`,
      name: `slug`,
      message: `Slug? `,
      default: answers => normalizeSlug(answers.title),
    },
  ])
  .then(answers => {
    const frontmatter = _.clone(answers)
    frontmatter.id = uuidv4()
    frontmatter.draft = true
    frontmatter.date = answers.date.toISOString().split('T')[0]

    const directory = `content/posts/${frontmatter.slug}`
    const filepath = `${directory}/index.md`
    const contents = `---\n${yaml.safeDump(frontmatter)}---\n\nText goes here`

    console.log(
      `\nWriting to ${chalk.cyan(filepath)}:\n${chalk.yellow(contents)}\n`
    )

    inquirer
      .prompt([{ type: `confirm`, name: `go`, message: `Create? ` }])
      .then(confirm => {
        if (confirm.go) {
          fs.mkdirSync(directory)
          fs.writeFileSync(filepath, contents)
          console.log(chalk.blue(`Done!`))
        } else {
          console.log(chalk.red(`Aborted`))
        }
      })
  })
