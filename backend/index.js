const express = require('express');
const uuid = require('uuid');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// require('./routes/models');
// require('./routes/fabrics');
const courses = require('./routes/employees');
// require('./routes/orders');

// Express Middlewares
app.use(express.json());
app.use('/api/employees', courses);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
