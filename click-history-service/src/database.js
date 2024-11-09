const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error:', err));

module.exports = client;
