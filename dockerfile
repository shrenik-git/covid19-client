### STAGE 1: Build ###

# label stage: 'builder'
FROM node:13.12

COPY . .

## Build the angular app in production mode and store the artifactes in dist folder

RUN npm run ng build -- --prod --output-path=dist

### STAGE 2: Setup ###

FROM nginx:1.17.9-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
