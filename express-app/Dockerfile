FROM node

WORKDIR /express-app

ENV PORT 5000

COPY package.json /express-app/package.json

RUN npm install -g npm@latest

RUN npm install --omit=dev

COPY . /express-app

CMD NODE_ENV=production node bin/www
