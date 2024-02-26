const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "pbl",
  password: "Surya@260604",
  port: 5432,
});

db.connect();

const app = express();
const port = 3001;

//app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/s_signup", (req, res) => {
  const { id, city, password } = req.body;
  db.query("INSERT INTO seller (seller_id, seller_city, pass) VALUES ($1, $2, $3)", [id, city, password], (err, result) => {
    if (err) {
      console.error("Error inserting seller:", err.stack);
      return res.status(500).send("Error signing up");
    }
    res.status(200).send("Successfully signed up");
  });
});

app.post("/s_signin", (req, res) => {
  const { id, password } = req.body;
  db.query("SELECT * FROM seller WHERE seller_id = $1 AND pass = $2", [id, password], (err, result) => {
    if (err) {
      console.error("Error retrieving seller:", err.stack);
      return res.status(500).send("Error signing in");
    }
    if (result.rows.length === 0) {
      return res.status(401).send("Invalid credentials");
    }
    res.status(200).send("Successfully signed in");
  });
});

app.post("/m_signup", (req, res) => {
  const { id, brand, city, pass } = req.body;
  db.query("INSERT INTO manufacturer (manuf_id, manuf_brand, manuf_city, pass) VALUES ($1, $2, $3, $4)", [id, brand, city, pass], (err, result) => {
    if (err) {
      console.error("Error inserting manufacturer:", err.stack);
      return res.status(500).send("Error signing up");
    }
    res.render("m_login.ejs");
  });
});
var manufacturer;
app.post("/m_signin", (req, res) => {
  const { id, pass } = req.body;
  db.query("SELECT * FROM manufacturer WHERE manuf_id = $1", [id], (err, result) => {
    if (err) {
      console.error("Error retrieving manufacturer:", err.stack);
      return res.status(500).send("Error signing in");
    }
     manufacturer = result.rows[0];
    if (!manufacturer || manufacturer.pass !== pass) {
      return res.render("m_login.ejs");
    }
    res.render("manuf_page_options.ejs",{brand : manufacturer.manuf_brand , manuf_id : manufacturer.manuf_id, manuf_city: manufacturer.manuf_city});
  });
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
