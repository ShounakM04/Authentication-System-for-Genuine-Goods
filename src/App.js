import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout.js';
import Section from './components/sections.js';
import Start from './components/start.js';
import SLogin from './pages/s_login.js';
import MLogin from './pages/m_login.js';
import Manuf from './pages/manufacturer/index.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/s_login" element={<SLogin />} />
          <Route path="/m_login" element={<MLogin />} />
          <Route path="/index" element={<Manuf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
