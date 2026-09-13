FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY index.js ./

USER app

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3001)+'/health').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "index.js"]
