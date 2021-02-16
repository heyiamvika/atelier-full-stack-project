const express = require('express');
const router = express.Router();

const pool = require('../dbConfig');

const { connect } = require('../helpers');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM garment_accessories;
	`;

	connect(sqlQuery, res);
});

router.post('/', (req, res) => {
	const { title, pricePerItem, itemsLeft } = req.body;

	console.log(title, pricePerItem, itemsLeft);

	const sqlQuery = `
	INSERT INTO garment_accessories (title, price_per_item, items_left)
	VALUES ("${title}", ${pricePerItem}, ${itemsLeft});
	`;

	connect(sqlQuery, res);
});

module.exports = router;
