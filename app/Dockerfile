FROM node:19-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY index.js /app/
EXPOSE 3000
CMD ["node", "index.js"]


# FROM alpine
# RUN apk add --update nodejs npm
# WORKDIR /app
# COPY package.json index.js /app/
# RUN npm install
# EXPOSE 3000
# CMD ["node", "index.js"]