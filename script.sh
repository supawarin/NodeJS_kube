cd app
nerdctl build -t node-alpine/helloworld .
nerdctl tag node-alpine/helloworld registry.workstation.co.uk/node-alpine
nerdctl push registry.workstation.co.uk/node-alpine
#docker build -t node-alpine/helloworld .
#docker tag node-alpine/helloworld 127.0.0.1:5100/node-alpine
#docker push 127.0.0.1:5100/node-alpine

# chmod -R 777 ./script.sh