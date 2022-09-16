ARG PORT=3001

# development
FROM node:16

ENV PORT ${PORT}
EXPOSE ${PORT}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "app/index.js"]