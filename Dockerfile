#############################
FROM node:8-wheezy AS builder
RUN apt-get update && apt-get install -y \
      pigz \
      && rm -rf /var/lib/apt/lists/*
RUN mkdir /workdir
WORKDIR /workdir
COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile

# keep this in sync with .dockerignore
COPY ./static   ./static
COPY ./comments ./comments
COPY ./src      ./src
COPY \
  ./package.json \
  ./yarn.lock \
  ./gatsby* \
  ./.babelrc \
  ./.eslintrc.js \
  ./.mdlrc \
  ./.mdlstyle.rb \
  ./.prettierrc \
  ./

###################
FROM builder AS lint
RUN yarn run lint

###################
FROM lint AS build
ENV NODE_ENV production
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
      -name '*.txt' -o \
      -name '*.xml' \
      \) -print0 | xargs -0 pigz -11 --keep
RUN find public -ls

#################################
FROM nginx:stable-alpine AS final
COPY --from=compress /workdir/public/ /html
COPY nginx.conf /etc/nginx/nginx.conf
