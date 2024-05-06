const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'taha_fyp',
    password: '1338',
    port: 5432,
});

module.exports = pool;
