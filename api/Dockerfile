FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 8080
EXPOSE 9000

#CMD [ "node", "server.js" ]

CMD nodemon -L --watch . index.js