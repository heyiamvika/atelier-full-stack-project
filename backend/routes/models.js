const express = require('express');
const router = express.Router();

const { connect } = require('../helpers');

let intId = 1;

router.get('/', (req, res) => {
	const sqlQuery = `
	SELECT 
		m.model_id,
		m.title, 
		f.fabric_id,
		f.title AS fabric_title,
		m.fabric_consumption,
		m.fabric_cost,
		ga.garment_accessories_id,
		ga.title AS garment_accessories_title,
		m.garment_accessories_consumption,
		m.garment_accessories_cost,
		m.work_rate,
		m.retail_price
	FROM models m
	JOIN fabrics f
		USING (fabric_id)
	JOIN garment_accessories ga
		USING(garment_accessories_id);
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

	// TO_DO: change to uuid
	const modelId = intId;
	intId++;

	const sqlQuery = `
	INSERT INTO models (
		model_id,
		title, 
		fabric_id, 
		fabric_consumption, 
		garment_accessories_id, 
		garment_accessories_consumption, 
		work_rate
	) VALUES (
		${modelId},
		"${title}",
		${fabricId}, 
		${fabricConsumption},
		${garmentAccessoriesId},
		${garmentAccessoriesConsumption},
		${Math.round(laborHours * laborCostPerHour, 2)}
	);

	UPDATE models
	SET fabric_cost = (
		SELECT fabric_cost
		FROM (
			SELECT
				fabric_id,
				fabric_consumption,
				square_meter_price,
				fabric_consumption * square_meter_price AS fabric_cost
			FROM models
			LEFT JOIN fabrics
				USING (fabric_id)
			WHERE model_id = ${modelId}
		) AS fabric_details
	)
	WHERE model_id = ${modelId};

	UPDATE models
	SET garment_accessories_cost = (
		SELECT 
			garment_accessories_cost
		FROM (
			SELECT 
				garment_accessories_id,
				garment_accessories_consumption,
				price_per_item,
				garment_accessories_consumption * price_per_item AS garment_accessories_cost
			FROM models
			LEFT JOIN garment_accessories
				USING (garment_accessories_id)
			WHERE model_id = ${modelId}) AS garment_details
	)
	WHERE model_id = ${modelId};

	UPDATE models
	SET retail_price = (
		SELECT retail_price
			FROM (
			SELECT 
				fabric_cost,
				garment_accessories_cost,
				work_rate,
				ROUND((fabric_cost + garment_accessories_cost + work_rate) / 100 * 140) AS retail_price
			FROM models
			WHERE model_id = ${modelId}
		) AS retail_price_details
	)
	WHERE model_id = ${modelId};
	`;

	connect(sqlQuery, res);
});

module.exports = router;
