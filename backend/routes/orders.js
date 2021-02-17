const express = require('express');
const router = express.Router();

const { connect } = require('../helpers');

let intId = 1;

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM orders;
	`;

	connect(sqlQuery, res);
});

router.post('/', (req, res) => {
	const {
		clientName,
		modelId,
		employeeId,
		orderDate,
		isPaid,
		orderNote,
	} = req.body;

	console.log(req.body);

	// TO_DO: change to uuid
	const orderId = intId;
	intId++;

	const sqlQuery = `
	INSERT INTO
		orders (
			order_id,
			client_name,
			model_id,
			employee_id,
			order_date,
			is_paid,
			order_note)
	VALUES (
		${orderId},
		"${clientName}",
		${modelId},
		${employeeId},
		"${orderDate}",
		${isPaid},
		"${orderNote}"
	);
	`;

	connect(sqlQuery, res);
});

module.exports = router;
