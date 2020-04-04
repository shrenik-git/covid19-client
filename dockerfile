### STAGE 1: Build ###

# label stage: 'builder'
FROM node:13.12.0-alpine3.10 as builder

RUN apk add g++ make python

WORKDIR /app

COPY package*.json /app/

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

#RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

#WORKDIR /ng-app

RUN npm ci

COPY ./ /app/

ARG configuration=production

## Build the angular app in production mode and store the artifactes in dist folder

#RUN npm run ng build -- --prod --output-path=dist
RUN npm run build -- --output-path=./dist/out --configuration $configuration

### STAGE 2: Setup ###

FROM nginx:1.17.9-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist/out /usr/share/nginx/html

#CMD ["nginx", "-g", "daemon off;"]
