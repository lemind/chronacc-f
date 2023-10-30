FROM --platform=linux/amd64 node:18-alpine as base
ENV YARN_CACHE_FOLDER=/yc
WORKDIR /app
COPY package.json yarn.lock ./

FROM base as deps
RUN --mount=type=cache,id=yarn,target=/yc yarn install --frozen-lockfile --production

FROM deps as dist
RUN --mount=type=cache,id=yarn,target=/yc yarn install --frozen-lockfile
COPY . .
RUN ./node_modules/@nestjs/cli/bin/nest.js build


FROM base as app
ENV APP_ENV=prod

COPY --from=deps /app/node_modules ./node_modules
COPY --from=dist /app/dist/src ./src

EXPOSE 3001
CMD node src/main.js
