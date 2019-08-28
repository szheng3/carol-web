git pull
npm install
npm run build
docker rm carol-angular-app -f | true
docker rmi carol-angular-app | true
docker build -t carol-angular-app --cache-from carol-angular-app:latest .
docker run --rm -d --name carol-angular-app -p 2223:80 carol-angular-app
