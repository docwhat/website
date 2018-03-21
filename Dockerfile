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
COPY ./examples ./examples
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
RUN pigz -11 --recursive --keep public

#################################
FROM nginx:stable-alpine AS final
COPY --from=build /workdir/public/ /html
COPY nginx.conf /etc/nginx/nginx.conf
