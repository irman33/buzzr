import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import base  from './base'
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  // <div className="top" id="top">
  //   <Header />
  // </div>
  // <div className="bottom" id="bottom" />

  render() {
    return (
      <Router>
        <div className="game" id="gameArea">
          <Route path="/login" component={Login} />
          <Route path="/play" component={Play} />
          <Route path="/host" component={Host} />
        </div>
      </Router>
    );
  }
}

export default App;
