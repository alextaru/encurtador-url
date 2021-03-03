# encurtador-url
API para encurtar URL

## Requerimentos
[NodeJs](https://nodejs.org/en/)
[Docker](https://www.docker.com/)

## Instalação
```npm install```
## Executar API 
### Ambiente local
execute os comandos abaixo em um terminal na pasta raiz do projeto
* ```npm run docker:database```
* ```echo "CREATE DATABASE encurtador_url ENCODING 'UTF-8';" | docker exec -i postgres psql -U postgres```
* ```npm start```

## Teste
```npm run test```