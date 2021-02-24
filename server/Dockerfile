FROM node:15-alpine

RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node/

WORKDIR /home/node/

COPY package*.json ./

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "npm", "start" ]