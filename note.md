cd app
npm init -y && npm i express
docker build -t node-alpine/helloworld .
docker tag node-alpine/helloworld 127.0.0.1:5100/node-alpine
docker push 127.0.0.1:5100/node-alpine