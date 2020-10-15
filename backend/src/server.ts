import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors()); // O cors permite que a aplicação se torna acessível em diferentes domínios, permitindo que todos os front-ends acessem a API
app.use(express.json()); // Informa ao express que estamos utilizando JSON
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// yarn dev: roda a aplicação

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=name
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Dados e informações)

// Biblioteca banco de dados: yarn add typeorm sqlite3
// O sqlite 3 é a integração do sqlite com o node
// Não é necessário instalar quaisquer banco de dados na máquina, ele cria um no próprio código da aplicação

// Driver nativo, Query builder, Object Relational Mapping (formas de lidar com BD no backend, com diferentes níveis de abstração)
// Query builder ou ORM são intercambiáveis entre si sem qualquer alteração na aplicação

// Migrations: contém instruções dos comandos SQL
// yarn typeorm: informa comandos orm
// Informar ao ORM que ele será executado com typescript e não javascript em package.json - scripts
// yarn typeorm migration:create -n create_orphanages
// yarn typeorm migration:run

// MVC
// Model
// Views
// Controllers

