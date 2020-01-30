import React, { Fragment } from "react";

import {
  Route,
  Router,
  Switch,
  Redirect,
} from "react-router-dom";

import {createBrowserHistory} from 'history';

// Páginas
import Home from "./pages/Home/";
import Login from "./pages/Login/";
import Register from "./pages/Register/";
import Profile from "./pages/Profile/";
import NewPost from "./pages/NewPost/";
import PostPage from "./pages/PostPage/";
import { isAuthenticated } from "./services/auth";

// Redireciona para página de login se o usuário não estiver logado
const AuthenticatedRoute = props => (
  <Fragment>
    {isAuthenticated() ? props.children : <Redirect to="/login" />}
  </Fragment>
);

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:page" component={Home} />

        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/register" component={Register} />

        <Route exact path="/post/:postId" component={PostPage}/>
        
        <AuthenticatedRoute>
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/admin/newpost" component={NewPost} />
        </AuthenticatedRoute>

      </Switch>
    </Router>
  );
}

export default App;
