import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

// Páginas
import Home from './pages/Home/';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:page" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
