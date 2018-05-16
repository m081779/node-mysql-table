const mysql = require('mysql');

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