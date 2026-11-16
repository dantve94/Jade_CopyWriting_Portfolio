# Builds the portfolio and serves it with Caddy.
# Stage 1: build the static site with Eleventy.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Stage 2: serve the built files.
FROM caddy:2.8-alpine
COPY deploy/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/_site /srv
EXPOSE 80
