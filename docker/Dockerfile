FROM node:18-alpine AS builder

ARG PUBLIC_WEB_APP_URL
ARG PUBLIC_API_URL
ARG PUBLIC_POSTHOG_KEY
ARG PUBLIC_POSTHOG_HOST

ENV NEXT_PUBLIC_WEB_APP_URL=$PUBLIC_WEB_APP_URL
ENV NEXT_PUBLIC_API_URL=$PUBLIC_API_URL
ENV NEXT_PUBLIC_POSTHOG_KEY=$PUBLIC_POSTHOG_KEY
ENV NEXT_PUBLIC_POSTHOG_HOST=$PUBLIC_POSTHOG_HOST

RUN echo "Web App URL: $NEXT_PUBLIC_WEB_APP_URL"
RUN echo "API URL: $NEXT_PUBLIC_API_URL"
RUN echo "Posthog: $NEXT_PUBLIC_POSTHOG_HOST : $NEXT_PUBLIC_POSTHOG_KEY"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Build the app
COPY . .

RUN npm run build


# Stage 2

FROM nginx:1.21-alpine

COPY --from=builder /app/out /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
