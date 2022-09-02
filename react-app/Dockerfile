FROM node

WORKDIR /react-app

ENV PORT 3000

COPY package.json /react-app/package.json

COPY . /react-app

RUN npm install -g npm@latest

RUN npm install --omit=dev

RUN npm run build
    
RUN npm install -g serve

CMD serve -s build
