FROM node:21-alpine
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --include=optional

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
