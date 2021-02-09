const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

router.get('/', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			return res.status(400).send(err);
		}
		connection.query('SELECT * FROM employees', (error, results) => {
			if (error) res.status(404).send(error);
			else res.send(results);

			connection.release();
		});
	});
});

module.exports = router;
