FROM node

WORKDIR /express-app

ENV PORT 5000

COPY package.json /express-app/package.json

RUN npm install

COPY . /express-app

CMD npm start
