FROM node:16 AS ui-build
WORKDIR /usr/src/app
COPY /angular ./angular
RUN cd angular && npm install @angular/cli && npm install && npm run build

FROM node:16 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/angular/dist ./angular/dist
COPY /server ./server
RUN cd server && npm install

WORKDIR /root/server

EXPOSE 8080

CMD ["node", "server.js"]