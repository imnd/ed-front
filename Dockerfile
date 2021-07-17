FROM node:lts-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci --prefer-offline --no-audit

COPY . ./
RUN npm run generate

FROM nginx:alpine
COPY --from=builder /app/dist/ /var/www
RUN rm /etc/nginx/conf.d/default.conf
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
