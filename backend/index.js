const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const courses = require('./routes/employees');
const accessories = require('./routes/accessories');
const fabrics = require('./routes/fabrics');
const models = require('./routes/models');
const orders = require('./routes/orders');

// Express Middlewares
app.use(express.json());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

app.use('/api/employees', courses);
app.use('/api/accessories', accessories);
app.use('/api/fabrics', fabrics);
app.use('/api/models', models);
app.use('/api/orders', orders);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
