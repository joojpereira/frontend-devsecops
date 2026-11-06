FROM nginxinc/nginx-unprivileged:alpine

# Atualiza os pacotes do Alpine para pegar as correções de segurança
USER root
RUN apk upgrade --no-cache
USER 101

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css foto.jpg /usr/share/nginx/html/
COPY src/ /usr/share/nginx/html/src/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://127.0.0.1:8080/ || exit 1