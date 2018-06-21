import React, { Component } from "react";
import base from "../base";
import CreateGame from "./CreateGame";
import TPTGameHost from "./TPTGameHost";

class Host extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameCreated: false,
      game: {}
    };
  }

  createGame = (gameCode, redTeamName, blueTeamName) => {
    console.log(gameCode, redTeamName, blueTeamName);

    const game = {
      gameCode,
      redTeamName,
      blueTeamName,
      redTeam: ["Irman", "Frank", "Louie"],
      blueTeam: ["Tank", "Bob", "Sam"],
      redTeamScore: 0,
      blueTeamScore: 0,
      buzzer: {
        buzzerOn: true,
        buzzedIn: ""
      }
    };

    this.setState({ game: game, gameCreated: true });
  };

  render() {
    if (!this.state.gameCreated)
      return <CreateGame user={this.props.user} createGame={this.createGame} />;

    return <TPTGameHost user={this.props.user} game={this.state.game} />;
  }
}

export default Host;
