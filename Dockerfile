FROM node:21
ENV NODE_OPTIONS="--max_old_space_size=4096"
WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3002
CMD ["node", "start"]
