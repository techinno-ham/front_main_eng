# Stage 1: Builder
FROM node:18-alpine as builder

WORKDIR /my-space

ARG NEXT_PUBLIC_BASE_API
ENV NEXT_PUBLIC_BASE_API=$NEXT_PUBLIC_BASE_API

COPY package.json package-lock.json ./
RUN  npm ci
COPY . .
RUN npm run build


EXPOSE 3000

ENTRYPOINT ["npm", "start"]
