MySQL, Express, React/Redux and Node Boilerplate in ES6/ES7

## Iniciando o projeto

### 1. Pré-requisitos

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager

### 2. Instalação

No prompt de comando, execute os seguintes comandos:

``` 
 $ git clone https://github.com/lyonsegadilha/Projeto-Alunos-UDF.git
 $ cd Projeto-Alunos-UDF
 $ cp .env.example .env (edit it with your secret key and database information)
 $ npm install
 $ npm run migrate
 ```
 Finalmente, inicie e construa a aplicação:
 
 ```
 $ npm run build (Para desenvolvimento)
 $ npm run build:prod (Para produção)
```

Lista de comandos do NPM:
 
  ```
  $ npm run lint       # linting
  $ npm run clean      # remova a pasta dist e node_modules e instale as dependências
 ```

### 3. Uso

URL : http://localhost:3000/

Navegar para http://localhost:3000/swagger para a documentação da API.

### 4. Useful Link
- Web framework for Node.js - [Express](http://expressjs.com/)
- JavaScript ORM  for Node.js - [Bookshelf](http://bookshelfjs.org/)
- SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle - [Knex](http://knexjs.org/)
- JSON Web Tokens(jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Logging Library - [Winston](https://www.npmjs.com/package/winston)
- Object schema validation  - [Joi](https://www.npmjs.com/package/joi)
- API documentation using [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) and [swagger-ui](https://www.npmjs.com/package/swagger-ui)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Predictable state container - [Redux](http://redux.js.org/)
- A React component library implementing Google's Material Design - [Material-UI](https://material-ui-1dab0.firebaseapp.com/)
- Redux Form - [Redux Form](http://redux-form.com/7.2.0/)
- Declarative routing for React - [React-Router](https://reacttraining.com/react-router/)
- Promise based HTTP client - [Axios](https://github.com/mzabriskie/axios)
- Code linting tool - [ESLint](http://eslint.org/)