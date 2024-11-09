require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
});

client.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error', err.stack));

module.exports = client;
