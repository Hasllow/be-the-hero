/*
	Métodos HTTP:

	GET: Buscar/listar uma informação do back-end
	POST: Criar uma informação no back-end
	PUT: Alterar uma informação do back-end
	DELETE: Deletar uma informação no back-end
*/

/*
	Tipos de parâmetros:

	Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
	Route Params: Parâmetros utilizados para identificar recursos
	Request Body: Corpo da requisição, utlizado para criar ou alterar recursos

*/

/*
	SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
	NoSQL: MongoDB, CouchDB
*/

const express = require("express");
const cors = require("cors");
const routes = require("./routes")
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3333);
