FROM node:10.1.0-alpine

COPY . /root/.node-red/node-red-contrib-intelup
WORKDIR /root/.node-red/

RUN apk update

RUN npm install -g --unsafe-perm node-red
RUN npm install ./node-red-contrib-intelup

ENTRYPOINT node-red

EXPOSE 1880
