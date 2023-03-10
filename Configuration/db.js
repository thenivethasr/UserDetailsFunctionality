const { Pool, Client } = require("pg");
const credentials = {
    user: "postgres",
    host: "aura.cm5ynslxal3n.ap-south-1.rds.amazonaws.com",
    database: "aura",
    password: "makeithappen3",
    port:5432,
};
exports.pool = new Pool(credentials);
//    host: "aura.chuhn0d0ldzx.us-west-2.rds.amazonaws.com",
