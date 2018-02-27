#############################
FROM node:8-wheezy AS builder
RUN mkdir /workdir
WORKDIR /workdir
COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile
COPY ./ ./

###################
FROM builder AS lint
RUN yarn run lint

###################
FROM builder AS build
RUN yarn run build

#################################
FROM nginx:stable-alpine AS final
COPY --from=build /workdir/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /workdir/public/ /usr/share/nginx/html/
