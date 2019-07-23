action "on `master`" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
  needs = ["on `master`"]
}

action "Lint" {
  uses = "Borales/actions-yarn@master"
  needs = ["Install"]
  args = "lint"
}

action "Build" {
  uses = "Borales/actions-yarn@master"
  needs = ["Install"]
  args = "docker:build"
  env = {
    GATSBY_URL = "https://next.docwhat.org/"
    GATSBY_ENV = "staging"
  }
}
