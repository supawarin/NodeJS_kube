# NodeJS_kube
 nodeJS hello world app on kubernetes use Dockerfile
 
## 1. Create folder app in your project 

## 2. cd app and run command line : 
 
      npm init -y && npm i express
      
  Will have package.json + package-lock.json and node_modules file in your app
      
## 3. Create index.js file


  <img width="816" alt="js1" src="https://user-images.githubusercontent.com/83863431/201609013-d08c6538-1772-4254-aa79-bdacfcedd7f4.png">


## 4. Create Dockerfile and run docker build -t [ 'your name image' ] .  example: docker build -t node/helloworld .


   <img width="407" alt="js2" src="https://user-images.githubusercontent.com/83863431/201609509-ef3e452e-8149-423b-a9b4-e5b044081d27.png">


## 5. cd .. and create kubernetes.yaml



        
   <img width="675" alt="js3" src="https://user-images.githubusercontent.com/83863431/201610598-359b61da-ab6d-46aa-a470-714f1434b63d.png">


## 6. Run command kubectl apply -f kubernetes.yaml
        deployment and service created
        
## 7. Check pods and service are running 


        kubectl get pods
        
        kubectl get svc  or kubectl get service
        
        
   <img width="536" alt="js4" src="https://user-images.githubusercontent.com/83863431/201611605-5f67b142-0ff7-452b-bb07-5131612492f0.png">


## 8. Open on localhost use node port number  example :  http://localhost:30968


        
  <img width="805" alt="js5" src="https://user-images.githubusercontent.com/83863431/201612546-87aaf83f-f27b-4f19-94a1-09c4549c5898.png">
        
        
     Your app run on kubernetes =  Hello world !

        
