FROM node:lts-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm ci --prefer-offline --no-audit

COPY . ./
RUN npm run generate

FROM nginx:alpine
COPY --from=builder /app/dist/ /var/www
RUN rm /etc/nginx/conf.d/default.conf
COPY .env.ci /.env
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
