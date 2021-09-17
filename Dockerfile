FROM node:14-alpine as builder

ARG NETWORK

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_ENV=$NETWORK

COPY package*.json yarn.lock /app/
COPY . /app
RUN apk --no-cache add git
RUN yarn --frozen-lockfile
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]