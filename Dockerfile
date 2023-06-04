# FROM node:16-alpine as builder

# WORKDIR /usr/src/app

# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# COPY package.json /usr/src/app/package.json
# RUN npm install -g npm@9.1.1
# RUN npm i @fullcalendar/angular --legacy-peer-deps

# RUN npm install -g @angular/cli@9.1.12


# RUN npm install --legacy-peer-deps

# #RUN npm audit fix

# COPY . .
# RUN ng build --prod
# RUN ng build --configuration production

FROM nginx:1.19.3
# FROM nginx:alpine
RUN rm -f /etc/nginx/nginx.conf
ADD ./dist/sim-college-classroom /usr/share/nginx/html
COPY ./docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
