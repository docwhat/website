workflow "Build, Test & Publish" {
  on = "push"
  resolves = ["Lint"]
}

action "master only" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Lint" {
  uses = "Borales/actions-yarn@master"
  needs = ["master only"]
  args = "lint"
  env = {
    GATSBY_URL = "https://next.docwhat.org/"
  }
}
