FROM node:alpine as base
WORKDIR /service

FROM base as dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production true

FROM dependencies as build
RUN yarn --frozen-lockfile --production false
COPY ./src ./src/
COPY tsconfig.json .babelrc ./
RUN yarn build

FROM base as release
COPY --from=dependencies /service/node_modules ./node_modules
COPY --from=dependencies /service/package.json ./package.json
COPY --from=build /service/dist ./dist

ENV NODE_ENV=production

CMD [ "node", "dist/index.js" ]