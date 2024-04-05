FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY docker_env/backend.env ./

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]