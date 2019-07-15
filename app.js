const express = require('express');
const app = express();
const db = require('./app/models/index');

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

app.listen(3229, () => { console.log('começou o app') });

db.sequelize.sync();