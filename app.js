require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const eRentRoutes = require('./routes/eRoutes');
const mongoose = require('mongoose');


app.use(express.json());
app.use(morgan('tiny'));
app.use('/eRoutes', eRentRoutes)




mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log('error'));
db.once('open', () => console.log('connected to database'));


app.listen(5000, () => console.log('server is up and running!...'));