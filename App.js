import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import PasswordForgotten from './password';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/password-forgotten">
          <PasswordForgotten />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;