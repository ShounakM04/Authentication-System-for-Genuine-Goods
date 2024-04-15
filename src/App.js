import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./components/start.js";
import SLogin from "./pages/s_login.js";
import MLogin from "./pages/m_login.js";
import Manuf from "./pages/manufacturer/index/index.js";
import AddProduct from "./pages/manufacturer/addProduct.js";
import Qrcode from "./pages/customer.js";
import AddSeller from "./pages/manufacturer/addSeller.js";
import SellToSeller from "./pages/manufacturer/sellToSeller.js";
import SellToCustomer from "./pages/seller/sellToCustomer.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import DisableBrowserNavigation from "./components/DisableBrowserNavigation .js";

function App() {
  const [address, setAddress] = useState("");
  const [brandName, setBrandName] = useState("");
  const [manuId, setManuId] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <Router>
        <div className="App">
          <DisableBrowserNavigation />
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route path="/sellerlogin" element={<SLogin />} />
            <Route 
              path="/manufacturerlogin"
              element={
                <MLogin
                  setAddress={setAddress}
                  setBrandName={setBrandName}
                  setCity={setCity}
                  setManuId={setManuId}
                />
              }
            />
            <Route
              path="/manufacturer"
              element={
                <Manuf brandName={brandName} manuId={manuId} city={city} />
              }
            />
            <Route
              path="/manufacturer/addProduct"
              element={<AddProduct address={address} />}
            />
            <Route path="/consumerlogin" element={<Qrcode />} />
            <Route
              path="/manufacturer/addSeller"
              element={<AddSeller address={address} />}
            />
            <Route
              path="/manufacturer/selltoseller"
              element={<SellToSeller address={address} />}
            />
            <Route
              path="/selltoConsumer"
              element={<SellToCustomer address={address} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
