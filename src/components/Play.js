import React, { Component } from "react";
import JoinGame from "./JoinGame";
import TPTGamePlay from "./TPTGamePlay";

class Play extends Component {
  constructor() {
    super();

    this.state = {
      gameCode: null,
      gameJoined: false
    };
  }

  joinGame = gameCode => {
    console.log(gameCode);

    this.setState({ gameCode, gameJoined: true });
  };

  render() {
    if (!this.state.gameJoined) return <JoinGame joinGame={this.joinGame} />;

    return <TPTGamePlay gameCode={this.state.gameCode} />;
  }
}

export default Play;
