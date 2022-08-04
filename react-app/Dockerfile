FROM node

WORKDIR /react-app

ENV PORT 3000

COPY package.json /react-app/package.json

RUN npm install

COPY . /react-app

RUN npm run build
    
RUN npm install -g serve

CMD serve -s build
