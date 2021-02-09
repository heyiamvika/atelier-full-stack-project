var mysql = require('mysql');

// MySQL config
const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'Atelier',
});

module.exports = pool;
