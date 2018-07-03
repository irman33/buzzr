import React, { Component } from "react";
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

  createGame = (redTeamName, blueTeamName) => {
    console.log(redTeamName, blueTeamName);

    let gameCode = null;

    while (this.props.activeGames.includes(gameCode) || gameCode === null) {
      gameCode = Math.floor(Math.random() * 999) + 1;
    }

    console.log(gameCode);

    const game = {
      gameCode,
      redTeamName,
      blueTeamName,
      redTeam: [],
      blueTeam: [],
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
