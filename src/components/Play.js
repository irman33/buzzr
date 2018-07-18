import React, { Component } from "react";
import base from "../base";
import JoinGame from "./JoinGame";
import SelectTeam from "./SelectTeam";
import TPTGamePlay from "./TPTGamePlay";

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameJoined: false,
      teamSelected: false,
      user: this.props.user,
      game: {}
    };
  }

  joinGame = gameCode => {
    // Error is GameCode not found
    if (!this.props.activeGames.includes(gameCode)) {
      console.log("GameCode Not Found!");
      alert(`Gamecode ${gameCode} does not exist`);
      return;
    }

    // Pull gamedata and save to state
    base.fetch(`activeGames/${gameCode}`, { asArray: false }).then(game => {
      this.setState({ game, gameJoined: true });
    });
  };

  selectTeam = team => {
    console.log(team);

    let gameData = {
      activeGame: true,
      gameCode: this.state.game.gameCode,
      role: "player",
      team
    };
    // Save game info into User obj
    base
      .post(`users/${this.state.user.uid}/game`, {
        data: gameData
      })
      .then(() => {
        console.log("User Game Updated", gameData);
        let updatedUser = { ...this.state.user };
        updatedUser.game = gameData;

        this.setState({ teamSelected: true, user: updatedUser });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.gameJoined)
      return <JoinGame user={this.props.user} joinGame={this.joinGame} />;

    if (!this.state.teamSelected)
      return (
        <SelectTeam
          user={this.state.user}
          selectTeam={this.selectTeam}
          game={this.state.game}
        />
      );

    return (
      <TPTGamePlay user={this.state.user} gameCode={this.state.game.gameCode} />
    );
  }
}

export default Play;
