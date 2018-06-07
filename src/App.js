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
import Home from './components/Home';
import HostRoute from './components/HostRoute';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor() {Play
    super();

    this.state = {
      games: [],
      user: {
        isAuthenticated: false
      }
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.authHandler( { user });
      }
    });
  }

  authHandler = async (authData) => {

    let user = {
      uid: authData.user.uid,
      displayName: authData.user.displayName,
      email: authData.user.email, 
      photoURL: authData.user.photoURL,
      isAuthenticated: true
    }

    this.setState({ user });
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
          <Route exact path="/" component={ Home } />
          <Route path="/login" render={ () => <Login authenticate={this.authenticate} /> } />
          <HostRoute path="/host" component={ Host } user={ this.state.user } />
          <HostRoute path="/play" component={ Play } user={ this.state.user } />
        </div>
      </Router>
    );
  }
}

export default App;
