ARG NODE_VERSION=8

FROM node:$NODE_VERSION  AS node
FROM nginx:stable-alpine AS nginx

#############################
FROM node AS builder
RUN apt-get -qq update \
      && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
      pigz \
      && apt-get clean \
      && rm -rf /var/lib/apt/lists/*
RUN mkdir /workdir
WORKDIR /workdir
COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile

# keep these in sync with .dockerignore
# don't include nginx.conf.
COPY ./static/   ./static/
COPY ./src/      ./src/
COPY ./comments/ ./comments/
COPY ./posts/    ./posts/
COPY ./pi/       ./pi/
COPY \
  ./package.json \
  ./yarn.lock \
  ./gatsby* \
  ./.eslint* \
  ./.flow* \
  ./.mdl* \
  ./.prettier* \
  ./

###################
FROM builder AS lint
RUN yarn run lint

###################
FROM lint AS build
ENV NODE_ENV production
ARG SITE_COMMIT="no commit"
ARG SITE_VERSION="master"
RUN yarn run build

###################
FROM build AS compress
RUN find public -type f \
      \( \
      -name '*.css' -o \
      -name '*.html' -o \
      -name '*.js' -o \
      -name '*.json' -o \
      -name '*.map' -o \
      -name '*.svg' -o \
      -name '*.txt' -o \
      -name '*.xml' \
      \) -print0 | xargs -0 pigz -11 --keep

#################################
FROM nginx AS final

LABEL maintainer="Christian Höltje <https://docwhat.org>" \
  org.label-schema.name="Website for docwhat.org" \
  org.label-schema.url="https://docwhat.org/" \
  org.label-schema.schema-version="1.0"

COPY --from=compress /workdir/public/ /html
COPY nginx.conf /etc/nginx/nginx.conf
