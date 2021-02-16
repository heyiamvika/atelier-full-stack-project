const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM models;
	`;

	connect(sqlQuery, res);
});

router.post('/', (req, res) => {
	const {
		title,
		fabricId,
		fabricConsumption,
		garmentAccessoriesId,
		garmentAccessoriesConsumption,
		laborHours,
		laborCostPerHour,
	} = req.body;

	res.status(200).send();

	// const sqlQuery = `
	// INSERT *
	// FROM models;
	// `;

	// connect(sqlQuery);
});

module.exports = router;

function connect(sqlQuery, res) {
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
