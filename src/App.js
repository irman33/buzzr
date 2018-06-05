import React, { Component } from 'react';
import {  BrowserRouter as Router,
          Route,
          Link,
          Redirect,
          withRouter
        } from "react-router-dom";
import firebase from 'firebase';
import base, { firebaseApp }  from './base'
import Play from './components/Play';
import Host from './components/Host';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor() {Play
    super();

    this.state = {
      games: []
    };
  }

  authHandler = async (authData) => {

    console.log(authData);
  }

  authenticate = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebaseApp.auth().signInWithPopup(provider).then(this.authHandler);
  }

  render() {
    return (
      <Router>
        <div className="game" id="gameArea">
          <Route exact path="/" component={Play} />
          <Route path="/login" render={ () => <Login authenticate={this.authenticate} /> } />
          <Route path="/host" component={Host} />
        </div>
      </Router>
    );
  }
}

export default App;
