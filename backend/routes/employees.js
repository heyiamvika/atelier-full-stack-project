const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT 
		employee_id, 
		name,
		COUNT(order_id) AS orders_count
	FROM employees e
	LEFT JOIN orders o
		USING (employee_id)
	GROUP BY employee_id;
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
