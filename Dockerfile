FROM node:latest
WORKDIR /Quiz-app-using-MERN-stack/Backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]