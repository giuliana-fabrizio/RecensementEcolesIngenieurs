const Pool = require("pg").Pool;

const user = process.env.USER;
const host = process.env.HOST;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const port = process.env.PORT_BDD;

const pool = new Pool({
    user: user,
    host: host,
    password: password,
    database: database,
    port: port
});

module.exports = pool;