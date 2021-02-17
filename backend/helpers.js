const pool = require('./dbConfig');

function connect(sqlQuery, res) {
	console.log(sqlQuery, res);

	pool.getConnection((err, connection) => {
		if (err) {
			return res.status(400).send(err);
		}

		connection.query(sqlQuery, (error, results) => {
			if (error) res.status(404).send(error);
			else res.status(200).send(results);

			connection.release();
		});
	});
}

module.exports = {
	connect,
};
