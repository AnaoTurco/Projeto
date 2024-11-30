# Projeto
Projeto de uma APIRestFull de um controle de rotina com o uso do CRUD.
Necessário do NodeJs. instalado e o MongoDB
Necessário instalar no terminal VSCODE --> npm init -y para package.json
Outras instalações no terminal VSCODE --> npm install express mongoose dotenv body-parser cors bcrypt jsonwebtoken
                                          npm install --save-dev nodemon

AtualizAR o package.json para usar o nodemon adicionando o script:

json
Copiar código
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

CRIAR ARQUIVO .env:
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=1234
PORT=5000

Para evitar erros na execução:

Abra o terminal e digite --> pwd
Em seguida...
cd caminho/do/projeto
Insira um ls

Mais sugestões:

Terminal VSCode --> cd task-api
Insira --> ls
Na pasta task-api no terminal --> npm run dev

No terminal --> pwd 
Depois --> cd C:\Users\Ecliton\Downloads\Projeto\task-api
npm install --> Caso n tenha instalado as dependências do projeto
Novamente --> npm run dev

http://localhost:5000/api/users
http://localhost:5000/api/tasks







