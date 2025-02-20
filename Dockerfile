FROM node:21-alpine
WORKDIR /app

RUN npm init
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
