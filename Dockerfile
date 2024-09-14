# Use the official Node.js image as the base image
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Set environment variables
ARG NEXT_PUBLIC_BASE_API
ARG UPSTASH_VECTOR_REST_URL
ARG UPSTASH_VECTOR_REST_TOKEN
ARG OPENAI_API_KEY
ARG UPSTASH_REDIS_REST_URL
ARG UPSTASH_REDIS_REST_TOKEN

ENV NEXT_PUBLIC_BASE_API=$NEXT_PUBLIC_BASE_API
ENV UPSTASH_VECTOR_REST_URL=$UPSTASH_VECTOR_REST_URL
ENV UPSTASH_VECTOR_REST_TOKEN=$UPSTASH_VECTOR_REST_TOKEN
ENV OPENAI_API_KEY=$OPENAI_API_KEY
ENV UPSTASH_REDIS_REST_URL=$UPSTASH_REDIS_REST_URL
ENV UPSTASH_REDIS_REST_TOKEN=$UPSTASH_REDIS_REST_TOKEN


# Build the application
RUN npm run build

# Expose the necessary port
EXPOSE 3000

# Use the production command to start the app
CMD ["npm", "run", "start"]
