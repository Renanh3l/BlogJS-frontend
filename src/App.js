import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

// Páginas
import Home from './pages/Home/';
import Login from './pages/Login/';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/:page" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
