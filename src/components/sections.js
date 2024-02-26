//import '../pages/_app'; // Make sure to import your CSS file
import React from 'react';
//import '../pages/s_login.js';
import '../style/home.css';
import '../style/m_login.css';
import '../style/Pages2_Cards.css';
import '../style/s_login.css';
// import express from "express";
// import bodyParser from "body-parser";
// import pg from "pg";


// const app = express();
// const port = 3001;

// // app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
  
//   res.render("home.js");
// });
// app.get("/m_login.js",(req,res)=>{
//   res.render("m_login.js");
// })

// app.get("/s_login.js",(req,res)=>{
//   res.render("s_login.js");
// })

const OpeningCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Customer</h1>
          <p></p>
          <button className="sh_btn">LOGIN</button>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Customer</h5>
              <img src="img/customer.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Seller</h1>
          <p></p>
          <a href="s_login"><button className="sh_btn">LOGIN</button></a>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Seller</h5>
              <img src="img/pharma.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
          <h1>Manufacturer</h1>
          <p></p>
          <a href="m_login"><button className="sh_btn">LOGIN</button></a>
        </div>
        <div className="cover">
          <div className="coverFront">
            <div>
              <h5>Manufacturer</h5>
              <img src="img/manuf.jpg" alt="" className="sh_img" />
            </div>
          </div>
          <div className="coverBack"></div>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;


// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });