# --- Stage 1: generate static Nuxt site ---
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Public runtime values are baked in at generate time.
# Leave NUXT_PUBLIC_API_URL empty for same-origin /quote via nginx.
ARG NUXT_PUBLIC_SITE_URL=https://frontierprojects.net
ARG NUXT_PUBLIC_COMPANY_NAME=Frontier Projects
ARG NUXT_PUBLIC_CONTACT_EMAIL=contact@frontierprojects.net
ARG NUXT_PUBLIC_PHONE=+923359571564
ARG NUXT_PUBLIC_API_URL=
ARG NUXT_PUBLIC_WHATSAPP_NUMBER=923055443110
ARG NUXT_PUBLIC_WHATSAPP_MESSAGE=Hi, I'd like a quote for...
ARG NUXT_PUBLIC_OFFICE_ADDRESS=Blue Area, Islamabad, Pakistan
ARG NUXT_PUBLIC_MAP_EMBED_URL=https://maps.google.com/maps?q=Blue%20Area%2C%20Islamabad%2C%20Pakistan&z=14&output=embed
ARG NUXT_PUBLIC_SOCIAL_FACEBOOK=https://www.facebook.com/profile.php?id=61593094692015
ARG NUXT_PUBLIC_SOCIAL_INSTAGRAM=https://www.instagram.com/frontier.projects/
ARG NUXT_PUBLIC_SOCIAL_TIKTOK=https://www.tiktok.com/@frontierprojects

ENV NUXT_PUBLIC_SITE_URL=$NUXT_PUBLIC_SITE_URL \
    NUXT_PUBLIC_COMPANY_NAME=$NUXT_PUBLIC_COMPANY_NAME \
    NUXT_PUBLIC_CONTACT_EMAIL=$NUXT_PUBLIC_CONTACT_EMAIL \
    NUXT_PUBLIC_PHONE=$NUXT_PUBLIC_PHONE \
    NUXT_PUBLIC_API_URL=$NUXT_PUBLIC_API_URL \
    NUXT_PUBLIC_WHATSAPP_NUMBER=$NUXT_PUBLIC_WHATSAPP_NUMBER \
    NUXT_PUBLIC_WHATSAPP_MESSAGE=$NUXT_PUBLIC_WHATSAPP_MESSAGE \
    NUXT_PUBLIC_OFFICE_ADDRESS=$NUXT_PUBLIC_OFFICE_ADDRESS \
    NUXT_PUBLIC_MAP_EMBED_URL=$NUXT_PUBLIC_MAP_EMBED_URL \
    NUXT_PUBLIC_SOCIAL_FACEBOOK=$NUXT_PUBLIC_SOCIAL_FACEBOOK \
    NUXT_PUBLIC_SOCIAL_INSTAGRAM=$NUXT_PUBLIC_SOCIAL_INSTAGRAM \
    NUXT_PUBLIC_SOCIAL_TIKTOK=$NUXT_PUBLIC_SOCIAL_TIKTOK \
    NUXT_TELEMETRY_DISABLED=1

RUN npm run generate

# --- Stage 2: nginx serves static files and proxies quote API ---
FROM nginx:1.27-alpine AS web

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.output/public /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
