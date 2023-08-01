const Pool = require("pg").Pool;

const user = 'ggodailf';
const host = 'localhost';
const password = '2711';
const database = 'ecoles_ingenieurs';
const port = 5432;

const pool = new Pool({
    user: user,
    host: host,
    password: password,
    database: database,
    port: port
});

module.exports = pool;