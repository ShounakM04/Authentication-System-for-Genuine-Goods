import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Section from './components/sections';
import Start from './components/start';
import SLogin from './pages/s_login';
import MLogin from './pages/m_login';

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
