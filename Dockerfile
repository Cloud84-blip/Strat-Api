FROM node:18-alpine
ENV NODE_ENV development
WORKDIR /app
RUN apk update && apk add curl
COPY . /app
COPY package.json nest-cli.json yarn.lock docker-compose.yml ./
RUN yarn
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000

