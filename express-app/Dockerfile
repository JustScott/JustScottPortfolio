FROM node

WORKDIR /code

ENV PORT 3000

copy package.json /code/package.json

RUN npm install

COPY . /code

CMD ["npm","start"]
