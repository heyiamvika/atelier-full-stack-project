const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM garment_accessories;
	`;

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
});

module.exports = router;
