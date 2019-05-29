FROM node:8

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./app ./app

EXPOSE 4000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]