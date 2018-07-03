import React, { Component } from "react";
import base from "../base";
import JoinGame from "./JoinGame";
import SelectTeam from "./SelectTeam";
import TPTGamePlay from "./TPTGamePlay";

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameCode: null,
      gameJoined: false,
      teamSelected: false,
      game: {}
    };
  }

  joinGame = gameCode => {
    if (!this.props.activeGames.includes(gameCode)) {
      console.log("GameCode Not Found!");
      alert(`Gamecode ${gameCode} does not exist`);
      return;
    }

    base.fetch(`activeGames/${gameCode}`, { asArray: false }).then(game => {
      console.log(game);
      this.setState({ game, gameJoined: true, gameCode });
    });
  };

  selectTeam = team => {
    console.log(team);
    this.setState({ teamSelected: true });
  };

  render() {
    if (!this.state.gameJoined)
      return <JoinGame user={this.props.user} joinGame={this.joinGame} />;

    if (!this.state.teamSelected)
      return (
        <SelectTeam
          user={this.props.user}
          selectTeam={this.selectTeam}
          game={this.state.game}
        />
      );

    return (
      <TPTGamePlay user={this.props.user} gameCode={this.state.gameCode} />
    );
  }
}

export default Play;
