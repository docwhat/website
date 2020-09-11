#!/bin/bash

set -euo pipefail

function die() {
  echo "FATAL: $@" 1>&2
  exit 10
}

declare -r docker_image="${docker_image:=docker.pkg.github.com/docwhat/docwhat/blog}"

GITHUB_SHA=${GITHUB_SHA:-$(git rev-parse HEAD)}
tags="${docker_image}:sha-${GITHUB_SHA::8}"
tags="$tags,${docker_image}:latest"
declare -r tags

commit="$(git log -1 --oneline --no-decorate)"
declare -r commit

[ -f .node-version ] || die "Unable to find node version"
node_version="$(cat .node-version)"
declare -r node_version

echo "::set-output name=tags::${tags}"
echo "::set-output name=node_version::${node_version}"
echo "::set-output name=commit::${commit}"
