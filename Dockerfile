# # Stage 1: Builder
# FROM node:18-alpine as builder

# WORKDIR /app

# ARG NEXT_PUBLIC_BASE_API
# ARG UPSTASH_VECTOR_REST_URL
# ARG UPSTASH_VECTOR_REST_TOKEN
# ARG OPENAI_API_KEY
# ARG UPSTASH_REDIS_REST_URL
# ARG UPSTASH_REDIS_REST_TOKEN

# ENV NEXT_PUBLIC_BASE_API=$NEXT_PUBLIC_BASE_API
# ENV UPSTASH_VECTOR_REST_URL=$UPSTASH_VECTOR_REST_URL
# ENV UPSTASH_VECTOR_REST_TOKEN=$UPSTASH_VECTOR_REST_TOKEN
# ENV OPENAI_API_KEY=$OPENAI_API_KEY
# ENV UPSTASH_REDIS_REST_URL=$UPSTASH_REDIS_REST_URL
# ENV UPSTASH_REDIS_REST_TOKEN=$UPSTASH_REDIS_REST_TOKEN

# COPY package.json package-lock.json ./
# RUN  npm ci -f
# COPY . .
# RUN npm run build


# EXPOSE 3000

# ENTRYPOINT ["npm", "start"]



#=====================================================================
# Stage 1: Builder
FROM node:18-alpine as builder

WORKDIR /app

# Only copy package files first for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i --force

# Copy the rest of the application code
COPY . .

ENV NODE_ENV=production

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine as production

WORKDIR /app

# Copy only the built application and necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json  
COPY --from=builder /app/package-lock.json ./package-lock.json  
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

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


ENV NODE_ENV=production

# Expose the necessary port
EXPOSE 3000

# Use a more optimized command for production
CMD ["npx", "next", "start"]
