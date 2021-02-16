const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM models;
	`;

	connect(sqlQuery);
});

router.post('/', (req, res) => {
	// const sqlQuery = `
	// INSERT *
	// FROM models;
	// `;

	connect(sqlQuery);
});

module.exports = router;

function connect(sqlQuery) {
	pool.getConnection((err, connection) => {
		if (err) {
			return res.status(400).send(err);
		}
		connection.query(sqlQuery, (error, results) => {
			if (error) res.status(404).send(error);
			else res.send(results);

			connection.release();
		});
	});
}
