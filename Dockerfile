# syntax = docker/dockerfile:1-experimental

ARG NODE_VERSION=10

FROM node:$NODE_VERSION     AS node
FROM nginx:stable-alpine    AS nginx

#############################
FROM node AS buildenv
RUN mkdir /workdir
WORKDIR /workdir

COPY package.json yarn.lock .snyk ./
RUN --mount=type=cache,id=docwhat-yarn,target=/usr/local/share/.cache/yarn \
  yarn install --frozen-lockfile
COPY ./ ./

FROM buildenv AS setup
RUN yarn run setup

###################
FROM setup AS lint
RUN yarn run lint

###################
FROM setup AS build
RUN yarn run build

###################
FROM node AS compress
RUN rm -f /etc/apt/apt.conf.d/docker-clean; echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
RUN \
  --mount=type=cache,target=/var/cache/apt \
  --mount=type=cache,target=/var/lib/apt \
  apt update && \
  apt upgrade -y && \
  apt install --no-install-recommends -y pigz
RUN mkdir /workdir
WORKDIR /workdir

COPY package.json ./
COPY script/ ./script/
COPY --from=build /workdir/public/ ./public/

RUN yarn run compress

#################################
FROM nginx AS final

LABEL maintainer="Christian Höltje <https://docwhat.org>" \
  org.opencontainers.image.title="Website for docwhat.org" \
  org.opencontainers.image.url="https://docwhat.org/" \
  org.opencontainers.image.schema-version="1.0"

HEALTHCHECK --interval=5m --timeout=5s CMD wget http://localhost/nginx-health -q -O - > /dev/null 2>&1

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=lint /workdir/package.json /etc/docwhat.json
COPY --from=compress /workdir/public/ /html/
