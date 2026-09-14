# syntax=docker/dockerfile:1

# ---------- Build: compile the Vite app ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install from the lockfile so the build is reproducible
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime: serve the static build with nginx on port 80 ----------
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
