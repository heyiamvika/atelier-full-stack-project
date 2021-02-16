const express = require('express');
const router = express.Router();

const { connect } = require('../helpers');

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
