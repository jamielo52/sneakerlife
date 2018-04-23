import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/SignUp';

class App extends Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}


export default App;
