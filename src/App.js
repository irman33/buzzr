import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase";
import base, { firebaseApp } from "./base";
import Play from "./components/Play";
import Host from "./components/Host";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authed: false,
      loading: true,
      activeGames: {},
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });

    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });

    this.activeGamesRef = base.bindToState("activeGames", {
      context: this,
      state: "activeGames"
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.activeGamesRef);
  }

  authHandler = async authData => {
    let user = {};

    base
      .fetch(`users/${authData.user.uid}`, { asArray: false })
      .then(returnUser => {
        if (returnUser.uid) {
          user = returnUser;
        } else {
          user = {
            uid: authData.user.uid,
            displayName: authData.user.displayName,
            email: authData.user.email,
            photoURL: authData.user.photoURL
          };

          base
            .post(`users/${user.uid}/`, {
              data: user
            })
            .then(() => {
              console.log("Saved new user!");
            })
            .catch(err => {
              console.log(err);
            });
        }

        this.setState({
          user,
          authed: true,
          loading: false
        });
      });
  };

  authenticate = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(this.authHandler);
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log("Logged Out");
      })
      .catch(function(error) {
        // An error happened
        console.error("Error logging out");
      });

    this.setState({ user: null });
  };

  render() {
    return this.state.loading === true ? (
      <h1>Loading</h1>
    ) : (
      <Router>
        <div className="game" id="gameArea">
          <Header user={this.state.user} logout={this.logout} />
          <Route
            exact
            path="/"
            render={() => <Home user={this.state.user} />}
          />
          <Route
            path="/login"
            render={() => (
              <Login user={this.state.user} authenticate={this.authenticate} />
            )}
          />
          <PrivateRoute
            path="/host"
            component={Host}
            authed={this.state.authed}
            user={this.state.user}
            activeGames={Object.keys(this.state.activeGames)}
          />
          <PrivateRoute
            path="/play"
            component={Play}
            authed={this.state.authed}
            user={this.state.user}
            activeGames={Object.keys(this.state.activeGames)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
