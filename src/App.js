import React, { Fragment } from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Páginas
import Home from "./pages/Home/";
import Login from "./pages/Login/";
import Register from "./pages/Register/";
import Profile from "./pages/Profile/";
import NewPost from "./pages/NewPost/";
import { isAuthenticated, isAdmin } from "./services/auth";

// Redireciona para página de login se o usuário não estiver logado
const AuthenticatedRoute = props => (
  <Fragment>
    {isAuthenticated() ? props.children : <Redirect to="/login" />}
  </Fragment>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:page" component={Home} />

        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/register" component={Register} />

        <AuthenticatedRoute>
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/admin/newpost" component={NewPost} />
        </AuthenticatedRoute>

      </Switch>
    </Router>
  );
}

export default App;
