require("dotenv").config();
const pg = require("pg");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "PBL",
  password: "AmPpg@123",
  port: 5432,
});

module.exports = db;
