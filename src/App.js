import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout.js';
import Section from './components/sections.js';
import Start from './components/start.js';
import SLogin from './pages/s_login.js';
import MLogin from './pages/m_login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/s_login" component={SLogin} />
          <Route path="/m_login" component={MLogin} />
          <Route>
            <Layout>
              <Section />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
