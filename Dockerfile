FROM nginx:stable-alpine AS nginx

#################################
FROM nginx AS final

LABEL maintainer="Christian Höltje <https://docwhat.org>" \
  org.opencontainers.image.title="Website for docwhat.org" \
  org.opencontainers.image.url="https://docwhat.org/" \
  org.opencontainers.image.schema-version="1.0"

HEALTHCHECK --interval=5m --timeout=5s CMD wget http://localhost/nginx-health -q -O - > /dev/null 2>&1

COPY /public/ /html/
COPY nginx.conf /etc/nginx/nginx.conf
