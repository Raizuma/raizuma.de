FROM node:21
ENV NODE_OPTIONS="--max_old_space_size=4096"
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --include=optional

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
