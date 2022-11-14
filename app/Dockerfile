FROM node:19-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY index.js /app/
EXPOSE 3000
CMD ["node", "index.js"]