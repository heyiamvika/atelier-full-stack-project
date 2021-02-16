const express = require('express');
const router = express.Router();

const { connect } = require('../helpers');

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT * 
    FROM fabrics;
	`;

	connect(sqlQuery, res);
});

router.post('/', (req, res) => {
	const { title, width, squareMeterPrice, metersLeft } = req.body;

	const sqlQuery = `
	INSERT INTO fabrics (title, width, square_meter_price, meters_left)
	VALUES ("${title}", ${width}, ${squareMeterPrice}, ${metersLeft});
	`;

	connect(sqlQuery, res);
});

module.exports = router;
