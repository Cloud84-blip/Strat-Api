FROM node:18-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN apk update && apk add curl
RUN yarn
CMD ["yarn", "start:dev"]
EXPOSE 3000

