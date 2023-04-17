###############################
#    BUILD FOR PRODUCTION     #
###############################
FROM node:18-alpine as production
WORKDIR /usr/src/app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
ENV PORT 3000

COPY --chown=nextjs:nextjs package.json .
COPY --chown=nextjs:nextjs yarn.lock .

RUN yarn install --no-cache --ignore-platform

COPY --chown=nextjs:nextjs . .

RUN yarn build

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]