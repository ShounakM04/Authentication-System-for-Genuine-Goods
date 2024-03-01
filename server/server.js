const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "pbl",
  password: "",
  port: 5432,
});

db.connect();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/s_signup", (req, res) => {
  const { id, city, pass } = req.body;
  db.query("INSERT INTO seller (seller_id, seller_city, pass) VALUES ($1, $2, $3)", [id, city, pass], (err, result) => {
    if (err) {
      console.error("Error inserting seller:", err.stack);
      return res.status(500).send({ error: "Error signing up" }); // Sending detailed error response
    }
    res.status(200).send("Successfully signed up");
  });
});

// app.post("/s_signin", (req, res) => {
//   const { id, pass } = req.body;
//   db.query("SELECT * FROM seller WHERE seller_id = $1", [id], (err, result) => {
//     if (err) {
//       console.error("Error retrieving seller:", err.stack);
//       return res.status(500).send({ error: "Error signing in" });
//     }
//     // Check if result.rows is undefined or empty
//     if (!result || !result.rows || result.rows.length === 0) {
//       return res.status(401).send("Invalid credentials");
//     }
//     // Since there should be only one row for a given seller_id, 
//     // you can directly access the first row (result.rows[0])
//     const seller = result.rows[0];
//     if (seller.pass !== pass) {
//       return res.status(401).send("Invalid credentials");
//     }
//     res.status(200).send("Successfully signed in");
//   });
// });

app.post("/s_signin", (req, res) => {
  // const { id, pass } = req.body;
  // db.query("SELECT * FROM seller WHERE seller_id = $1", [id], (err, result) => {
  //   if (err) {
  //     console.error("Error retrieving seller:", err.stack);
  //     return res.status(500).send({ error: "Error signing in" });
  //   }
  //   // Check if result.rows is undefined or empty
  //   if (!result || !result.rows || result.rows.length === 0) {
  //     return res.status(401).send("Invalid credentials");
  //   }
  //   // Since there should be only one row for a given seller_id, 
  //   // you can directly access the first row (result.rows[0])
  //   const seller = result.rows[0];
  //   if (seller.pass !== pass) {
  //     return res.status(401).send("Invalid credentials");
  //   }
  //   res.status(200).send("Successfully signed in");
  // });

  const { id, pass } = req.body;
  db.query("SELECT * FROM seller WHERE seller_id = $1", [id], (err, result) => {
    if (err) {
      console.error("Error retrieving manufacturer:", err.stack);
      return res.status(500).send({ error: "Error signing in" }); // Sending detailed error response
    }
    const seller = result.rows[0];
    if (!seller || seller.pass !== pass) {
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
      return res.status(500).send({ error: "Error signing up" }); // Sending detailed error response
    }
    res.status(200).send("Successfully signed up");
  });
});

app.post("/m_signin", (req, res) => {
  const { id, pass } = req.body;
  db.query("SELECT * FROM manufacturer WHERE manuf_id = $1", [id], (err, result) => {
    if (err) {
      console.error("Error retrieving manufacturer:", err.stack);
      return res.status(500).send({ error: "Error signing in" }); // Sending detailed error response
    }
    const manufacturer = result.rows[0];
    if (!manufacturer || manufacturer.pass !== pass) {
      return res.status(401).send("Invalid credentials");
    }
    res.status(200).send("Successfully signed in");
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});