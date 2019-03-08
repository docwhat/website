FROM nginx:stable-alpine AS nginx

#################################
FROM nginx AS final

LABEL maintainer="Christian Höltje <https://docwhat.org>" \
  org.label-schema.name="Website for docwhat.org" \
  org.label-schema.url="https://docwhat.org/" \
  org.label-schema.schema-version="1.0"

COPY /public/ /html/
COPY nginx.conf /etc/nginx/nginx.conf
