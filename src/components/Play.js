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
      user: this.props.user,
      team: "",
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
      this.setState({ game, gameJoined: true, gameCode });
    });
  };

  selectTeam = team => {
    // Sign into game's team roster
    base
      .fetch(`activeGames/${this.state.game.gameCode}/${team}Team`, {
        asArray: true
      })
      .then(teamRoster => {
        console.log(teamRoster);
        teamRoster.push(this.state.user.displayName);

        base
          .post(`activeGames/${this.state.game.gameCode}/${team}Team`, {
            data: teamRoster
          })
          .then(() => {
            console.log("Roster Updated", teamRoster);
          })
          .catch(err => {
            console.log(err);
          });
      });

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
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ teamSelected: true, team });
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
      <TPTGamePlay user={this.props.user} gameCode={this.state.gameCode} />
    );
  }
}

export default Play;
