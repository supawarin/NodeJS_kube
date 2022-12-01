cd app
npm init -y && npm i express
npm install bcrypt cookie-session ejs express-validator mysql2 nodemon
docker build -t node-alpine/helloworld .
docker tag node-alpine/helloworld 127.0.0.1:5100/node-alpine
docker push 127.0.0.1:5100/node-alpine

# npm run dev

<!---------create table----------->

CREATE TABLE users (
      id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
      name varchar(50) NOT NULL,
      email varchar(50) NOT NULL UNIQUE KEY,
      password varchar(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;