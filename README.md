# Controle de atividades - Node.js + Express + EJS

Aplicacao web full stack desenvolvida como AC na FIAP. Permite registrar e autenticar usuarios e manter um cadastro de atividades, com views renderizadas no servidor e dados persistidos no MongoDB.

## Tecnologias

Node.js, Express, EJS, Mongoose e MongoDB Atlas.

## Estrutura

As rotas ficam em `routes` (`index.js`, `login.js`, `registro.js` e `atividades.js`), os modelos Mongoose em `models` (`usuarios.js` e `atividades.js`), as telas em `views` (`index`, `login`, `registro`, `atividades` e `alterar`) e a configuracao de servidor e banco em `config`.

## Como executar

Pre-requisitos: Node.js 18 ou superior e uma string de conexao do MongoDB.

Instale as dependencias com `npm install` e `npm install dotenv`, copie o arquivo `.env.example` para `.env` e preencha a variavel `MONGODB_URI`. Depois inicie a aplicacao com `node app.js`.

## Configuracao

A conexao com o banco e lida da variavel de ambiente `MONGODB_URI` em `config/database.js`. O arquivo `.env` esta ignorado pelo git e nao deve ser versionado.
