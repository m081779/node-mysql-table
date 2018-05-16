//Dependencies
const mysql = require('mysql');


//Detects if in development environment by looking for JAWSDB_URL environmental variable and connects to proper db
let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'm240318420',
		database: 'table_data'
	});
};

connection.connect();

module.exports = connection;