FROM nginx:stable-alpine AS nginx

#################################
FROM nginx AS final

LABEL maintainer="Christian Höltje <https://docwhat.org>" \
  org.label-schema.name="Website for docwhat.org" \
  org.label-schema.url="https://docwhat.org/" \
  org.label-schema.schema-version="1.0"

HEALTHCHECK --interval=5m --timeout=5s CMD wget http://localhost/nginx-health -q -O - > /dev/null 2>&1

COPY /public/ /html/
COPY nginx.conf /etc/nginx/nginx.conf
